function template(pokemon)
{
    return `
        <li class="pokemon ${pokemon.type}" >
                    <span class="number ">#${pokemon.number}</span>
                    <h2 class="name"> 
                        ${pokemon.name}
                    </h2>
                    <div class="detail">
                        <ol>
                           ${pokemon.types.map((type) => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
                        </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </li>
        `
}

const listaPokemonHtml = document.querySelector('#lista');

function mostrarPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons) =>
{        
        listaPokemonHtml.innerHTML += pokemons.map(template).join('');
})
}

mostrarPokemons();
let offset = 20;

const botaoMais = document.querySelector('#bt-more');
const maxRecord = 150;

botaoMais.addEventListener("click", () => {

       offset += 10;
        mostrarPokemons(offset,10);
        if(maxRecord <= offset)
        {
            botaoMais.classList.add('hidden');
        }

})

    

