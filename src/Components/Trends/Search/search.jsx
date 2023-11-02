import React from 'react'

import "./search.css"

function Search(){
    return <div className='searchBox'>
        <img className='search-icon' src={require('../../../images/search.png')} alt="search icon" />
        <input className='search-input' type="text" placeholder='Search Twitter' />
    </div>
}

export default Search