import React from 'react';
import './ReviewCard.css';
import quotes from '../../images/inverted-commas.png'
import man from '../../images/man.png'


function ReviewCard(props){
  return (
    <div className='reviewCard'>
            <ul className='reviewCard-body'>
                <li>
                    <ul className='body-1'>
                    <li><img className='quotes' src={quotes} alt="" /></li>
                    <li className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad delectus recusandae asperiores veniam voluptate iure ipsa fugiat dicta nam! In quo laboriosam ullam ipsam nam.</li>
                    </ul>
                </li>
                
                <li>
                    <ul className='body-2'>
                    <li><img className='man' src={man} alt="" /></li>
                    <li>
                        <ul className='body-3'>
                        <li><h3 className='personName'>{props.name}</h3></li>
                        <li className='personPost'>{props.post}</li>
                        </ul>
                    </li>
                    
                    </ul>
                </li>
            </ul>
           
    </div>
  )
}

export default ReviewCard