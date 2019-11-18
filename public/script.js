
//API Request

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const voiceAPI = "https://code.responsivevoice.org/responsivevoice.js?key=UsbVlKGm";

// Bind classes for name/image
const pokemonName = document.querySelector(".pokemon-name");
const pokemonImage = document.querySelector(".pokemon-image");
//Second name/image
const secondPokemonImage = document.querySelector(".second-pokemon-img");
const secondPokemonName = document.querySelector(".second-pokemon-name");

//Binding all my classes for Stats
const pokemonHp = document.querySelector(".pokemon-hp");
const pokemonHpNumber = document.querySelector(".pokemon-hpNumber");

const pokemonSpeed = document.querySelector(".pokemon-speed");
const pokemonSpeedNumber = document.querySelector(".pokemon-speedNumber");

const pokemonAttack = document.querySelector(".pokemon-Attack");
const pokemonAttackNumber = document.querySelector(".pokemon-Attack-Number");

const pokemonDefense = document.querySelector(".pokemon-defense");
const pokemonDefenseNumber = document.querySelector(".pokemon-defense-Number");

const pokemonSpecialAttack = document.querySelector(".pokemon-S-A");	
const pokemonSpecialAttackNumber = document.querySelector(".pokemon-S-A-Number");	

const pokemonSpecialDefense = document.querySelector(".pokemon-S-D");
const pokemonSpecialDefenseNumber = document.querySelector(".pokemon-S-D-Number");

//Second stats
const secondPokemonHp = document.querySelector(".second-pokemon-hp");
const secondPokemonHpNumber = document.querySelector(".second-pokemon-hpNumber");

const secondPokemonSpeed = document.querySelector(".second-pokemon-speed");
const secondPokemonSpeedNumber = document.querySelector(".second-pokemon-speedNumber");

const secondPokemonAttack = document.querySelector(".second-pokemon-Attack");
const secondPokemonAttackNumber = document.querySelector(".second-pokemon-Attack-Number");

const secondPokemonDefense = document.querySelector(".second-pokemon-defense");
const secondPokemonDefenseNumber = document.querySelector(".second-pokemon-defense-Number");

const secondPokemonSpecialAttack = document.querySelector(".second-pokemon-S-A");	
const secondPokemonSpecialAttackNumber = document.querySelector(".second-pokemon-S-A-Number");

const secondPokemonSpecialDefense = document.querySelector(".second-pokemon-S-D");
const secondPokemonSpecialDefenseNumber = document.querySelector(".second-pokemon-S-D-Number");

//Button event onclick
const pokebutton = document.querySelector(".pokemon-button")
pokebutton.addEventListener("click", () => {
    getPokemonData();
   
});
//secondButton event onclick
const secondPokebutton = document.querySelector(".second-pokemon-button")
secondPokebutton.addEventListener("click", () => {
    getPokemonData1();

});

//Axios request for get info
function getPokemonData() {
    axios.get(apiUrl + pokebutton.value)
    .then(function (response) {
        console.log(response.data);

        //Get Name
        pokemonName.innerHTML = response.data.forms[0].name;

        //Get Image
        pokemonImage.src = response.data.sprites.front_default;

        // Get HP
        pokemonHpNumber.innerHTML = response.data.stats[5].base_stat;
        pokemonHp.innerHTML = response.data.stats[5].stat.name;

        // Get speed
        pokemonSpeedNumber.innerHTML = response.data.stats[0].base_stat;
        pokemonSpeed.innerHTML = response.data.stats[0].stat.name;

        //Get SpecialDefense
        pokemonSpecialDefenseNumber.innerHTML = response.data.stats[1].base_stat;
        pokemonSpecialDefense.innerHTML = response.data.stats[1].stat.name;

        //Get SpecialAttack
        pokemonSpecialAttackNumber.innerHTML = response.data.stats[2].base_stat;
        pokemonSpecialAttack.innerHTML = response.data.stats[2].stat.name;

        //Get Defense
        pokemonDefenseNumber.innerHTML = response.data.stats[3].base_stat;
        pokemonDefense.innerHTML = response.data.stats[3].stat.name;

        //Get Attack
        pokemonAttackNumber.innerHTML = response.data.stats[4].base_stat;
        pokemonAttack.innerHTML = response.data.stats[4].stat.name;

        
    })
    .catch(function (error) {
        pokemonName.innerHTML = "(An error has occurred.)";
        pokemonImage.src = "";
    });
}

    function getPokemonData1() {
        axios.get(apiUrl + secondPokebutton.value)
        .then(function (response) {
            console.log(response.data);
    
            //Get Name
            secondPokemonName.innerHTML = response.data.forms[0].name;
    
            //Get Image
            secondPokemonImage.src = response.data.sprites.front_default;
    
            // Get HP
            secondPokemonHpNumber.innerHTML = response.data.stats[5].base_stat;
            secondPokemonHp.innerHTML = response.data.stats[5].stat.name;
    
            // Get speed
            secondPokemonSpeedNumber.innerHTML = response.data.stats[0].base_stat;
            secondPokemonSpeed.innerHTML = response.data.stats[0].stat.name;
    
            //Get SpecialDefense
            secondPokemonSpecialDefenseNumber.innerHTML = response.data.stats[1].base_stat;
            secondPokemonSpecialDefense.innerHTML = response.data.stats[1].stat.name;
    
            //Get SpecialAttack
            secondPokemonSpecialAttackNumber.innerHTML = response.data.stats[2].base_stat;
            secondPokemonSpecialAttack.innerHTML = response.data.stats[2].stat.name;
    
            //Get Defense
            secondPokemonDefenseNumber.innerHTML = response.data.stats[3].base_stat;
            secondPokemonDefense.innerHTML = response.data.stats[3].stat.name;
    
            //Get Attack
            secondPokemonAttackNumber.innerHTML = response.data.stats[4].base_stat;
            secondPokemonAttack.innerHTML = response.data.stats[4].stat.name;
    
            
        })
        .catch(function (error) {
            secondPokemonName.innerHTML = "(An error has occurred.)";
            secondPokemonImage.src = "";
        });
    }


     function getVoiceDataAxios(){
       axios.get("https://code.responsivevoice.org/responsivevoice.js?key=UsbVlKGm")
       .then(function(response){
           console.log(response)
           var name = response.data.name;
            var lang = response.data.langs;
           /* var voices = 
                 
           voice =  voices + response.data.responsiveVoice.speak(document.getElementById("name-pokemon").textContent);
           voice =  voices + response.responsiveVoice.speak(document.getElementById("battle").textContent);
           voice =  voices + response.responsiveVoice.speak(document.getElementById("name-digimon").textContent);
           
            return voice */
       })
         .catch(function(error){
            console.log(error);
         })        
        
    }
    function getVoiceData(voiceAPI){
        var voices = voiceAPI

            voice = voices + responsiveVoice.speak(document.getElementById("name-pokemon").textContent);
            voice = voices + responsiveVoice.speak(document.getElementById("battle").textContent);
            voice = voices + responsiveVoice.speak(document.getElementById("name-pokemon-second").textContent);
            return voice;
    }

    function randomPokemonId(){
        return Math.floor(Math.random() * 801);
    }
    function randomPokemonValue() {
        document.getElementById('tb').value = randomPokemonId();
      }
    function randomSecondPokemonId(){
        return Math.floor(Math.random() * 801);
    }
    function randomSecondPokemonValue(){
        document.getElementById('t1').value = randomSecondPokemonId();
    }


    