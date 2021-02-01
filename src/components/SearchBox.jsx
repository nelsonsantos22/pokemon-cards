import React from 'react';

import '../css/search.css';

export default function SearchBox (props) {
    return (

        <div 
            className = 'search-box'
            data-testid = 'search-input'
        >

            <input 
                type='search' 
                placeholder='Search pokemon card'
                value = {props.searchPokemon}
                onChange = {props.handleSearch}
                className = 'search-input'
                data-testid = 'input-field'
            />

        </div>
    )
}