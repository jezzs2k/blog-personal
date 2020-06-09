import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/store';

import './App.css';
import 'antd/dist/antd.css';

import Navbar from './components/layers/Navbar';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Blogs from './components/Blog/Blogs';
import WordEditor from './components/Blog/WordEditor';

import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import Articles from './components/Blog/Articles';

const { Content, Sider } = Layout;

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

const App = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Provider store={Store}>
      <Router>
        <div className='App'>
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={windowDimensions.width <= 600 ? true : false}>
              <div className='logo'>
                <h2>Blog Share skill</h2>
              </div>
              <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
                <Menu.Item key='1' icon={<UserOutlined />}>
                  nav 1
                </Menu.Item>
                <Menu.Item key='2' icon={<LaptopOutlined />}>
                  nav 2
                </Menu.Item>
                <Menu.Item key='3' icon={<NotificationOutlined />}>
                  nav 3
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout
              style={
                windowDimensions.width <= 600
                  ? { padding: '0' }
                  : { padding: '0  24px 24px' }
              }>
              <Navbar />
              <Content
                className='site-layout-background content-type'
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/profile' component={AboutMe} />
                  <Route exact path='/blogs' component={Blogs} />
                  <Route exact path='/blogs/:id' component={Articles} />
                  <Route
                    exact
                    path='/blogs/create/articles'
                    component={WordEditor}
                  />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
