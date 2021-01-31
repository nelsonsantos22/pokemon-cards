import React from 'react';

import '../css/search.css';

export default function SearchBox (props) {
    return (

        <div className = 'search-box'>

            <input 
                type='search' 
                placeholder='Search pokemon card'
                value = {props.searchPokemon}
                onChange = {props.handleSearch}
                className = 'search-input'
            />

        </div>
    )
}