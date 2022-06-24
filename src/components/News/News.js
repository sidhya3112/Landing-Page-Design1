import React from 'react';
import NewsCard from './NewsCard';
import './News.css'
import img1 from '../../images/news-img1.jpg'


const News = () => {
  return (
    <div className='newsContainer'>
        <h1 className='newsTitle'>Latest Insights News</h1>
        <div>
            <ul className='newsCardWrapper'>
                <li>
                    <button className='newsCardButton'>
                     <NewsCard
                     img={img1}
                     company='Our Creative Team'
                     date= '17 June, 2021'
                     author= 'Steve Smith'
                     head= 'Running remote offsites and onboarding'
                     
                     />   
                    </button>
                </li>

                <li>
                    <button className='newsCardButton'>
                    <NewsCard
                     img={img1}
                     company='Create Presentations'
                     date= '17 June, 2021'
                     author= 'Thomas Laws'
                     head= 'A new look & new way to collaborate'
                     
                     />  
                    </button>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default News