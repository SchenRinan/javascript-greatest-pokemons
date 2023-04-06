// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(array){
    const cloneArray = [];
    for(i=0;i<array.length;i++){cloneArray.push(array[i]);};
    const onlyFire = cloneArray.filter(fireMon => fireMon.type.includes("Fire"));
    return onlyFire;
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(array){
    const cloneArray = [];
    for(i=0;i<array.length;i++){cloneArray.push(array[i]);};
    const removem = [];
    for(i=0;i<array.length;i++){
        cloneArray[i].height = cloneArray[i].height.replace(" m","");
    }
    let shorttracker = 9999;
    let pokeNum = 0;
    for(i=0;i<cloneArray.length;i++){
        if(shorttracker > +cloneArray[i].height){shorttracker = +cloneArray[i].height; pokeNum = i;}
    }
    if(array.length === 0){return 0;}
    return cloneArray[pokeNum].name;
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 