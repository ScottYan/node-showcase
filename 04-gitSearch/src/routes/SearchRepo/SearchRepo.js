import React from 'react'
import { connect } from 'react-redux'
// import { routerRedux } from 'dva/router'
import SearchRepoComponent from '../../components/SearchRepo/SearchRepo'

const SearchRepo = (props) => {
  const eventHandler = {
    onFilterChange: (e) => {
      props.dispatch({
        type: 'searchRepo/setFilter',
        payload: e.target.value
      })
    },
    onSearch:
    () => {
      props.dispatch({
        type: 'searchRepo/doSearch'
      })
    }
  }
  return (
    <SearchRepoComponent
      {...eventHandler}
      {...props}
    />
  )
}

export default connect(({ searchRepo }) => searchRepo)(SearchRepo)
