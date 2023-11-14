import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
    labelCol: {
        span: 3,
    },
    wrapperCol: {
        span: 21,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};
const SendToMail = () => (
    <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
            maxWidth: 600,
        }}
        validateMessages={validateMessages}
    >
        <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[{ required: true }]}
        >
            <Input placeholder='Name' />
        </Form.Item>
        <Form.Item
            name={['user', 'email']}
            label="Mail"
            rules={[{ required: true, type: 'email', }]}
        >
            <Input placeholder='Mail' />
        </Form.Item>
        <Form.Item
            name={['user', 'introduction']}
            label="Content"
            rules={[{ required: true, type: 'email', }]}
        >
            <Input.TextArea placeholder='Content' />
        </Form.Item>
        <Form.Item
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);
export default SendToMail;