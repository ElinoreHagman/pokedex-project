const getPokemons = () => {
  let list: number[] = [];

  if (localStorage.getItem("pokemons") !== null) {
    var pokemons: number[] = JSON.parse(
      localStorage.getItem("pokemons") || "[1]"
    );
    list = pokemons;
  }
  return list;
};

const initialState = {
  pokemons: getPokemons(),
};

export const PokemonReducer = (
  state = initialState,
  action: { type: string; pokemonId: number }
) => {
  const storedPokemons: number[] = state.pokemons;
  switch (action.type) {
    case "Save":
      if (!storedPokemons.includes(action.pokemonId)) {
        storedPokemons.push(action.pokemonId);
        localStorage.setItem("pokemons", JSON.stringify(storedPokemons));
      }
      return { ...state, pokemons: storedPokemons };
    case "Remove":
      if (storedPokemons.includes(action.pokemonId)) {
        storedPokemons.splice(storedPokemons.indexOf(action.pokemonId), 1);
        localStorage.setItem("pokemons", JSON.stringify(storedPokemons));
      }
      return { ...state, pokemons: storedPokemons };
    default:
      return state;
  }
};
