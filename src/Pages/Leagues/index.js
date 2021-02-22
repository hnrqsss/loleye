import React from 'react'
import { List, Card } from 'antd'

import useApi from '../../hooks/useApi'

import './leagues.scss'
import { Link } from 'react-router-dom'

export default function Leagues() {
    const { tournaments } = useApi()
    
    return (
        <main  className='leagues-wrapper'>
            <List 
                dataSource={tournaments}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 8,
                    xxl: 4,
                }}
                renderItem={item => (
                    <List.Item>
                        <Card title={item?.league?.name}>
                            <Link to={`/partidas/${item?.id}`}>
                                <img src={item?.league?.image_url} alt={item?.league_id} />
                            </Link>
                        </Card>
                    </List.Item>
                )}
            />
        </main>
    )
}
