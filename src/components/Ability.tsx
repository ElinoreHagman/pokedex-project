import { useQuery } from "@apollo/client";
import styled from "styled-components";
import {
  GetFuzzyAbilityQuery,
  GetFuzzyAbilityQueryVariables,
} from "../GraphQL/codegen-types";
import { GET_ABILITY_PARTIAL_FUZZY } from "../GraphQL/Queries/AbilityQueries";

const Description = styled.div`
  text-align: left;
  margin-bottom: 4px;
  font-size: min(2vw, 10px);
  height: fit-content;
  span:first-child {
    font-weight: bold;
    padding-right: 5px;
  }
`;

interface AbilityProps {
  abilityName: string;
}

const Ability = ({ abilityName }: AbilityProps) => {
  const { loading, data } = useQuery<
    GetFuzzyAbilityQuery,
    GetFuzzyAbilityQueryVariables
  >(GET_ABILITY_PARTIAL_FUZZY, {
    variables: { ability: abilityName },
  });

  if (loading) return null;
  const ability = data?.getFuzzyAbility[0];

  return (
    <Description>
      <span>{ability?.name}</span>
      <span>{ability?.shortDesc}</span>
    </Description>
  );
};

export default Ability;
