import { getByTestId } from '@testing-library/react';
import React from 'react';
import { render } from '@testing-library/react';
const data = { 
    attacks : [],
    weaknesses : []    
};

import PokemonInfo from '../PokemonInfo';

test('render <PokemonInfo />', () => {
    const { getByTestId } = render(<PokemonInfo data = {data} />);
    const cardImg = getByTestId('pokemon-card');

    expect(cardImg).toBeInTheDocument();

});

test('check card image size', () => {
    const card = getByTestId('pokemon-card');

    expect(card).to
})

