import './App.css';
import Slider from './Slider';
import React, {useState} from 'react';
import SidebarItem from './SidebarItem';

const DEFAULT_OPTIONS = [
  {
    name:"Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name:"Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
   },
   {
    name:"Saturation",
    property: "saturation",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
   },
   {
    name:"Grayscale",
    property: "gray-scale",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
   },
   {
    name:"Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
   },
   {
    name:"Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
   },
   {
    name:"Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
   }
  
]

function App() {

  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  return (
    <div className="container">
      <div className="main-image">
        
      </div>
      <div className="sidebar">
        {options.map(option => {
          <SidebarItem />
        })}
      </div>
      <Slider />
      <h1 className="title">PhotoShop Fake by Luca Serban</h1>
    </div>
  );
}

export default App;
