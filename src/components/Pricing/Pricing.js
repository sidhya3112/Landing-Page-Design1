import React from 'react';
import './Pricing.css';
import Card from './Card';


const Pricing = () => {
  return (
    <div className='pricingContainer'>
        <h1 className='choosePlanHead'>Choose Your Best Pricing Plan</h1>
        <div>
            <ul className='pricingCardWrapper'>
                <li>
                    <button className='pricingCardButton'>
                        <Card
                        type='Start-up'
                        price='10'
                        feature= 'Single User license'
                        />
                    </button>
                </li>

                <li>
                    <button className='pricingCardButton'>
                    <Card
                        type='Classic'
                        price='30'
                        feature= '5 User license'
                        />
                    </button>
                </li>

                <li>
                    <button className='pricingCardButton'>
                    <Card
                        type='Premium'
                        price='49'
                        feature= '10 User license'
                        />
                    </button>
                </li> 
            </ul>
        </div>

    </div>
  )
}

export default Pricing