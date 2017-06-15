import React from 'react'
import { Link } from 'dva/router'
import styles from './Header.less'

export default () => {
  return (
    <div>
      <Link to="/searchrepo">Repositories</Link>
      <Link to="/searchuser">Users</Link>
    </div>
  )
}
