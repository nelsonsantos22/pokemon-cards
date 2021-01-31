import React from 'react';

export default function PokemonCard (props) {
    return (
        <div>
            <img src = {props.data.imageUrl} alt = {props.data.name}></img>
        </div>
    )
} 