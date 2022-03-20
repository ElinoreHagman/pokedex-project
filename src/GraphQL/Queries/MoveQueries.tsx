import { gql } from "@apollo/client";

export const GET_MOVE_NAME_FUZZY = gql`
  query getFuzzyMoveName($move: String!, $take: Int, $reverse: Boolean) {
    getFuzzyMove(move: $move, take: $take, reverse: $reverse) {
      name
    }
  }
`;

export const GET_MOVE_FUZZY_PARTIAL = gql`
  query getFuzzyMovePartial($move: String!, $take: Int, $reverse: Boolean) {
    getFuzzyMove(move: $move, take: $take, reverse: $reverse) {
      accuracy
      maxMovePower
      name
      pp
      shortDesc
      type
      basePower
      category
      desc
    }
  }
`;

export const GET_MOVES = gql`
  query getFuzzyLearnset(
    $pokemon: String!
    $moves: [String!]!
    $generation: Int
  ) {
    getFuzzyLearnset(
      pokemon: $pokemon
      moves: $moves
      generation: $generation
    ) {
      species
      tmMoves {
        name
        generation
      }
      virtualTransferMoves {
        name
        generation
      }
      dreamworldMoves {
        name
        generation
      }
      eggMoves {
        name
        generation
      }
      eventMoves {
        name
        generation
      }
      levelUpMoves {
        name
        level
        generation
      }
      tutorMoves {
        name
        generation
      }
    }
  }
`;

export const GET_MOVE_FUZZY_FULL = gql`
  query getFuzzyMoveWithFullData(
    $move: String!
    $take: Int
    $reverse: Boolean
  ) {
    getFuzzyMove(move: $move, take: $take, reverse: $reverse) {
      accuracy
      maxMovePower
      name
      pp
      priority
      serebiiPage
      shortDesc
      smogonPage
      target
      type
      zMovePower
      basePower
      bulbapediaPage
      category
      contestType
      desc
      isFieldMove
      isGMax
      isNonstandard
      isZ
    }
  }
`;
