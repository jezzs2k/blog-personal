import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';

import './Register.css';

import { Register, Error } from '../../Redux/Action/AuthAction';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 20,
  },
};

const RegisterForm = ({ Register, Error }) => {
  const onFinish = (values) => {
    Register(values);
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    Error(errorInfo);
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login'>
      <h2 className='title'>REGISTER</h2>
      <Form
        {...layout}
        name='basic'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          label='Email'
          name='Email'
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          name='confirm'
          label='Confirm Password'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  'The two passwords that you entered do not match!'
                );
              },
            }),
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(null, { Register, Error })(RegisterForm);
