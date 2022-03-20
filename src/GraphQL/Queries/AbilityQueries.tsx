import { gql } from "@apollo/client";

const GET_ABILITY_FULL = gql`
  query getAbilityFull($ability: AbilitiesEnum!) {
    getAbility(ability: $ability) {
      desc
      isFieldAbility
      name
      shortDesc
      serebiiPage
      smogonPage
      bulbapediaPage
    }
  }
`;

const GET_ABILITY_PARTIAL = gql`
  query getAbilityPartial($ability: AbilitiesEnum!) {
    getAbility(ability: $ability) {
      desc
      isFieldAbility
      name
      shortDesc
    }
  }
`;

const GET_ABILITY_PARTIAL_FUZZY = gql`
  query getFuzzyAbility($ability: String!, $take: Int, $reverse: Boolean) {
    getFuzzyAbility(ability: $ability, take: $take, reverse: $reverse) {
      desc
      isFieldAbility
      name
      shortDesc
    }
  }
`;

export { GET_ABILITY_FULL, GET_ABILITY_PARTIAL, GET_ABILITY_PARTIAL_FUZZY };
