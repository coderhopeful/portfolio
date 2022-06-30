import React from 'react'

import './intro.css'

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hi, My name is</h2>
          <h1 className="intro-name">Arjun Murali</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item"><i className="fab fa-html5 fa-2x html"></i></div>
              <div className="intro-title-item"><i className="fab fa-css3-alt fa-2x css" ></i></div>
              <div className="intro-title-item"><i className="fab fa-js fa-2x  js" ></i></div>
              <div className="intro-title-item"><i className="fab fa-angular fa-2x angular"></i></div>
              <div className="intro-title-item"><i className="fab fa-react fa-2x react" ></i></div>
            </div>
          </div>
          <p className="intro-desc">
            I am an aspiring Web Developer who likes to learn through the process of building.
          </p>
        </div>
        
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        {/* <img src={portrait} alt="profilepic" className="intro-image" /> */}
        </div>
</div>

    
  )
  
}

export default Intro