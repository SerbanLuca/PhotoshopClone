import './App.css';
import Slider from './Slider';
import React from 'react';
import SidebarItem from './SidebarItem';

const DEFAULT_OPTIONS = [
  {
    name:"Brightness",
    
  }
]

function App() {
  return (
    <div className="container">
      <div className="main-image">
        
      </div>
      <div className="sidebar">
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />

      </div>
      <Slider />
      <h1 className="title">PhotoShop Fake by Luca Serban</h1>
    </div>
  );
}

export default App;
