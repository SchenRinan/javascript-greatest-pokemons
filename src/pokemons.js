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
function candyAverage(array){
    if(array.length === 0){return 0;}
    const filterCandy = array.filter(a => typeof a.candy_count === "number");
    const sumCandy = filterCandy.reduce((a, b) => a + b.candy_count, 0);
    return Math.round(sumCandy / array.length *100)/100;
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(array){
    if(array.length === 0){return 0;}
    const filterGround = array.filter(a => a.type.includes("Ground"));
    const tenGround = [];
    for(i=0;i<10 & i < filterGround.length; i++){tenGround.push(filterGround[i].img)}
    return tenGround;
}
// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(array){
    if(array.length === 0){return 0}
    const cloneArray = [];
    for(i=0;i<array.length;i++){cloneArray.push(array[i])}
    for(i=0;i<array.length;i++){
        cloneArray[i].weight = cloneArray[i].weight.replace(" kg","");
    }
    const pikachu = cloneArray.filter(a => a.name === "Pikachu");
    const fatPoke = cloneArray.filter(a => a.weight > +pikachu[0].weight)
    const fatName = fatPoke.map(a => a.name)
    return fatName;
}
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(array){
    const cloneArray = [];
    for(i=0;i<array.length;i++){cloneArray.push(array[i])}
    const onlyName = cloneArray.map(a => a.name)
    onlyName.sort();
    const tillTwenty = [];
    for(i=0;i<20 && i<array.length; i++){
        tillTwenty.push(onlyName[i])
    }
    return tillTwenty;
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 