const pokemonReducer = (state = [], actions) => {
    
    switch(actions.type) {
        case 'add':
            return state = actions.data
        default:
            return state
    }
}

export default pokemonReducer