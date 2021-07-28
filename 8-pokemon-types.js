`use strict`;

function pokemonTypes(arr){
    const cleanarr = arr.map(formatPokemon)
    return cleanarr
}

function formatPokemon(pokemon){
    return `${pokemon.name} is a ${pokemon.type.toLowerCase()} type Pokemon`
}

console.log(pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]),`["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon."]`)
