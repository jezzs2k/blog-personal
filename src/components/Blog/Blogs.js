import React, { useState, Fragment } from 'react';
import { Row, Col, Pagination } from 'antd';

import BlogItem from './BlogItem';

import './Blogs.css';

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
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    title:
      'SẬP SERVER CÓ PHẢI MUÔN ĐỜI – PHẦN 1: LÀM GÌ KHI HỆ THỐNG SẬP BẤT NGỜ?',
    author: 'Pham Huy Hoang - Blog Tôi đi code dạo',
  },
];

const Blog = () => {
  const [state, setState] = useState({
    current: 1,
    blogs: blogs.slice(0, 10),
  });

  const onChange = (page) => {
    //use axios EX: /blogs?page={page}
    const perPage = 9;
    const start = page === 1 ? 0 : (page - 1) * perPage + 1;
    const end = perPage * page + 1;
    setState({
      ...state,
      blogs: blogs.slice(start, end),
      current: page,
    });
  };

  return (
    <Fragment>
      <Row justify='center'>
        {state.blogs.map((blog) => (
          <Col className='gutter-row' span={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <BlogItem blog={blog} />
          </Col>
        ))}
      </Row>
      <Pagination
        className='pagination-page'
        current={state.current}
        onChange={onChange}
        total={blogs.length}
      />
    </Fragment>
  );
};

export default Blog;
