import React from 'react'
import "./postreactions.css"

export default function PostReactions( {active, comments,  retweet,  likes} ){

    function addCount(evt){
        if(evt.target.matches(".reaction-sign")){
            let counter = Number(evt.target.nextSibling.textContent)
            counter++

            evt.target.nextSibling.textContent = counter
        }
    }

    return <div className="postreactions">
        <span className='reaction' active={active} onClick={(evt) => {addCount(evt)}}>
            <img className='reaction-sign' src={require('../../images/comment.png')} alt="" />
            <p className='total-reactions'>{comments}</p>
        </span>

        <span className='reaction'>
            <img className='reaction-sign' src={require('../../images/retweet.png')} alt="" />
            <p className='total-reactions'>{retweet}</p>
        </span>

        <span className='reaction'>
            <img className='reaction-sign' src={require('../../images/like.png')} alt="" />
            <p className='total-reactions'>{likes}</p>
        </span>

        <span className='reaction'>
            <img className='reaction-sign' src={require('../../images/share.png')} alt="" />
            <p className='total-reactions'></p>
        </span>

        <span className='reaction'>
            <img className='reaction-sign' src={require('../../images/statistics.png')} alt="" />
            <p className='total-reactions'></p>
        </span>
    </div>
}