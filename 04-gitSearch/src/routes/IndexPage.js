import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css'
import Header from './Header/Header'

function IndexPage({ children }) {
  return (
    <div className={styles.normal}>
      <Header />
      <hr />
      {children}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
