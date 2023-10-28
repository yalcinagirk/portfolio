import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
const Home = ({selected}) => {
  return (
    selected ?
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
    </Layout>:null
  );
};
export default Home;