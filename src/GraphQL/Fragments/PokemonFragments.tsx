import gql from "graphql-tag";

export const PokemonBasicInfoFragment = gql`
  fragment PokemonBasicInfoFragment on Pokemon {
    num
    species
    sprite
    backSprite
    shinySprite
    shinyBackSprite
    types
  }
`;

export const PokemonExtraInfoFragment = gql`
  fragment PokemonExtraInfoFragment on Pokemon {
    color
    evolutionLevel
    height
    weight
    gender {
      female
      male
    }
  }
`;

export const PokemonStatsFragment = gql`
  fragment PokemonStatsFragment on Pokemon {
    baseStats {
      hp
      attack
      defense
      specialattack
      specialdefense
      speed
    }
  }
`;

export const PokemonAbilitiesFragment = gql`
  fragment PokemonAbilitiesFragment on Pokemon {
    abilities {
      first
      hidden
      second
      special
    }
  }
`;
