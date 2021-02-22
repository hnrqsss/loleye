import { Col, Row } from 'antd'
import React from 'react'
import useApi from '../../hooks/useApi'

import './match.scss'

export default function Match() {
    
    const { selectedMatch: match } = useApi()

    return (
        <main  className='match-wrapper'>
            <Row>
                <Col offset={8} span={8} >
                    <div className='header'>
                        <div className='iamge-container'>
                            <img 
                                src={match?.opponents[0]?.opponent.image_url}
                                alt={match?.opponents[0]?.opponent.name} 
                            />
                            <p>{match?.opponents[0]?.opponent.name}</p>
                        </div>
                        {match?.results[0]?.score} <span> x </span> {match?.results[1]?.score}
                        <div className='iamge-container'>
                            <img 
                                src={match?.opponents[1]?.opponent.image_url}
                                alt={match?.opponents[1]?.opponent.name}
                            />
                            <p>{match?.opponents[1]?.opponent.name}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col offset={8} span={8} >
                    <h3>Status: {match?.games[match?.games?.length - 1]?.status}</h3>
                    <h3>Possui API: {match?.live?.supported ? 'Sim' : 'Não'}</h3>
                </Col>
            </Row>
        </main>
    )
}
