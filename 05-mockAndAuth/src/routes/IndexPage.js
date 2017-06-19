import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'

function IndexPage({ children }) {
  return (
    <div>
      <Link to="/category" style={{ marginRight: 10 }}>Category</Link>
      <Link to="/brand" style={{ marginRight: 10 }}>Brand</Link>
      <Link to="/login">Login</Link>
      {children}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({ app }) => app)(IndexPage);
