import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBox from '../SearchBox';

test('check if input displays', () => {
    const { getByTestId } = render(<SearchBox />);
    const searchInput = getByTestId('search-input');
    const inputField = getByTestId('input-field');

    expect(searchInput).toBeInTheDocument();
    expect(inputField).toHaveValue('');

});