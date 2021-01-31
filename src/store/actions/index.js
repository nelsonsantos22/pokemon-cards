export const fetchPokemons = (pokemonData) => {
    return {
        type: 'add',
        data: pokemonData
    }
}