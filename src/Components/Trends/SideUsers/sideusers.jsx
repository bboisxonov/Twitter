import React from 'react'

import "./sideusers.css"

function SideUsers(){
    return <div className="trendbar">
    <ul className='bar'>

        <li className='bar-item'>
            <h3 className='bar-title'>You might like</h3>
        </li>

        <li className='bar-user-item'>

            <img width={45} src={require('../../../images/user-mushtariy.png')} alt="" />
            <p className='bar-users'><b>Mushtariy</b><br />
                @Mushtar565266</p>

            <button className='follow-btn'>Follow</button>
        </li>

        <li className='bar-user-item'>

            <img width={45} src={require('../../../images/user-shuhratbek.png')} alt="" />
            <p className='bar-users'><b>Shuhratbek</b><br />
                @mrshukhrat</p>

            <button className='follow-btn'>Follow</button>
        </li>


        <h3 className='show-more'>Show more</h3>
    </ul>

</div>
}

export default SideUsers