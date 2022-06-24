import React from 'react';
import './NewsCard.css';

function NewsCard(props){
  return (
    <div className='newsCard'>
        <img src={props.img} alt="" className='news-card-img' />
        
            <ul className='details'>
                <li className='details-item'>{props.company}</li>
                <li className='details-item'>{props.date}</li>
                <li className='details-item'>by {props.author}</li>
            </ul>
        
        <div>
            <ul className='news-card-body'>
                <li><h1 className='news-card-title'>{props.head}</h1></li>
                <li className='news-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda minus voluptatum voluptate facere quam incidunt provident, consequatur odio laborum dolorum........</li>
            </ul>
        </div>

        <div className='cbtn'>
            <button className='ContinueButton'>Continue</button>
        </div>
    </div>
  )
}

export default NewsCard