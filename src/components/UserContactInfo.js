import React from 'react';
import { Descriptions } from 'antd';

const items = [
  {
    key: 'name',
    label: 'Name',
    children: 'Ali Yalçın Ağırkan',
  },
  {
    key: 'telephone',
    label: 'Telephone',
    children: '531 457 0822',
  },
  {
    key: 'live',
    label: 'Live',
    children: 'Turkey, Eskişehir',
  },
  {
    key: 'remark',
    label: 'Remark',
    children: 'I am a backend developer since 3 years.',
  },
  {
    key: 'adress',
    label: 'Address',
    children: 'Eskişehir/Odunpazarı',
  },
  {
    key: 'mail',
    label: 'Mail',
    children: 'yalcinagirkan@gmail.com',
  },
];

const UserContactInfo = () => {
  return <Descriptions title="Contact" items={items} />;
}

export default UserContactInfo;