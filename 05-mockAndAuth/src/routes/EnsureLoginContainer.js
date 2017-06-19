import React from 'react'
import { connect } from 'dva'

class EnsureLoginContainer extends React.Component {
  componentDidMount() {
    const { isLogin, dispatch, location } = this.props
    if (!isLogin) {
      dispatch({ type: 'app/setPreLocation', payload: location.pathname })
      dispatch({ type: 'app/redirect', payload: '/login' })
    }
  }
  render() {
    const { children, isLogin } = this.props
    if (isLogin) {
      return children
    } else {
      return (<div>You need login</div>)
    }
  }
}

export default connect(({ app }) => app)(EnsureLoginContainer)
