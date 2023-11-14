import React from 'react';
import { Layout, Row } from 'antd';
import UserContactInfo from '../components/UserContactInfo';
import SendToMail from '../components/SendToMail';
const { Content } = Layout;
const Contact = ({ setSelectedSiderbarItem }) => {
  setSelectedSiderbarItem("contact")
  return (
    <Layout>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: "#fff",
        }}
      >
        <UserContactInfo />
        <SendToMail />
      </Content>
    </Layout>
  );
};
export default Contact;