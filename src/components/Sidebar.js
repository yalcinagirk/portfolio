import React from 'react';
import {
  PhoneOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

const Sidebar = ({ selectedSidebarItem }) => {
  const navigate = useNavigate();

  const menu_items = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: 'contact',
      icon: <PhoneOutlined />,
      label: 'Contact',
    },
  ]

  return (
    <Sider
      style={{ height: "100vh" }}
    >
      <div className="demo-logo-vertical" />
      <div
        style={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Avatar src="/yalcin.jpeg" size={70} style={{ margin: 10 }} />
        <h3 style={{ color: "#fff" }}> Ali Yalçın Ağırkan</h3>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedSidebarItem]}
        items={menu_items}
        onSelect={(e) => {
          const selected_tab = e.key
          if (selected_tab === "home") {
            navigate("/")
          } else if (selected_tab === "contact") {
            navigate("/contact")
          }
        }}
      />
    </Sider>
  );
};
export default Sidebar;