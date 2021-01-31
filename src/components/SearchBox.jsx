import React from 'react';

export default function SearchBox (props) {
    return (

        <div className = 'search-box'>

            <input 
                type='search' 
                placeholder='Search pokemon card'
                value = {props.searchPokemon}
                onChange = {props.handleSearch}
            />

        </div>
    )
}