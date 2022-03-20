import gql from "graphql-tag";

export const PokemonType = gql`
  fragment PokemonType on Type {
    doubleEffectiveTypes
    doubleResistedTypes
    effectiveTypes
    effectlessTypes
    normalTypes
    resistedTypes
  }
`;
