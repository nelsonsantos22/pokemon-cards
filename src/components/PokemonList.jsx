import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SearchBox from './SearchBox';
import PokemonCard from './PokemonCard';

import '../css/app.css';

export default function PokemonList() {

    const pokemonCards = useSelector(state => state.pokemonCards)

    const [searchPokemon, setSearchPokemon] = useState('');
    const [searchResult, setSearchResult] = useState([])

    
    useEffect(() => {
        
        handleSearchResult();

    }, [searchPokemon, pokemonCards])


    const handleSearchResult =  () => {

        const result = pokemonCards.filter(pokemon => pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase()))
        setSearchResult(result)

    }


    const handleSearch = event => {
        setSearchPokemon(event.target.value)
    }
 
 
  return (

    <div className="App">
        
        <SearchBox searchPokemon ={searchPokemon} handleSearch = {handleSearch}/>

        {searchResult.length === 0 ? (
            <div className = 'loading-div'>
                <img 
                    src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDI5YjhiZDktY2I1YS00MWU0LTljN2UtZWU1MTZmYWNlOWJiXC9kYXlvM293LTdhYzg2YzMxLThiMmItNDgxMC04OWYyLWU2MTM0Y2FmMWYyZC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.LJBxDkRocQStjZpmj9Injfv73mG2SQZ8X6HNdlP5WHw'
                    alt = 'pokeball'
                    width = '25%'
                />
            </div>
            )
            : ''
        }
        <div className = "card-container">
            {searchResult.map ((element, index) => {
                return (

                    <div className = "card" key = {index}>
                        <Link to ={'/' + element.name.toLowerCase()}>
                            <PokemonCard 
                                data = {element}
                            />
                        </Link>
                    </div>

                )
            })}
        </div>

      </div>  
  );
}
