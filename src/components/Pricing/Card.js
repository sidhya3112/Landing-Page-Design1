import React from 'react';
import './Card.css';
import line from '../../images/minus.png'

function Card(props){
  return (
    <div className='pricingCard'>

            <ul className='pricingCard-body'>
                <li><h3 className='pricingType'>{props.type}</h3></li>
                <li ><img className='lineBreak' src={line} alt="" /></li>
                <li><h1 className='price'>${props.price}/mo</h1></li>
            </ul>
    
       
            <ul className='featureList'>
                <li className='items'>Easy Customizable</li>
                <li className='items'>Commercial License</li>
                <li className='items'>{props.feature}</li>
                <li className='items'>Hotline support 24/7</li>
            </ul>
            <div className='button'>
            <button className='packageButton'>Try This Package</button>
            </div>
           
    </div>
  )
}

export default Card