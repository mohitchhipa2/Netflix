import React, { useEffect, useState } from 'react'
import "./Nav.css"
function Nav() {
const [show,handleShow] = useState(false)
useEffect(()=>{
window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        handleShow(true);
    }
    else handleShow(false)
});

},[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
      className='nav_logo'
      src="https://o.remove.bg/downloads/267055b7-3325-4ba5-a5fa-a796c225470d/netflix-logo-removebg-preview.png"
     alt='Netflix Logo' />

     <img
     className='nav_avatar'
     src='https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1'
     alt='Netflix Logo'
     />
    </div>
  )
}

export default Nav
