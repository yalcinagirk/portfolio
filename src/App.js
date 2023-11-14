import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import ContactFloatButton from './components/ContactFloatButton';
import { Layout } from 'antd';
const App = () => {
  const [selectedSidebarItem, setSelectedSiderbarItem] = useState("home")
  return (
    <Layout>
      <BrowserRouter>
        <Sidebar selectedSidebarItem={selectedSidebarItem} />
        <ContactFloatButton />
        <Routes>
          <Route path="/" element={<Home setSelectedSiderbarItem={setSelectedSiderbarItem} />} />
          <Route path="/contact" element={<Contact setSelectedSiderbarItem={setSelectedSiderbarItem} />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};
export default App;