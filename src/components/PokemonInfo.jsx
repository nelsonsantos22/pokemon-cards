import React from 'react';
import './pokemonInfo.css';


export default function PokemonInfo (props) {

    return (
        <div className = 'pokemon-info-container'>

            <div>
                <img src = {props.data.imageUrl} alt = {props.data.name}></img>
            </div>

            <div>
                
                <div>
                    <h3>{props.data.name} <span className = 'pokedex-nr'>{props.data.evolvesFrom !== null && props.data.supertype !== 'Trainer' && props.data.supertype !== 'Energy' ? "#" + props.data.nationalPokedexNumber : ''} </span></h3>
                </div>

                <div>
                    <div>
                        <p>{props.data.subtype} {props.data.supertype}</p>
                        {props.data.evolvesFrom !== null && props.data.supertype !== 'Trainer' && props.data.supertype !== 'Energy'? <p>Evolves from: {props.data.evolvesFrom}</p> : ''}
                    </div>
                    <div>
                        {props.data.evolvesFrom !== null && props.data.supertype !== 'Trainer' && props.data.supertype !== 'Energy'? <p>hp: <span>{props.data.hp}</span></p> : ''}
                    </div>
                </div>

                {props.data.supertype !== 'Trainer' && props.data.supertype !== 'Energy'?
                    (<div>
                        <div>
                            {props.data.attacks.map((element, idx) => {
                                return (
                                    <div key = {idx}>
                                        <p>{element.name} {element.damage}</p>
                                        <p>{element.text}</p>
                                    </div>

                                )
                            } )} 
                        </div>
                        <div>
                            <div>
                                <p>Weakness</p>
                                {props.data.weaknesses.map ((element, idx) => {
                                    return (
                                        <div key = {idx}>
                                            <p>{element.type} {element.value}</p>
                                        </div>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>) : ' '
                }

                <div>
                    <p>{props.data.series} {props.data.set}</p>
                    <p>{props.data.number} {props.data.rarity}</p>
                </div>

                <div>
                    <p>Artist: {props.data.artist}</p>
                </div>

            </div>
        </div>
    )
}