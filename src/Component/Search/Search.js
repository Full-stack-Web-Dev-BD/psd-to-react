import React from 'react'
import Navbar from './Navbar'
import Tabs from './Tabs'
import "./search.css"
const Search = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Tabs/>
            </div>
        </>
    )
}

export default Search
