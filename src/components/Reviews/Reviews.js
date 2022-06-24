import React from 'react';
import ReviewCard from './ReviewCard';
import './Reviews.css';


const Reviews = () => {
    return (
        <div className='reviewContainer'>
            <h1 className='reviewTitle'>Let's See Our User's Reviews</h1>
            <div className='description'>
            <p className='des-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus assumenda dolorum exercitationem. Nisi qui aut aperiam ratione. Deleniti, ducimus! Possimus!</p>
            </div>
            <div>
                <ul className='reviewCardWrapper'>
                    <li>
                        <button className='reviewCardButton'>
                           <ReviewCard
                           name='Wilson Bergson'
                           post='Marketing Head'
                           />
                        </button>
                    </li>
    
                    <li>
                        <button className='reviewCardButton'>
                            <ReviewCard
                             name='Zaine Aminoff'
                             post='PR Head'
                            />
                        </button>
                    </li>
    
                    <li>
                        <button className='reviewCardButton'>
                            <ReviewCard
                             name='Ryan Press'
                             post='Marketing Manager'
                            />
                        </button>
                    </li> 
                </ul>
            </div>
        </div>
      )
}

export default Reviews