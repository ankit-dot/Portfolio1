import React from 'react'
import './topbar.scss'
import { Person,Mail } from '@material-ui/icons'
function Topbar({open,setOpen}) {
  return (
    <div className={'topbar '+ (open && 'active')}>
        <div className="wrapper">
          <div className="left">
          <a href= '#home' className="logo">Portfolio.</a>
          <div className="item">
           <Person className="icon"/>
           <span>+91 9399148017</span>
           </div>
           <div className="item">
           <Mail className="icon"/>
           <span>ankit.solanki.ds.20@ggits.net</span>
           </div>
           
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setOpen(!open)}>
          <span className="line1">
            </span>
            <span className="line2">
              </span>
              <span className="line3"></span>
            </div>
            </div>
          
          </div>
    </div>
  )
}

export default Topbar
