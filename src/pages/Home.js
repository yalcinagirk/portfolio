import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
const Home = ({ setSelectedSiderbarItem }) => {
  setSelectedSiderbarItem("home")
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
        Content
      </Content>
    </Layout>
  );
};
export default Home;