`use strict`;

function pokemonTypes(arr){
    let cleanarr=[]
    for(pokemon of arr){
        console.log(pokemon)
        cleanarr.push(`${pokemon.name} is a ${pokemon.type.toLowerCase()} type Pokemon`)
    }
    return cleanarr
}

console.log(pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]),`["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon."]`)
