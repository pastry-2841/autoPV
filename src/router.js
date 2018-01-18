import React from 'react'
import { Router, Switch, Route } from 'dva/router'
import dynamic from 'dva/dynamic'
import users from './models/users'
import App from './routes/app'
import Location from './routes/Location'
// console.log(Location)
const NoMatch = ({ location }) => (
  <div>
    <h3>404 not found</h3>
  </div>
)

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Location} />
        <Route path='/main' component={App} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
