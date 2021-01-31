import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { fetchPokemons } from './store/actions'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

import PokemonList from './components/PokemonList';
import PokemonInfo from './components/PokemonInfo';

import './css/app.css';


const ALL_POKEMONS = "https://api.pokemontcg.io/v1/cards";

export default function App () {

  useEffect(() => {
    
    fetchPokemonApi();

  }, [])

  const pokemonCards = useSelector(state => state.pokemonCards)

  const dispatch = useDispatch();

  const fetchPokemonApi = async () => {
    try {
      const response = await Axios.get(ALL_POKEMONS);
      dispatch(fetchPokemons(response.data.cards));

    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div>

      <h1>My Pokemon Card Collection</h1>

      <Router>

        <div className="App">

          <Switch>
            {pokemonCards.map((element, idx) => {
              return(
                <Route path = {'/' + element.name.toLowerCase()} key = {idx}>
                  <PokemonInfo data= {element} />
                </Route>
              )
            })}
            <Route path = '/'>
              <PokemonList />
            </Route>
          </Switch>

        </div>

      </Router>
    </div>
  );
}

