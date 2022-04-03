import { store } from "./Index";

export const PokemonHook = (type: string, pokemonId: number) => {
  store.dispatch({
    type: type,
    pokemonId: pokemonId,
  });
};
