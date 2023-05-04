import './Card.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";


function Card(props) {
  const navigate = useNavigate();

  return (
    <>
      {
        props.allProducts.map (product =>{
          return(
            <div className='container'>
              <div className='card'>
                <img src={product.image1} className='photo' onClick={()=>{props.setNickname(product.nickname); navigate(`/item/${product.nickname}`);}}></img> 
                <div className='row'>
                    <div className='name'>{product.name}</div> 
                    <div className='name'>{product.size}</div> 
                  </div>
              </div>
            </div> 
          );
        })
      } 
    </>
  )
}

export default Card;
