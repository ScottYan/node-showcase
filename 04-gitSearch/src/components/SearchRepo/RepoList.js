import React from 'react'
import { Button, Input } from 'antd'
import RepoItem from './RepoItem'
import styles from './RepoList.less'


const RepoList = ({ dataSource = {}, pageIndex, pageSize, maxPageIndex, dispatch }) => {
  if (!dataSource.items) return null
  const { total_count: totalCount } = dataSource

  return (
    <div>
      <Button onClick={() => { dispatch({ type: 'searchRepo/firstPage' }) }}>&lt;&lt;</Button>
      <Button onClick={() => { dispatch({ type: 'searchRepo/prevPage' }) }}>&lt;</Button>
      <Button onClick={() => { dispatch({ type: 'searchRepo/nextPage' }) }}>&gt;</Button>
      <Button onClick={() => { dispatch({ type: 'searchRepo/lastPage' }) }}>&gt;&gt;</Button>
      <text>共{totalCount}行, {maxPageIndex + 1}页, 第</text>
      <Input
        className={styles.pagerInput}
        size="small"
        value={pageIndex + 1}
        onChange={(e) => { dispatch({ type: 'searchRepo/turnPage', payload: e.target.value }) }}
      />
      <text>页, 每页</text>
      <Input
        className={styles.pagerInput}
        size="small"
        value={pageSize}
        onChange={(e) => { dispatch({ type: 'searchRepo/changePageSize', payload: e.target.value }) }}
      />
      <text>行</text>
      <div>
        {
          dataSource.items.map((item) => {
            return <RepoItem key={item.id} dataSource={item} />
          })
        }
      </div>

    </div>
  )
}

export default RepoList
