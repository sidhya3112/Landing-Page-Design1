import React from 'react';
import './Card.css';

function Card(props){
  return (
    <div className='card'>
        <img src={props.img} alt="" className='card-img' />
        <div>
            <ul className='card-body'>
                <li><h1 className='card-title'>{props.head}</h1></li>
                <li>{props.des}</li>
            </ul>
        </div>
    </div>
  )
}

export default Card