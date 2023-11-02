import React from 'react'

import "./bar.css"

function Bar(){
    return <div className="trendbar">
        <ul className='bar'>

            <li className='bar-item'>
                <h3 className='bar-title'>Trends for you</h3>
                <img src={require('../../../images/settings.png')} alt="" />
            </li>

            <li className='bar-item'>
                <p className='bar-item__description'>Trending in Germany <br />
                <b>Revolution</b> <br />
                50.4K Tweets</p>

                <div className='tripple-dots'>
                    <span className='users__profile-dots'></span>
                    <span className='users__profile-dots'></span>
                    <span className='users__profile-dots'></span>
                </div>
            </li>

            <li className='bar-item'>
                <p className='bar-item__description'>Trending in Germany <br />
                <b>Revolution</b> <br />
                50.4K Tweets</p>

                <div className='tripple-dots'>
                    <span className='users__profile-dots'></span>
                    <span className='users__profile-dots'></span>
                    <span className='users__profile-dots'></span>
                </div>
            </li>

            <li className='bar-item'>
                <p className='bar-item__description'>Trending in Germany <br />
                <b>Revolution</b> <br />
                50.4K Tweets</p>

                <div className='tripple-dots'>
                    <span className='users__profile-dots'></span>
                    <span className='users__profile-dots'></span>
                    <span className='users__profile-dots'></span>
                </div>
            </li>

            <h3 className='show-more'>Show more</h3>
        </ul>

    </div>
}

export default Bar