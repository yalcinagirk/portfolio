import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import ContactFloatButton from './components/ContactFloatButton';
import Home from './components/Home';
import Contact from './components/Contact';
const App = () => {
  
  const [selectedMenuItem, setSelectedMenuItem] = useState("home")

  useEffect(() => {
    console.log("selectedMenuItem -> ", selectedMenuItem)
  }, [selectedMenuItem])
  return (
    <Layout>
      <ContactFloatButton />
      <Sidebar
        setSelected={setSelectedMenuItem}
        selected={selectedMenuItem}
      />
      <Home selected={selectedMenuItem === "home" ? true:false}/>
      <Contact selected={selectedMenuItem === "contact" ? true:false} />
    </Layout>
  );
};
export default App;