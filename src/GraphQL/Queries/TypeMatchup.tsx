import { gql } from "@apollo/client";
import { PokemonType } from "../Fragments/TypeMatchupFragment";

export const getTypeMatchup = gql`
  query ($types: [TypesEnum!]!) {
    getTypeMatchup(types: $types) {
      attacking {
        ...PokemonType
      }
      defending {
        ...PokemonType
      }
    }
  }
  ${PokemonType}
`;
