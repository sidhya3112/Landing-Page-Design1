import React from 'react';
import img from '../../images/img.jpeg';
import './Content.css';

const Content = () => {
  return (
    <div className='Container'>
        <img className='image' src={img} alt="" />
        <div className='listContainer'>
            <h1 className='listTitle'>It's helpful for operating system</h1>
            
                <ul className='list'>
                    <li> 
                        <h3 className='itemTitle'>Ultra Fast & Secure</h3>
                        <p className='itemDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat, id veniam hic cumque harum?</p>
                    </li>

                    <li>
                        <h3 className='itemTitle'>Allows Customization</h3>
                        <p className='itemDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat, id veniam hic cumque harum?</p>
                    </li>
                    
                    <li>
                        <h3 className='itemTitle'>Smart Contract</h3>
                        <p className='itemDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat, id veniam hic cumque harum?</p>
                    </li>
                </ul>
         
        </div>
    </div>
  )
}

export default Content