import './App.css';
import Slider from './Slider';
import React from 'react';
import SidebarItem from './SidebarItem';

function App() {
  return (
    <div className="container">
      <div className="main-image">
        Image
      </div>
      <div className="sidebar">
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />

      </div>
      <Slider />
     
    </div>
  );
}

export default App;
