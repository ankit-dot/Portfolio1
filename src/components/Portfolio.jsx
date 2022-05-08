import React from 'react'
import './portfolio.scss'
import {useState} from "react";
import PortfolioList from './PortfolioList';

function Portfollio() {

  const [selected,setselected]=useState("javaScript");
const list=[
{
  id:"javaScript",
  title:"javaScript",
},
{
  id:"React",
  title:"React",
}

]
  return (
    <div className='portfolio' id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item)=>(
            <PortfolioList
            title={item.title}
            selected={selected === item.id}
            setselected={setselected}
            id={item.id}
            
            />
          )


          )}
  
        </ul>
          <div className="container">
              <div className="items">
            <img src="requirments/snakeGame.png" alt="" className="snake" />
            <h3>Snake Game</h3></div>
            <div className="items">
            <img src="requirments/rpsGame.png" alt="" className="snake" />
            <h3>Rock paper Scissor</h3></div>
            <div className="items">
            <img src="requirments/counter.png" alt="" className="snake" />
            <h3>Counter</h3></div>
            <div className="items">
            <img src="requirments/colorFlipper.png" alt="" className="snake" />
            <h3>Color Flipper</h3></div>
            <div className="items">
            <img src="requirments/about.png" alt="" className="snake" />
            <h3>About</h3></div>
            <div className="items">
            <img src="requirments/snakeGame.png" alt="" className="snake" />
            <h3>Snake Game</h3></div>
            
          </div>
          
    </div>
  )
}

export default Portfollio