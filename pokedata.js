const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
const pokemon = document.getElementById('pokemonName'); //-----Nombre o ID que se introduce en el buscador
const buttonPokemon = document.getElementById('searchPokemon'); //----Botón de buscar(lupa)
const buttonClear = document.getElementById('clearPokemon');//----Botón cancelar
const appNode = document.getElementById('app');//---Nodo donde se insertan los pokemones

buttonPokemon.addEventListener('click' , insertPokemon);
buttonClear.addEventListener('click' , deletePokemons);


async function insertPokemon() {
  try {
    const res = await fetch(`${baseUrl}${pokemon.value.toLocaleLowerCase()}`)
    const pokemonDataJSON = await res.json()

    const allItems = []; //Guardar toda la información de los pokemones
    const result = []; //Guardar la respuesta en el array

    for (let pokemonInfo in pokemonDataJSON) { //Convertir el objeto JSON a array
      result.push([pokemonInfo , pokemonDataJSON[pokemonInfo]]);
    }

    console.table(result);

    //INFORMACIÓN INICIAL DE LA TARJETA (toda información es sacada del array que muestra la consola)
    
    //nombre de pokemon
    const pokemonName = document.createElement('h2');
    pokemonName.innerText = `${result[10][1].toUpperCase()}`; 

    //imagen del pokemon
    const pokemonImage = document.createElement('img');
    pokemonImage.src = result[14][1].other.home.front_default;

    //ID Pokemon
    const pokeID = document.createElement('h5');
    pokeID.innerText = `ID: ${result[6][1]}`;
    
    //tipo de pokemon
    const pokemonType = document.createElement('h5');
    pokemonType.innerText = `TYPE: ${result[16][1][0].type.name}`; 


    // INFORMACIÓN POSTERIOR DE LA TARJETA (toda información es sacada del array que muestra la consola)

    //HP
    const hp = document.createElement('p');
    hp.innerText = `HP: ${result[15][1][0].base_stat}`; 
    hp.classList.add('pokemonStats');

    //attack power
    const attack = document.createElement('p');
    attack.innerText = `Attack: ${result[15][1][1].base_stat}`; 
    attack.classList.add('pokemonStats');

    //defense
    const defense = document.createElement('p');
    defense.innerText = `Defense: ${result[15][1][2].base_stat}`; 
    defense.classList.add('pokemonStats');

    //special attack
    const specialAttack = document.createElement('p');
    specialAttack.innerText = `Special Attack: ${result[15][1][3].base_stat}`; 
    specialAttack.classList.add('pokemonStats');

    //special Defense
    const specialDefense = document.createElement('p');
    specialDefense.innerText = `Special Defense: ${result[15][1][4].base_stat}`; 
    specialDefense.classList.add('pokemonStats');

    //speed
    const speed = document.createElement('p');
    speed.innerText = `Speed: ${result[15][1][5].base_stat}`; 
    speed.classList.add('pokemonStats');

    //contenerdor de stats
    const stats = document.createElement('div'); //div guarda la información
    stats.append(hp, attack, defense, specialAttack, specialDefense, speed);
    stats.classList.add('pokemonStatsContainer');

    //crear contenedor
    const container = document.createElement('div'); //div guarda la información
    container.append(pokemonName, pokemonImage, pokeID, pokemonType, stats);
    container.classList.add('container');

    allItems.push(container);

    appNode.append(...allItems);

  } catch (error) {
    document.getElementById('show_error').classList.add('show')
    document.getElementById('show_error').classList.remove('hidden')
    return;
  }

  document.querySelector('.poke-card').style.display = 'none';
  
}

function deletePokemons() {
  let allPokemon = appNode.childNodes; //lista de nodos
  allPokemon = Array.from(allPokemon); //transformando una lista de nodos en un array

  allPokemon.forEach(pokemon => {  //cada pokemon que fue consultado serán removidos
    pokemon.remove(pokemon);
  });

  document.querySelector('.poke-card').style.display = 'block';
}


// Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}

buttonUp = document.getElementById("button-up");




