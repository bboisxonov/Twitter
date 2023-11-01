import React from 'react'
import "./hero.css"
function Hero() {

    return (
    <div className='hero'>
        <div className="hero-top">
            <h1 className='hero-title'>Home</h1>
            <img src={require('../../../images/feed-top-star.png')} alt="" />
        </div>
        <div className="hero-bottom">
            <div className="user-typebox">
                <img src={require('../../../images/users__profile-img.png')} alt="" />

                <input className='comment-input' type="text" placeholder='What’s happening'/>
            </div>
            <div className='comment-submit-box'>
                <div className="attaching-elements">
                    <img className='attaching-elements-img' src={require('../../../images/image.png')} alt="" />
                    <img className='attaching-elements-img' src={require('../../../images/gif.png')} alt="" />
                    <img className='attaching-elements-img' src={require('../../../images/stats.png')} alt="" />
                    <img className='attaching-elements-img' src={require('../../../images/smile.png')} alt="" />
                    <img className='attaching-elements-img' src={require('../../../images/schedule.png')} alt="" />
                </div>

                <button className='global-tweet-btn hero-tweet-btn' disabled={true}>Tweet</button>
            </div>
        </div>
    </div>
)}
export default Hero