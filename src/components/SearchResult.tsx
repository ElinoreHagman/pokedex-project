import { useQuery } from "@apollo/client";
import {
  GetFuzzyPokemonQuery,
  GetFuzzyPokemonQueryVariables,
} from "../GraphQL/codegen-types";
import { GET_POKEMON_FUZZY } from "../GraphQL/Queries/PokemonQueries";
import Card from "./Card";
import { CardCollection } from "./CardCollection";

interface pokemonString {
  pokemonName: string;
}
export const SearchResult = (pokemonName: pokemonString) => {
  const { loading, data } = useQuery<
    GetFuzzyPokemonQuery,
    GetFuzzyPokemonQueryVariables
  >(GET_POKEMON_FUZZY, {
    variables: { pokemon: pokemonName.pokemonName, take: 4 },
  });

  if (loading || !data) return null;

  const pokemons: number[] = [];
  data?.getFuzzyPokemon.forEach(function (value, key) {
    pokemons.push(value.num);
  });

  return <CardCollection pokemonList={pokemons} />;
};
