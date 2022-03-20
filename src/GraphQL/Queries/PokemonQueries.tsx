import { gql } from "@apollo/client";
import {
  PokemonBasicInfoFragment,
  PokemonExtraInfoFragment,
  PokemonStatsFragment,
  PokemonAbilitiesFragment,
} from "../Fragments/PokemonFragments";

const GET_POKEMON_BY_NAME = gql`
  query getPokemon($name: PokemonEnum!) {
    getPokemon(pokemon: $name) {
      ...PokemonBasicInfoFragment
      ...PokemonExtraInfoFragment
      ...PokemonStatsFragment
      ...PokemonAbilitiesFragment
      preevolutions {
        ...PokemonBasicInfoFragment
      }
      evolutions {
        ...PokemonBasicInfoFragment
      }
      flavorTexts {
        flavor
      }
    }
  }
  ${PokemonBasicInfoFragment}
  ${PokemonExtraInfoFragment}
  ${PokemonStatsFragment}
  ${PokemonAbilitiesFragment}
`;

const GET_POKEMON_BY_NUMBER = gql`
  query getPokemonByDexNumber($number: Int!) {
    getPokemonByDexNumber(number: $number) {
      ...PokemonBasicInfoFragment
      ...PokemonExtraInfoFragment
      ...PokemonStatsFragment
      ...PokemonAbilitiesFragment
      preevolutions {
        ...PokemonBasicInfoFragment
      }
      evolutions {
        ...PokemonBasicInfoFragment
      }
      flavorTexts {
        flavor
      }
    }
  }
  ${PokemonBasicInfoFragment}
  ${PokemonExtraInfoFragment}
  ${PokemonStatsFragment}
  ${PokemonAbilitiesFragment}
`;

const GET_POKEMONS = gql`
  query getAllPokemonSpecies($offset: Int, $take: Int, $reverse: Boolean) {
    getAllPokemonSpecies(take: $take, offset: $offset, reverse: $reverse)
  }
`;

export { GET_POKEMON_BY_NAME, GET_POKEMON_BY_NUMBER, GET_POKEMONS };
