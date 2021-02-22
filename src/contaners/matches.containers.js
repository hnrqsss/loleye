import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import useApi from '../hooks/useApi'
import Matches from '../Pages/Matches'

export default function MatchesContainer() {
    const route = useRouteMatch()
    const { selectedTournament: tournament, fetchTournament, fetchMatches } = useApi()

    React.useEffect(() => {
        
        if (route?.params) {
            const { id } = route.params

            fetchTournament(id)
        }

    }, [route, fetchTournament])


    React.useEffect(() => {
        if (tournament) {
            fetchMatches(tournament?.league?.id)
        }
    }, [tournament, fetchMatches])

    return (
        <Matches />
    )
}
