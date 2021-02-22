import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import LeaguesContainer from '../contaners/leagues.containers'
import MatchesContainer from '../contaners/matches.containers'

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
        </Switch>
      </div>
    </Router>
  )
}