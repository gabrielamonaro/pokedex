
function convertaPokemonTypes (pokemonTypes)
{
    return pokemonTypes.map((numeroSlot) => `<li class="type">${numeroSlot.type.name}</li>`)
}


function template(pokemon)
{
    return `
        <li class="pokemon">
                    <span class="number">#${pokemon.order}</span>
                    <h2 class="name"> 
                        ${pokemon.name}
                    </h2>
                    <div class="detail">
                        <ol>
                           ${convertaPokemonTypes(pokemon.types).join('')}
                        </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                </li>
        `
}

const listaPokemonHtml = document.querySelector('#lista');

pokeApi.getPokemons().then((pokemons) =>
{        
        listaPokemonHtml.innerHTML += pokemons.map(template).join('');
})

    

