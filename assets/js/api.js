const pokeApi ={}

function convertPokeDetailsToPokemon(pokeDetails)
{
    const pokemon = new Pokemon();
    pokemon.name = pokeDetails.name;
    pokemon.number = pokeDetails.order;
    pokemon.types = pokeDetails.types.map((slot) => slot.type.name);
    pokemon.type = pokemon.types[0];
    pokemon.photo = pokeDetails.sprites.other.dream_world.front_default;

    return pokemon;
}


pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((resposta) => resposta.json())
        .then (convertPokeDetailsToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
   return fetch(url)
            .then((response) => response.json())
            .then((resposta) => resposta.results)
            .then((listaPokemons) => listaPokemons.map((pokeApi.getPokemonDetails)))      
            .then((lista) => Promise.all(lista))
            .then((lista) => lista)
}






