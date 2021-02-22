import React from 'react'

import useApi from '../hooks/useApi'
import Leagues from '../Pages/Leagues'

export default function LeaguesContainer() {
    
    const { fetchTournaments } = useApi()
    
    React.useEffect(() => {
        fetchTournaments({})
    }, [fetchTournaments])
    
    return (
        <Leagues  />
    )
}
