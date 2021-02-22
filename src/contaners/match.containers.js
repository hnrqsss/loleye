import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import useApi from '../hooks/useApi'
import Match from '../Pages/Match'

export default function MatchContainer() {
    
    const [socket, setSocket] = React.useState(null)
    const { selectedMatch: match ,fetchMatch } = useApi()
    const route = useRouteMatch()

    React.useEffect(() => {

        if (route?.params?.id) {
            const { id } = route.params

            fetchMatch(id)
        }

    }, [route, fetchMatch])

    React.useEffect(() => {
        if (match?.live?.supported) {
            const { REACT_APP_WSS, REACT_APP_API_KEY } = process.env
            setSocket(new WebSocket(`${REACT_APP_WSS}/matches/${match.id}?token=${REACT_APP_API_KEY}`))
        }
    }, [match, setSocket])

    React.useEffect(() => {
        if (socket) {
            socket.onmessage = function(event) {
                console.log(JSON.parse(event.data))
            }

            socket.onopen = function (_event) {
                socket.send(JSON.stringify({'type':'recover','payload':{'game_id': match?.games[match?.games?.length - 1]?.id }}));
            }
        }
    }, [match?.games, socket])

    return (
        <Match />
    )
}
