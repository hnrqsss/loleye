import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import LeaguesContainer from '../contaners/leagues.containers'
import MatchesContainer from '../contaners/matches.containers'
import MatchContainer from '../contaners/match.containers'

export default function Routes() {
  return (
    <Router>
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