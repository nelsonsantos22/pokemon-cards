import React from 'react';

import '../css/pokemonInfo.css';


export default function PokemonInfo (props) {

    return (

        <div className = 'info-container'>

            <div className = 'img-div'>
                <img 
                    data-testid = 'pokemon-card'
                    calssName = 'card-img' 
                    src = {props.data.imageUrl} 
                    alt = {props.data.name}
                />
            </div>

            <div className = 'details-div'>

                <div className = 'pokeheader-div'>
                    <div className = 'pokename-div'>
                        <span className = 'pokename'>{props.data.name} <span className= 'pokedex'>{props.data.evolvesFrom !== null && props.data.supertype !== 'Trainer' && props.data.supertype !== 'Energy' ? "#" + props.data.nationalPokedexNumber : ''} </span></span>
                    </div>
                    <div className = 'hp-div'>
                        {props.data.evolvesFrom !== 0 && props.data.supertype !== 'Trainer' && props.data.supertype !== 'Energy'? <span className = 'hp-header'>HP<span className = 'hp-value'> {props.data.hp}</span></span> : ''}
                    </div>
                </div>

                <div>
                    <div className = 'sub-info'>
                        <span>{props.data.subtype} {props.data.supertype}</span>
                    </div>
                    <div>
                        {props.data.evolvesFrom !== undefined && props.data.supertype !== 'Trainer' && props.data.supertype !== 'Energy' ? <p>Evolves from: {props.data.evolvesFrom}</p> : ''}
                    </div>
                </div>

                <hr/>

                {props.data.supertype !== 'Trainer' && props.data.supertype !== 'Energy' ?
                    (
                    <div >
                        {props.data.attacks.map((element, idx) => {
                            return (
                                <div className = 'attack-div' key = {idx}>
                                    <div className = 'attack-name'>
                                        <span>{element.name} | {element.damage}</span>
                                    </div>
                                    <div className = 'attack-description'>
                                        <span>{element.text}</span>
                                    </div>
                                </div>
                            )
                        })} 

                        <br/>

                        <div className = 'weak-div'>
                            <div>
                                <span className = 'weak-hd'>WEAKNESS</span>
                                {props.data.weaknesses.map ((element, idx) => {
                                    return (
                                        <div className = 'weak-value' key = {idx}>
                                            <span>{element.type} {element.value}</span>
                                        </div>
                                    )
                                })}                                
                            </div>
                        </div>
                    </div>

                    ) : ' '}

                <div className = 'bottom-info'>

                    <div className = 'bottom-block'>
                        <div className = 'block-hd'>SET</div>
                        <div className = 'block-value'>{props.data.series} {props.data.set}</div>
                    </div>

                    <div className = 'bottom-block'>
                        <div className = 'block-hd'>RARITY</div>
                        <div className = 'block-value'>{props.data.number} {props.data.rarity}</div>
                    </div>

                    {props.data.artist !== '' ? 
                    (
                    <div className = 'bottom-block'>
                        <div className = 'block-hd'>ARTIST</div>
                        <div className = 'block-value'>{props.data.artist}</div>
                    </div> 

                    ) 
                    : null}

                </div>

            </div>

        </div>
    )
}