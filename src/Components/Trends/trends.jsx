import React from 'react'
import Search from "./Search/search"
import Bar from "./Bar/bar"
import SideUsers from "./SideUsers/sideusers"
import Footer from "./Footer/footer"

import "./trends.css"

function Trends(){
    return (
    <section className='trends'>
        <h1>Trends</h1>

        <Search></Search>

        <Bar></Bar> 

        <SideUsers></SideUsers>

        <Footer></Footer>
    </section>
    )
}

export default Trends