import React from 'react';
import './ContentFeatures.css';
import Card from './Card';
import support from '../../images/24-hours.png'
import analysis from '../../images/analysis.png'
import coding from '../../images/coding.png'
import secureData from '../../images/secure-data.png'


const ContentFeatures = () => {
  return (
    <div className='Container1'>
        <h1 className='containerHeading'>We Provide Best Features for Customers</h1>
        <div>
            <ul className='cardWrapper'>
                <li>
                    <button className='cardButton'>
                        <Card
                        img={coding}
                        head='Clean Code'
                        des= 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                        />
                    </button>
                </li>

                <li>
                    <button className='cardButton'>
                        <Card
                        img={analysis}
                        head='Data Analytics'
                        des= 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                        />
                    </button>
                </li>

                <li>
                    <button className='cardButton'>
                        <Card
                        img={secureData}
                        head='Fully Secured'
                        des= 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                        />
                    </button>
                </li> 

                <li>
                    <button className='cardButton'>
                        <Card
                        img={support}
                        head='24/7 Support'
                        des= 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                        />
                    </button>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default ContentFeatures