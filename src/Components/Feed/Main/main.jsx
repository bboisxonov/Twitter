import React from 'react'
import Hero from "../Hero/hero"
import Comments from "../Comments/comments"
import Post from "../Post/post"
import "./main.css"


function Main() {

    return <div className='main-section'>

        <Hero></Hero>

        <Comments></Comments>

        <Post></Post>

    </div>
}
export default Main