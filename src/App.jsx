import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import './app.scss';
import {useState} from "react";
import React from "react";
import Menu from "./components/Menu";
function App() {
  const [open,setOpen]=useState(false);
  return (
    <div className="app">
      <Topbar open={open} setOpen={setOpen}/>
      <Menu open={open} setOpen={setOpen}/>

      <div className="sections">
        
        <Home/>
        <Portfolio/>
        <Works/>
       
        <Contact/>

      </div>
    </div>
  );
}

export default App;
