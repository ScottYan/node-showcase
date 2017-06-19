import React from 'react'
import { Button } from 'antd'
import { connect } from 'dva'

const Login = ({ dispatch }) => {
  return (
    <div>
      Login
      <Button onClick={() => { dispatch({ type: 'app/login', payload: true }) }}>Login</Button>
      <Button onClick={() => { dispatch({ type: 'app/setLogin', payload: false }) }}>Logout</Button>
    </div>
  )
}

export default connect()(Login)
