const initialState = {
  pokemons: [14, 252, 367, 401, 500, 623, 701, 822],
};

export const PokemonReducer = (
  state = initialState,
  action: { type: string; pokemonId: number }
) => {
  const storedPokemons = state.pokemons;
  switch (action.type) {
    case "Save":
      if (!storedPokemons.includes(action.pokemonId)) {
        storedPokemons.push(action.pokemonId);
      }
      return { ...state, pokemons: storedPokemons };
    case "Remove":
      if (storedPokemons.includes(action.pokemonId)) {
        storedPokemons.splice(storedPokemons.indexOf(action.pokemonId), 1);
      }
      return { ...state, pokemons: storedPokemons };
    default:
      return state;
  }
};
