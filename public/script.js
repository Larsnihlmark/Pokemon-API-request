
//API Request

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const userAPI = "https://randomuser.me/api/";

// Bind classes for name-image
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

//User first + last name API-request
const randomUserTitle = document.querySelector(".trainerTitle")
const randomUser = document.querySelector(".trainerFirstName");
const randomUserLastName = document.querySelector(".trainerLastName");

const secondRandomUserTitle = document.querySelector(".trainerTitle2")
const secondRandomUser = document.querySelector(".trainerFirstName2");
const secondRandomUserLastName = document.querySelector(".trainerLastName2");

//Button event onclick
const pokebutton = document.querySelector(".pokemon-button")
pokebutton.addEventListener("click", () => {
    getPokemonData();
    getUserNameData();
    trainerChanges();
});
//secondButton event onclick
const secondPokebutton = document.querySelector(".second-pokemon-button")
secondPokebutton.addEventListener("click", () => {
    getPokemonData1();
    getSecondUserNameData();
    secondTrainerChanges()
});

//Axios request for get info
getPokemonData = async () => {
    await axios.get(apiUrl + pokebutton.value)
    .then(function (response) {
        
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
        console.log(error)
        //Name error
        pokemonName.innerHTML = "(An error has occurred.)";

        //Image error
        pokemonImage.src = "";

        //Hp error
        pokemonHp.innerHTML = "(An error has occured-Hp)"
        pokemonHpNumber.innerHTML = "(An error has occured-Hp-number)"

        //Speed error
        pokemonSpeedNumber.innerHTML = "(An error has occured-speed-number)"
        pokemonSpeed.innerHTML = "(An error has occured-speed)"

        //Special Defense error
        pokemonSpecialDefense.innerHTML = "(An error has occured-Special-Defense)"
        pokemonSpecialDefenseNumber.innerHTML = "(An error has occured-Special-Defense-Number)"

        // Special Attack error
        pokemonSpecialAttack.innerHTML = "(An error has occured-Special-Attack)"
        pokemonSpecialAttackNumber.innerHTML = "(An error has occured-Special-Attack-Number)"

        // Defense error
        pokemonDefense.innerHTML = "(An error has occured-Defense)"
        pokemonDefenseNumber.innerHTML = "(An error has occured-Defense-Number)"

        //Attack error
        pokemonAttack.innerHTML = "(An error has occured-Attack)"
        pokemonAttackNumber.innerHTML = "(An error has occured-Attack-Number)"
    });
}

    getPokemonData1 = async() => {
        await axios.get(apiUrl + secondPokebutton.value)
        .then(function (response) {
 
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
            console.log(error)
            //Name error
            secondPokemonName.innerHTML = "(An error has occurred.)";

            //Image error
            secondPokemonImage.src = "";

            //Hp error
            secondPokemonHp.innerHTML = "(An error has occured-Hp)"
            secondPokemonHpNumber.innerHTML = "(An error has occured-Hp-number)"

            //Speed error
            secondPokemonSpeedNumber.innerHTML = "(An error has occured-speed-number)"
            secondPokemonSpeed.innerHTML = "(An error has occured-speed)"

            //Special Defense error
            secondPokemonSpecialDefense.innerHTML = "(An error has occured-Special-Defense)"
            secondPokemonSpecialDefenseNumber.innerHTML = "(An error has occured-Special-Defense-Number)"

            // Special Attack error
            secondPokemonSpecialAttack.innerHTML = "(An error has occured-Special-Attack)"
            secondPokemonSpecialAttackNumber.innerHTML = "(An error has occured-Special-Attack-Number)"

            // Defense error
            secondPokemonDefense.innerHTML = "(An error has occured-Defense)"
            secondPokemonDefenseNumber.innerHTML = "(An error has occured-Defense-Number)"

            //Attack error
            secondPokemonAttack.innerHTML = "(An error has occured-Attack)"
            secondPokemonAttackNumber.innerHTML = "(An error has occured-Attack-Number)"
        });
    }

//API request for random user Title-First-Last
     getUserNameData = async () =>{
      await axios.get(userAPI)
       .then(function(response){
           console.log(response.data)
           
           randomUserTitle.innerHTML = response.data.results[0].name.title;
           randomUser.innerHTML = response.data.results[0].name.first;
           randomUserLastName.innerHTML = response.data.results[0].name.last;
           
       })
         .catch(function(error){
            console.log(error);
            randomUser.innerHTML = "(An error for userFirstName)";
            randomUserTitle.innerHTML = "(An error for userTitle)";
            randomUserLastName.innerHTML = "(An error for userLastName)";
         })          
    }

//API request for secondRandom user Title-First-Last    
    getSecondUserNameData = async () =>{
        await axios.get(userAPI)
        .then(function(response){
            secondRandomUserTitle.innerHTML = response.data.results[0].name.title;
            secondRandomUser.innerHTML = response.data.results[0].name.first;
            secondRandomUserLastName.innerHTML = response.data.results[0].name.last;
        })
        .catch(function(error){
            console.log(error)
            secondRandomUser.innerHTML = "(An error for userFirstName)";
            secondRandomUserTitle.innerHTML = "(An error for userTitle)";
            secondRandomUserLastName.innerHTML = "(An error for userLastName)";
        })
    }

    //Voice getting ID for output
    function getVoiceData(){
            voice =  responsiveVoice.speak(document.getElementById("name-pokemon").textContent);
            voice =  responsiveVoice.speak(document.getElementById("battle").textContent);
            voice =  responsiveVoice.speak(document.getElementById("name-pokemon-second").textContent);
        return voice;
    }

    //Random pokemon value output
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

    // Button click Trainer text 
    function trainerChanges(){
        document.getElementById("valueTrainer").innerHTML = "Trainer";
    }
    function secondTrainerChanges(){
        document.getElementById("valueTrainer2").innerHTML = "Trainer";
    }

    //Audio for button toggle on/off
    var myAudio = document.getElementById("myAudio");
    myAudio.volume = 0.06;
    var isPlaying = false;
    
    function togglePlay() {
      if (isPlaying) {
        myAudio.pause(); 
      } else {
        myAudio.play();
      }
    }
    myAudio.onplaying = function() {
      isPlaying = true;
    }
    myAudio.onpause = function() {
      isPlaying = false;
    }
 




    