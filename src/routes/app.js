import React from 'react'
import { connect } from 'dva'
import { Route, Link, Switch } from 'dva/router'
import './app.less'

import Canvas from 'components/Canvas'

class App extends React.Component {
  componentDidMount () {
  }
  render () {
    const {match, location} = this.props
    const {pathname} = location
    return (
      <div>
        <div className='header'></div>
        <div className='content'>
          <div className='navigation'>
            <ul>
              <li>TEST1</li>
              <li>TEST2</li>
              <li>TEST3</li>
            </ul>
          </div>
          <div className='working'>
            <Canvas width='400' height='400' data={window.testData} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
  }
}
export default connect(mapStateToProps)(App)