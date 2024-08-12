const pokemon = require('./data.js')
const game = {
    party: [],

    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    gameDifficulty: [ "Med"
    ],
}
  
  //Exercise 1

  //console.dir(pokemon, {maxArrayLength: null})



  //Exercise 2

//const pokemonName = pokemon.find(pokemon => pokemon.number === 59)
  //console.log(pokemonName.name)

  //Exercise 3
//console.log(game.gameDifficulty)

  //Exercise 4


const starterP = pokemon.slice(0, 1);
game.party.push(starterP[0]);

  // Exercise 5

const pOne = pokemon.slice (5, 6);
game.party.push(pOne[0]);

const pTwo = pokemon.slice(149, 150);
game.party.push(pTwo[0]);

const pThree = pokemon.slice(144, 145);
game.party.push(pThree[0]);

  // Exercise 6

game.gyms.forEach(gym => {
  if (gym.difficulty <= 3) {
    gym.completed = true;
  }
});


  // Exercise 7


const evoP = pokemon.slice(1, 2)[0];
game.party.splice(0, 1, evoP);


//console.log(game)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/


game.party.forEach(pokemon => {
  
  console.log(pokemon.name);
});

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/



pokemon.forEach(starterPokemon => {
  if (starterPokemon.starter === true) {
    console.log(starterPokemon.name);
  }
});

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/



game.catchPokemon = (pokemonObj => { 
  game.party.push(pokemonObj);
});

game.catchPokemon(pokemon[4]);

//console.log(game.party);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/


game.catchPokemon = (pokemonObj => { 
  game.party.push(pokemonObj);
});

game.catchPokemon = (pokemonObj => { 
game.items.forEach (item => {
  if (item.name === "pokeball"){
   item.quantity -= 1
  }
});

game.party.push(pokemonObj)

})
//console.log(game.items);
game.catchPokemon(pokemon[6])
//console.log(game.party);
//console.log(game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

game.gyms.forEach(gym => {
  if (gym.difficulty <= 6) {
    gym.completed = true;
  }
});

//console.log(game.gyms)

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/


game.gymStatus = function() {
  const gymTally = { 
    complete: 0, 
    incomplete: 0
   };
  

game.gyms.forEach(gym => {
  if (gym.completed) {
    gymTally.complete +=1;
  } else {
    gymTally.incomplete +=1;
  }
});
console.log(gymTally);
}


game.gymStatus();



/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/


game.partyCount = function() {
  const count = game.party.length;
  console.log("partyLength", count);
}

  game.partyCount()
  

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms.forEach(gym => {
  if (gym.difficulty <= 8) {
    gym.completed = true;
  }
});

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/



console.log(game)