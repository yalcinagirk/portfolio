import React from 'react';
import {
  InfoCircleOutlined,
  GithubOutlined,
  LinkedinOutlined
} from '@ant-design/icons';
import { FloatButton } from 'antd';
const ContactFloatButton = () => {
  return (
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{
        right: 24,
      }}
      icon={<InfoCircleOutlined />}
    >
      <FloatButton icon={<a href='https://github.com/yalcinagirk'><GithubOutlined /></a>} />
      <FloatButton icon={<a href='https://www.linkedin.com/in/ali-yal%C3%A7%C4%B1n-a%C4%9F%C4%B1rkan-3b02b8166/'><LinkedinOutlined /></a>} />
    </FloatButton.Group>
  );
};
export default ContactFloatButton;