import React from 'react'

import "./sidebar.css"
import "../../global.css"

function Sidebar(){
    return (
        <div className='sidebar-fixed'>
            <div className='sidebar'>
                <a href="index.html">
                    <img className='site-logo' src={require('../../images/site-logo.png')} alt="site logo (twitter)" />
                </a>                
                <ul className="sidenav">
                    <li className="sidenav-item">
                        <a className="sidenav-link" href="#">
                            <img className='nav-icons' src={require('../../images/home-box.png')} alt="home-box" />
                            Home
                        </a>
                    </li>
                    <li className="sidenav-item">
                        <a href="#" className="sidenav-link">
                            <img className='nav-icons' src={require('../../images/explore.png')} alt="explore" />
                            Explore
                        </a>
                    </li>
                    <li className="sidenav-item">
                        <a href="#" className="sidenav-link">
                            <img className='nav-icons' src={require('../../images/notification.png')} alt="notification" />
                            Notifications
                        </a>
                    </li>
                    <li className="sidenav-item">
                        <a href="#" className="sidenav-link">
                            <img className='nav-icons' src={require('../../images/messages.png')} alt="messages" />
                            Messages
                        </a>
                    </li>
                    <li className="sidenav-item">
                        <a href="#" className="sidenav-link">
                            <img className='nav-icons' src={require('../../images/bookmarks.png')} alt="bookmarks" />
                            Bookmarks
                        </a>
                    </li>
                    <li className="sidenav-item">
                        <a href="#" className="sidenav-link">
                            <img className='nav-icons' src={require('../../images/lists.png')} altlists />
                            Lists
                        </a>
                    </li>
                    <li className="sidenav-item">
                        <a href="#" className="sidenav-link">
                            <img className='nav-icons' src={require('../../images/profile.png')} alt="profile" />
                            Profile
                        </a>
                    </li>
                    <li className="sidenav-item">
                        <a href="#" className="sidenav-link">
                            <img className='nav-icons' src={require('../../images/more.png')} alt="more btn" />
                            More

                        </a>
                    </li>
                </ul>
                <button className='global-tweet-btn sidebar-btn'>Tweet</button>
            </div>
            <div className='users__profile'>
                <img src={require('../../images/users__profile-img.png')} alt="" />

                <div className="username">
                    <h4>Bobur</h4>
                    <p>@bobur_mavlonov</p>
                </div>
                <div className='tripple-dots'>
                    <span className='users__profile-dots'></span>
                    <span className='users__profile-dots'></span>
                    <span className='users__profile-dots'></span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar