import React from 'react'
import { connect } from 'dva'
import { Route, Link, Switch } from 'dva/router'
import './app.less'

import Canvas from 'components/Canvas'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: window.testData,
      targets: [],
      selectedTarget: undefined
    }
  }
  componentWillMount() {
    this.props.dispatch({ type: 'users/getData' })
  }
  componentDidMount () {
    const { data } = this.state

    const targets = []
    const targetNodes = data.filter(node => {
      return node.isTarget
    })

    let j = 0
    let index = 0
    while (index < data.length) {
      const node = data[index]
      const targetPath = targetNodes[j].path
      if (node.path === targetNodes[j].path) {
        j++
        while (++index < data.length) {
          const node = data[index]
          if (node.path.slice(0, targetPath.length) === targetPath) {
            if (node.nodeValue) {
              targets.push({ node: targetNodes[j-1], innerTEXT: node.nodeValue })
              break;
            }
          }
        }
      }
      index++
    }
    this.setState({
      targets
    })
  }
  onSelectTarget(node, index) {
    this.setState({
      selectedTarget: node
    })
  }
  render () {
    console.log(this.props)
    const { match, location } = this.props
    const { targets, selectedTarget } = this.state
    const { pathname } = location
    return (
      <div className='layout'>
        <div className='header'></div>
        <div className='content'>
          <div className='navigation'>
            <ul>
              {
                targets.map((target, index) => {
                  return <li key={index} onClick={this.onSelectTarget.bind(this, target.node, index)}>{ target.innerTEXT }</li>
                })
              }
            </ul>
          </div>
          <div className='working'>
            <Canvas width='400' height='400' data={this.state.data} selectedTarget={selectedTarget} />
          </div>
          <div className='info'>
            <ul>
              {
                selectedTarget && Object.keys(selectedTarget).map((key, index) => {
                  if (typeof selectedTarget[key] !== 'object') {
                    return (
                      <li key={index} className='info-row'>
                        <span>{key}: </span>
                        <span>{selectedTarget[key].toString()}</span>
                      </li>
                    )
                  }
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    list: users.list
  }
}
export default connect(mapStateToProps)(App)