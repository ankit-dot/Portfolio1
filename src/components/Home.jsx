import React from 'react'
import './home.scss'
import {ArrowBackIos } from '@material-ui/icons'
import { init } from 'ityped'
import { useEffect , useRef } from "react"
function Home() {
  const  textRef =useRef();
  useEffect(() => {
   init(textRef.current, {
     strings: ["Frontend Developer" ,"React developer" ,"javaScript Developer"],
     backDelay:1500,
    });
  }, []);

  return (
    <div className='home' id="home">
      <div className="left">
      <div className="imgContainer">
        <img src="requirments/man.png" alt="" />
      </div></div>
      <div className="right">
        <div className="container">
           <h2>Hi there, I'm</h2>
          <h1>Ankit Solanki</h1>
          <h3>And I'm a <span ref={textRef}></span></h3>
            <a href="#portfolio">
            <ArrowBackIos className='icon'/></a>
        </div>
      </div>
    </div>
  )
}

export default Home