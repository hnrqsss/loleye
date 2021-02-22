import React from 'react'
import {
  Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'

import LeaguesContainer from '../contaners/leagues.containers'
import MatchesContainer from '../contaners/matches.containers'
import MatchContainer from '../contaners/match.containers'

export default function Routes() {
  const history = useHistory()

  return (
    <Router history={history} >
      <div>
        <Switch>
          <Route path='/' exact>
            <LeaguesContainer />
          </Route>
          <Route path='/partidas/:id'>
            <MatchesContainer />
          </Route>
          <Route path='/partida/:id'>
            <MatchContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}