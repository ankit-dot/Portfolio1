import React from 'react'

function PortfolioList({title,selected,setselected,id}) {
  return (
    <li className={selected ? "portfolio active" : "portfolio"} onClick= {()=>setselected(id)}>{title}</li>
  )
}

export default PortfolioList