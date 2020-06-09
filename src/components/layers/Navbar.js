import React from 'react';
import { BrowserRouter as Route, Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import './Navbar.css';

const breadcrumbNameMap = {
  '/profile': 'Profile',
};

const Navbar = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key='home'>
      <Link to='/'>Home</Link>
    </Breadcrumb.Item>,
    <Breadcrumb.Item key='profile'>
      <Link to='/blogs'>Blogs</Link>
    </Breadcrumb.Item>,
    <Breadcrumb.Item key='profile'>
      <Link to='/profile'>About me</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className='navbar'>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      <Link to='/blogs/create/articles' className='editor-word'>
        Create new articles
      </Link>
    </div>
  );
});

export default Navbar;
