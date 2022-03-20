import { gql } from "@apollo/client";
import { PokemonType } from "../Fragments/TypeMatchupFragments";

export const GET_TYPE_MATCHUP = gql`
  query getTypeMatchup($types: [TypesEnum!]!) {
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
