import React from 'react'
import styles from './RepoItem.less'
import commonStyles from '../common.less'

const RepoItem = ({ dataSource }) => {
  const { name,
    html_url: url,
    language,
    watchers_count: watchersCount,
    forks_count: forksCount,
    description,
    created_at: createdAt,
    updated_at: updatedAt,
  } = dataSource
  return (
    <div className={styles.main}>
      <div className={commonStyles.clearFix}>
        <a className={styles.name} href={url} rel="noopener noreferrer" target="_blank">{name}</a>
        <span className={`${styles.lang}`}>
          {language}
          <i className={`${styles.iconFont} ${styles.iconStar}`} />
          {watchersCount}
          <i className={`${styles.iconFont} ${styles.iconLink}`} />
          {forksCount}
        </span>
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.info}>
        创建时间:{createdAt}
      </div>
      <div className={styles.info}>
        更新时间:{updatedAt}
      </div>
    </div>
  )
}

export default RepoItem
