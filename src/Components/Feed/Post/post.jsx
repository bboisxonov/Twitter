import React from 'react'
import "./post.css"
import PostReactions from "../../Post-reactions/postreactions"

function Post() {

    return <div className='post-container'>
        <div className="post">
            <div className="post-info">
                <img src={require('../../../images/creativePhoto.png')} alt="" />
                <div className="post-text">
                    <p><b>CreativePhoto</b> @cloutexhibition · 1h</p>
                    <p className='post-caption'>Обетда..... <br /> Кечиринглар</p>
                </div>
            </div>
            <div className='tripple-dots'>
                <span className='users__profile-dots'></span>
                <span className='users__profile-dots'></span>
                <span className='users__profile-dots'></span>
            </div>
        </div>
        <div className="post-image-box">
            <img className='post-img' src={require('../../../images/user-post.png')} alt="" />
        </div>
            <PostReactions comments={"10"} retweet={5} likes={8}></PostReactions>
    </div>
}
export default Post