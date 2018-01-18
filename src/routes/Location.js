import React from 'react'
import { connect } from 'dva'

class Location extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'users/goDashboard'
    })
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    serverConfigList: state.task.serverConfigList,
    logConfigList: state.task.logConfigList,
  }
}
export default connect(mapStateToProps)(Location)