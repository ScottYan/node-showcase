import React from 'react'
import { Input, Button } from 'antd'
import styles from './SearchRepo.less'
import RepoList from './RepoList'

const SearchRepo = (props) => {
  return (
    <div>
      <div>
        <Input size="large" className={styles.searchbox} onChange={props.onFilterChange} placeholder="请输入仓库名" />
        <Button icon="search" onClick={props.onSearch}>Search</Button>
      </div>
      <RepoList {...props} />
    </div>
  )
}

export default SearchRepo
