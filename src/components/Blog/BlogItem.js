import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { ReadOutlined, HeartOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import './BlogItem.css';

const { Meta } = Card;

const BlogItem = ({ history, blog }) => {
  const { img, title, author } = blog;

  const handleClick = (id) => {
    return () => {
      console.log(id);
    };
  };

  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt='img-blog' src={img} />}
      actions={[
        <Link to={`/blogs/${2}`} onClick={handleClick(2)}>
          <ReadOutlined key='Read book' />
        </Link>,
        <HeartOutlined key='love' />,
      ]}>
      <Meta title={title} description={author} />
    </Card>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};

export default BlogItem;
