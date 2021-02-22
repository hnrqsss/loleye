import React from 'react'
import { Col, Row,  List, Collapse, Button, Table } from 'antd'
import useApi from '../../hooks/useApi'

import './matches.scss'
import { Link } from 'react-router-dom'

const { Panel } = Collapse

export default function Matches() {
    const { selectedTournament: tournament, matches, standings } = useApi()

    return (
        <main className='matches-wrapper'>
            <Row>
                <Col xl={8} xs={0}/>
                <Col xl={8} xs={24}>
                    <img className='matches-main-image' src={tournament?.league?.image_url} alt={tournament?.id} />
                    <h2>{tournament?.league?.name}</h2>
                </Col>
            </Row>
            <Row>
                <Col xl={12} xs={24}>
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
                <Col xl={12} xs={24}>
                    <Table
                        className='standings-table'
                        columns={[
                            {
                                title: 'Time',
                                dataIndex: 'team',
                                render: item => <img src={item?.image_url} alt={item?.name}/>,
                                key: 'team'
                            },
                            {
                                title: 'Jogos',
                                dataIndex: 'total',
                                key: 'total'
                            },
                            {
                                title: 'Vitórias',
                                dataIndex: 'wins',
                                key: 'wins'
                            },
                            {
                                title: 'Derrotas',
                                dataIndex: 'losses',
                                key: 'losses'
                            },

                        ]}
                        dataSource={standings}
                        pagination={false}
                    />
                </Col>
            </Row>
        </main>
    )
}
