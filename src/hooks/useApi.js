import React from 'react'
import { ApiContext } from '../context/ApiContext'

export default function useApi() {
    const {
        tournaments,
        selectedTournament,
        matches,
        selectedMatch,
        isLoading,
        standings,
        error,

        fetchTournaments,
        fetchTournament,
        fetchMatches,
        fetchMatch,
        fetchStandings,
        setError,
    } = React.useContext(ApiContext)
    
    return {
        tournaments,
        selectedTournament,
        matches,
        selectedMatch,
        isLoading,
        standings,
        error,

        fetchTournaments,
        fetchTournament,
        fetchMatches,
        fetchMatch,
        fetchStandings,
        setError,
    }
}
