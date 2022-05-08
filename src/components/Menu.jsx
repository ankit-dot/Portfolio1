import React from 'react'
import './menu.scss'

function Menu({open,setOpen}) {
  return (
    <div className='menu'>
        <ul className={"links " + (open && "active")}>
            <li><a href="#home" className="homes" onClick={()=>setOpen(false)}>Home</a></li>
            <li><a href="#portfolio" className="portfolioss"  onClick={()=>setOpen(false)}>Portfolio</a></li>
            <li><a href="#works" className="work"  onClick={()=>setOpen(false)}>Works</a></li>
 
            <li><a href="#contact" className="contacts"  onClick={()=>setOpen(false)}>Contact</a></li>
            
            
            </ul>
        
        </div>
  )
}

export default Menu