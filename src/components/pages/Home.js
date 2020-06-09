import React from 'react';
import BlogItem from '../Blog/BlogItem';

import { Row, Col } from 'antd';

import './Home.css';

const blogs = [
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    title:
      'SẬP SERVER CÓ PHẢI MUÔN ĐỜI – PHẦN 1: LÀM GÌ KHI HỆ THỐNG SẬP BẤT NGỜ?',
    author: 'Pham Huy Hoang - Blog Tôi đi code dạo',
  },
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    title:
      'SẬP SERVER CÓ PHẢI MUÔN ĐỜI – PHẦN 1: LÀM GÌ KHI HỆ THỐNG SẬP BẤT NGỜ?',
    author: 'Pham Huy Hoang - Blog Tôi đi code dạo',
  },
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    title:
      'SẬP SERVER CÓ PHẢI MUÔN ĐỜI – PHẦN 1: LÀM GÌ KHI HỆ THỐNG SẬP BẤT NGỜ?',
    author: 'Pham Huy Hoang - Blog Tôi đi code dạo',
  },
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    title:
      'SẬP SERVER CÓ PHẢI MUÔN ĐỜI – PHẦN 1: LÀM GÌ KHI HỆ THỐNG SẬP BẤT NGỜ?',
    author: 'Pham Huy Hoang - Blog Tôi đi code dạo',
  },
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    title:
      'SẬP SERVER CÓ PHẢI MUÔN ĐỜI – PHẦN 1: LÀM GÌ KHI HỆ THỐNG SẬP BẤT NGỜ?',
    author: 'Pham Huy Hoang - Blog Tôi đi code dạo',
  },
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    title:
      'SẬP SERVER CÓ PHẢI MUÔN ĐỜI – PHẦN 1: LÀM GÌ KHI HỆ THỐNG SẬP BẤT NGỜ?',
    author: 'Pham Huy Hoang - Blog Tôi đi code dạo',
  },
];

const Home = () => {
  return (
    <div className='blog-trending'>
      <Row justify='center'>
        {blogs.map((blog) => (
          <Col className='gutter-row' span={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <BlogItem blog={blog} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
