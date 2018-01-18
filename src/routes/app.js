import React from 'react'
import { connect } from 'dva'
import { Route, Link, Switch } from 'dva/router'
import './app.less'

class App extends React.Component {
  componentDidMount () {
    // window.ws = new WebSocket('ws://localhost:3000')
    // window.ws.onopen = function (event) {
    //   console.log('socket open')
    // }
    // window.ws.onmessage = function (event) {
    //   const { data } = event
    //   this.props.dispatch({
    //     type: 'task/setTask',
    //     payload: {
    //       items: data
    //     }
    //   })
    // }.bind(this)
  }
  onClose (item) {
    this.props.dispatch({
      type: 'task/closeSession',
      payload: {
        task: item
      }
    })
  }
  onShrink (item) {
    this.props.dispatch({
      type: 'task/shrinkSession',
      payload: {
        task: item
      }
    })
  }
  render () {
    const {match, location} = this.props
    const {pathname} = location
    const urls = {
      dashboard: `${match.url}/dashboard`,
      hostMonitor: `${match.url}/hostMonitor`,
      logMonitor: `${match.url}/logMonitor`,
      hostBoard: `${match.url}/host-board`,
      test: `${match.url}/test`,
    }
    return (
      <div>
        <div className='header'></div>
        <div className='content'>
          <div className='navigation'>
            <ul>
              <li className={`${pathname.match(urls['dashboard']) ? 'selected' : ''}`}>
                <Link to={urls['dashboard']}>
                  <div>Dashboard</div>
                </Link>
              </li>
              <li className={/host/.test(pathname) ? 'selected' : ''}>
                <Link to={urls['hostMonitor']}>
                  <div>主机监控</div>
                </Link>
              </li>
              {/* <li className={`${pathname.match(urls['hostMonitor']) ? 'selected' : ''}`}>
                <Link to={urls['hostMonitor']}>
                  <div>主机监控</div>
                </Link>
              </li>
              <li className={`${pathname.match(urls['logMonitor']) ? 'selected' : ''}`}>
                <Link to={urls['logMonitor']}>
                  <div>日志监控</div>
                </Link>
              </li>
              <li className={`${pathname.match(urls['test']) ? 'selected' : ''}`}>
                <Link to={urls['test']}>
                  <div>测试页面</div>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className='working'>
            <Switch>
              <Route path={`${match.url}/dashboard`} component={Dashboard} />
              <Route path={`${match.url}/hostMonitor`} component={HostTable} />
              <Route path={`${match.url}/host-board`} component={HostBoard} />
              {/* <Route path={`${match.url}/hostMonitor`} exact component={HostMonitor} />
              <Route path={`${match.url}/hostMonitor/details`} component={HostDetails} />
              <Route path={`${match.url}/logMonitor`} component={LogMonitor} /> */}
              <Route path={`${match.url}/setting`} component={Setting} />
              <Route path={`${match.url}/test`} component={Test} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    serverConfigList: state.task.serverConfigList,
    logConfigList: state.task.logConfigList,
  }
}
export default connect(mapStateToProps)(App)