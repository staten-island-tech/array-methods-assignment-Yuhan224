const pokemons = [


    {
        name: "Mewtwo",
        mid: false,
        legendary: "yes",
        mega: true,
        caught: false,
        favoritenumbers: ["1","4"],
    },


    {
        name: "Pikachu",
        mid: true,
        legendary: "no",
        mega: false,
        caught: true,
        favoritenumbers: ["1","5"],
    },
   
    {
        name: "Landorus",
        mid: true,
        legendary: "yes",
        mega: false,
        caught: true,
        favoritenumbers: ["1","6"],
    },
   
    {
        name: "Lucario",
        mid: false,
        legendary: "no",
        mega: true,
        caught: true,
        favoritenumbers: ["1","8"],
    },


    {
        name: "Arceus",
        mid: false,
        legendary: "yes",
        mega: false,
        caught: true,
        favoritenumbers: ["1","9"],
    },
   
]


pokemons.forEach((pokemon) => {
    console.log(pokemon.name);
});
pokemons.forEach((pokemons) => {
    pokemons.favoritenumbers.forEach((favoritenumbers) => console.log(favoritenumbers));
})
const mid = pokemons.filter(pokemon => pokemon.mid ===false);
console.log(mid);





