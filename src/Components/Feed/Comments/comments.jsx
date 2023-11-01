import React from 'react'
import "./comments.css"
import PostReactions from "../../Post-reactions/postreactions"

function Comments() {

    return <>
        <div className="comment-box">
            <div className="comments">
                <img src={require('../../../images/designsta.png')} alt="" />
                <div className="comments-info">
                    <p className='comments-title'><b>Designsta</b> @inner · 25m</p>
                    <p>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                    
                </div>
                <div className='tripple-dots'>
                    <span className='users__profile-dots'></span>
                    <span className='users__profile-dots'></span>
                    <span className='users__profile-dots'></span>
                </div>

            </div>
            <PostReactions comments={"10"} retweet={"1"} likes={"8"} ></PostReactions>
        </div>

        <div className="comment-box">
            <div className="comments">
                <img src={require('../../../images/cloutexhibition.png')} alt="" />
                <div className="comments-info">
                    <p className='comments-title'><b>cloutexhibition</b> @RajLahoti · 22m</p>
                    <p >YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
                    
                </div>
                <div className='tripple-dots'>
                    <span className='users__profile-dots'></span>
                    <span className='users__profile-dots'></span>
                    <span className='users__profile-dots'></span>
                </div>

            </div>
            <PostReactions comments={""} retweet={"5"} likes={"9"} ></PostReactions>
        </div>
                
    </>
}
export default Comments