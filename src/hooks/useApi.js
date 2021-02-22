import React from 'react'
import { ApiContext } from '../context/ApiContext'

export default function useApi() {
    const {
        tournaments,
        selectedTournament,
        matches,
        selectedMatch,
        isLoading,
        error,

        fetchTournaments,
        fetchTournament,
        fetchMatches,
        fetchMatch,
        setError,
    } = React.useContext(ApiContext)
    
    return {
        tournaments,
        selectedTournament,
        matches,
        selectedMatch,
        isLoading,
        error,

        fetchTournaments,
        fetchTournament,
        fetchMatches,
        fetchMatch,
        setError,
    }
}
