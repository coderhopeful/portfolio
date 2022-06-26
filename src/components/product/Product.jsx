import React from 'react'
import  "./product.css"


const Product = ({link,img,name}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <h2 className="p-h">{name}</h2>
      </div>
    <a href={link} target="_blank" rel="noreferrer">
    <img src={img} alt="projects" className="p-img" />
    
    </a>
    
    
    
    </div>
  
  );
};

export default Product