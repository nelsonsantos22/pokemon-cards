import React from 'react';

export default function SearchBox (props) {
    return (

        <div className = 'search-box'>

            <input 
                type='search' 
                placeholder='Search Pokemon card'
                value = {props.searchPokemon}
                onChange = {props.handleSearch}
            />
            
        </div>
    )
}