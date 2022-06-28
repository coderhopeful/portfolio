import React, { useContext } from 'react'
import "./toggle.css"
import Sun from "../../images/sun.png"
import Moon from "../../images/moon.png"
import { ThemeContext } from '../../context'

function Toggle() {
const theme= useContext(ThemeContext)
const handleClick= () =>{
    theme.dispatch({type:"TOGGLE"});
}  ;

  return (
    <div className='t'>
     <img src={Sun} alt="light" className='toggle'/>   
     <img src={Moon} alt="dark" className='toggle'/>
     <div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode? 0: 25}}>
     </div>   
    </div>
  )
}

export default Toggle