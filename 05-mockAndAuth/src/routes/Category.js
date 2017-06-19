import React from 'react'
import { connect } from 'dva'

const Category = ({ customer }) => {
  return (
    <div>
      <text>Category</text>
      {JSON.stringify(customer)}
    </div>
  )
}

export default connect(({ app }) => app)(Category)
