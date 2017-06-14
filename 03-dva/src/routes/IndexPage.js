import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage(props) {
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
