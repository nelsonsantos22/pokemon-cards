import { combineReducers } from 'redux'
import  pokemonReducer  from './pokemonReducer';

const allReducers = combineReducers({
    pokemonCards: pokemonReducer
})

export default allReducers;