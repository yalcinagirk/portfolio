import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
const Contact = ({selected}) => {
  return (
    selected?
    <Layout>
      <Content
          style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: "#fff",
          }}
      >
          Contact
      </Content>
    </Layout>:null
  );
};
export default Contact;