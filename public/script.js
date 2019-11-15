const urlApi = "https://digimon-api.herokuapp.com/api/digimon/id/"
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokeinput = document.querySelector(".pokemon-input");
const digiInput = document.querySelector(".digimon-input");
const pokemonName = document.querySelector(".pokemon-name");
const pokemonImage = document.querySelector(".pokemon-image");
const pokemonID = document.querySelector(".pokemon-ability");
const pokemonShiny = document.querySelector(".pokemon-ability-image");
const digimonImage = document.querySelector(".digimon-img");
const digimonName = document.querySelector(".digimon-name");


const pokebutton = document.querySelector(".pokemon-digimon-button")
pokebutton.addEventListener("click", () => {
    getPokemonData();
    
});
const digibutton = document.querySelector(".digimon-button")
digibutton.addEventListener("click", () => {
    getDigimonData();

});

function getPokemonData() {
    axios.get(apiUrl + pokeinput.value)
    .then(function (response) {
        pokemonName.innerHTML = response.data.forms[0].name;
        /* button.src.innerHTML = randomPokemonData(response.data.forms[0].name || response.data.sprites.front_default) */
        /* pokemonID.innerHTML = getAbilityData(response.data.abilities); */
        pokemonImage.src = response.data.sprites.front_default;
        
        /* pokemonShiny.src = response.data.sprites.front_shiny; */
    })
    .catch(function (error) {
        pokemonName.innerHTML = "(An error has occurred.)";
        pokemonImage.src = "";
        /* pokemonShiny.src = ""; */
    });
}

/*     function getAbilityData(abilities){
        const result = ""

        for(i = 0; i < abilities.length; i++ ){
            result = result + abilities[i].ability.name + "<br></br>";
            result = result + "<img class='pokemon-ability-image' src='"+ abilities[i].ability.url +"'></img>";
            console.log(abilities[i].ability.url);
        }
        return result;
    }  */

    function getDigimonData(){
        axios.get(urlApi + digiInput.value)
        .then(function(response){
               digimonImage.src = response.data[0].img;
               digimonName.innerHTML = response.data[0].name;
            
        })
        .catch(function(error){
            console.log(error);
            digimonImage.src= ""
        })
    }

    function randomPokemonId(){
        return Math.floor(Math.random() * 801);
    }
    function randomPokemonValue() {
        document.getElementById('tb').value = randomPokemonId();
      }
    function randomDigimonId(){
        return Math.floor(Math.random() * 100);
    }
    function randomDigimonValue(){
        document.getElementById("to").value = randomDigimonId();
    }
    