import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import SearchBox from './SearchBox';

import { useSelector } from 'react-redux';

import PokemonCard from './PokemonCard';

import '../app.css';


export default function PokemonList(props) {

    const pokemonCards = useSelector(state => state.pokemonCards)

    const [searchPokemon, setSearchPokemon] = useState('');
    const [searchResult, setSearchResult] = useState([])

    
    useEffect(() => {
        
        handleSearchResult();

    }, [searchPokemon, pokemonCards])


  const handleSearchResult =  () => {

    const result = pokemonCards.filter(pokemon => pokemon.name.toLowerCase().includes(searchPokemon))
    setSearchResult(result)

  }


  const handleSearch = event => {
    setSearchPokemon(event.target.value)
  }

 
 
  return (
    <div className="App">
        
        <SearchBox searchPokemon ={searchPokemon} handleSearch = {handleSearch}/>
      
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
