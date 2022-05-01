import React from 'react'
import style from './style/SearchBar.css'
import SearchIcon from '../../src/img/icons/search-icon1.svg'
import {func} from "prop-types";

const SearchBar = (props) => {
    return (
        <div className='search-bar-container'>
            <button>
                <img src={SearchIcon} alt=''/>
            </button>
            <input/>
        </div>
    )
}

export default SearchBar

function search(){

}