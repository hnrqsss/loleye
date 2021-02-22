import React from 'react'
import { Col, Row,  List, Collapse, Button } from 'antd'
import useApi from '../../hooks/useApi'

import './matches.scss'
import { Link } from 'react-router-dom'

const { Panel } = Collapse

export default function Matches() {
    const { selectedTournament: tournament, matches } = useApi()

    return (
        <main className='matches-wrapper'>
            <Row>
                <Col span={8} offset={8}>
                    <img className='matches-main-image' src={tournament?.league?.image_url} alt={tournament?.id} />
                    <h2>{tournament?.league?.name}</h2>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                        <List 
                            dataSource={matches}
                            renderItem={item => {
                                const date = !item?.rescheduled 
                                    ? new Date(item?.original_scheduled_at) 
                                    : new Date(item?.scheduled_at)
                                return(
                                    <Collapse collapsible="header" defaultActiveKey={['1']}>
                                        <Panel header={`
                                            ${item?.opponents[0]?.opponent?.name} 
                                                VS 
                                            ${item?.opponents[1]?.opponent?.name} 
                                            - MD${item?.number_of_games} 
                                            - ${date.toLocaleDateString('pt-BR')}
                                        `} 
                                        key={item?.id}
                                        >
                                            
                                            <Row>
                                                <Col span={12}>
                                                    <Link to={`/partida/${item?.id}`} >Estatísticas</Link>
                                                </Col>
                                                <Col span={12}>
                                                    <div className='info-match'>
                                                        <Button target='_blank' href={item?.official_stream_url} type={'link'} >
                                                            Assistir
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Panel>
                                    </Collapse>
                                )}}
                        />
                </Col>
                <Col span={12}></Col>
            </Row>
        </main>
    )
}
