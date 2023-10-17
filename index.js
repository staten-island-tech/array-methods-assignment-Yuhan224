const pokemons = [

    {
        name: "Mewtwo", 
        mid: "no",
        legendary: true,
        mega: true,
        caught: false,
    },

    {
        name: "Pikachu",
        mid: "yes",
        legendary: false,
        mega: false,
        caught: true,
    },
    
    {
        name: "Landorus",
        mid: "yes",
        legendary: true,
        mega: false,
        caught: true,
    },
    
    {
        name: "Lucario",
        mid: "no",
        legendary: true,
        mega: true,
        caught: true,
    },

    {
        name: "Arceus",
        mid: "no",
        legendary: true,
        mega: false,
        caught: true,
    },
   
]
pokemons.forEach((pokemon) => console.log(pokemon.name));
pokemons.forEach((pokemon) => console.log(pokemon.mid));
pokemons.forEach((pokemon) => console.log(pokemon.caught));
const pokemon = pokemons.filter (pokemon => pokemons === true);
console.log (legendary);



