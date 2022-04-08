const pokemonExistsInDeck = (pokemonId: number) => {
  let list: number[] = [];

  if (localStorage.getItem("pokemons") !== null) {
    var pokemons: number[] = JSON.parse(
      localStorage.getItem("pokemons") || "[1]"
    );
    list = pokemons;
  }

  return list.includes(pokemonId);
};

export default pokemonExistsInDeck;
