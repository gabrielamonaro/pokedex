const pokeApi ={}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((resposta) => resposta.json());
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
   return fetch(url)
            .then((response) => response.json())
            .then((resposta) => resposta.results)
            .then((listaPokemons) => listaPokemons.map((pokeApi.getPokemonDetails)))      
            .then((lista) => Promise.all(lista))
            .then((lista) => lista)
}






