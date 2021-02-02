import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';
import { shallow } from "enzyme";

import PokemonList from '../PokemonList';


const mockStore = configureStore();
const state = {};
let store = mockStore(state);
configure({ adapter: new Adapter() });


const pokemonComponent = () => {
    return (
        <Provider store={store}>
          <PokemonList />
        </Provider>
    )
}

test('render <PokemonList /> without errors', () => {
    shallow(pokemonComponent());
})
