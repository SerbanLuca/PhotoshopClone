import './App.css';
import Slider from './Slider';
import React from 'react0'

function App() {
  return (
    <div className="container">
      <div className="main-image">
        Image
      </div>
      <div className="sidebar">
        <SidebarItem />
      </div>
      <Slider />
      <h1 className="title">PhotoShop Fake by Luca Serban</h1>
    </div>
  );
}

export default App;
