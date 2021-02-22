import React from 'react'

import useApi from '../hooks/useApi'

export default function LeaguesContainer() {
    
    const { tournaments, fetchTournaments } = useApi()
    
    React.useEffect(() => {
        fetchTournaments({})
    }, [fetchTournaments])
    
    return (
        <div>
            <p>leagues</p>
        </div>
    )
}
