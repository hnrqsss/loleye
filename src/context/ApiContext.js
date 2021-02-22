import React from 'react'
import { api } from '../utils/api'

export const ApiContext = React.createContext({
    tournaments: [],
    selectedToournament: null,
    matches: [],
    selectedMatch: null,
    error: null,
    isLoading: false,
    standings: [],
    fetchTournaments: () => {},
    fetchTournament: () => {},
    fetchMatches: () => {},
    fetchMatch: () => {},
    fetchStandings: () => {},
    setError: () => {},
})


export default function ApiProvider({ children }) {

    const [tournaments, setTournaments] = React.useState([])
    const [selectedTournament, setSelectedTournament] = React.useState(null)
    
    const [matches, setMatches] = React.useState([])
    const [selectedMatch, setSelectedMatch] = React.useState(null)
    const [standings, setStandings] = React.useState([])

    const [error, setError] = React.useState(null)
    const [isLoading, setIsloading] = React.useState(false)


    const fetchTournaments = React.useCallback(async ({
        param = '',
        value = ''

    }) => {
        try {
            setIsloading(true)
            let base_url = 'tournaments?search[slug]=league-of-legends'

            if (param !== '' && value !== '') {
                base_url += `&search[${param}]=${value}`
            }

            const { data } = await api.get(base_url)

            setTournaments(data)

            setIsloading(false)
        } catch(err) {
            setError(err.message)
            setIsloading(false)
        }
    }, [setError, setTournaments, setIsloading])

    const fetchTournament = React.useCallback(async (id) => {
        try {
            setIsloading(true)
            let base_url = `tournaments/${id}`

            const { data } = await api.get(base_url)

            setSelectedTournament(data)

            setIsloading(false)
        } catch(err) {
            setError(err.message)
            setIsloading(false)
        }
    }, [setError, setSelectedTournament, setIsloading])
    
    const fetchStandings = React.useCallback(async (id) => {
        try {
            setIsloading(true)
            let base_url = `tournaments/${id}/standings`

            const { data } = await api.get(base_url)

            setStandings(data)

            setIsloading(false)
        } catch(err) {
            setError(err.message)
            setIsloading(false)
        }
    }, [setError, setStandings, setIsloading])

    const fetchMatches = React.useCallback(async (league_id) => {
        try {
            setIsloading(true)
            let base_url = `/leagues/${league_id}/matches/upcoming`

            const { data } = await api.get(base_url)

            setMatches(data)

            setIsloading(false)
        } catch(err) {
            setError(err.message)
            setIsloading(false)
        }
    }, [setError, setMatches, setIsloading])

    const fetchMatch = React.useCallback(async (id) => {
        try {
            setIsloading(true)
            let base_url = `/matches/${id}`

            const { data } = await api.get(base_url)

            setSelectedMatch(data)

            setIsloading(false)
        } catch(err) {
            setError(err.message)
            setIsloading(false)
        }
    }, [setError, setSelectedMatch, setIsloading])

    return (
        <ApiContext.Provider
            value={{
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
            }}
        >
            {children}
        </ApiContext.Provider>
    )
}