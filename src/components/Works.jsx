import React from 'react'
import './works.scss'

function Works() {
  return (
    <div className='works' id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="requirments/mobile.png" alt="" />
                </div>
                <h2>
                  Title
                </h2>
                 <p>
                   Lorem ipsum dolor sit amet, consectetur
                   adipisicing elit.ifjadsiu8s fdroiv djrijvoiv oidsoiefvihhi ijodoiohfhoi
                   Nam nis
                 </p>
                 <span>Projects</span>
              </div>
           
            </div>
            <div className="right">
             <img src="requirments/counter.png" alt="" />

            </div>
          </div>
        </div>
      </div>
     
          <img src="requirments/arrow.png" alt="" className='arrow right' />
     
          
          <img src="requirments/arrow.png" alt="" className='arrow left' />
         
   
    </div>
  )
}

export default Works