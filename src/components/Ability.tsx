import { useQuery } from "@apollo/client";
import styled from "styled-components";
import {
  GetFuzzyAbilityQuery,
  GetFuzzyAbilityQueryVariables,
} from "../GraphQL/codegen-types";
import { GET_ABILITY_PARTIAL_FUZZY } from "../GraphQL/Queries/AbilityQueries";

interface Size {
  xl?: boolean;
}

const Description = styled.div<Size>`
  text-align: left;
  margin-bottom: ${(props) => (props.xl ? "6px" : "4px")};
  font-size: ${(props) => (props.xl ? "min(4vw, 13px)" : "min(2vw, 10px)")};
  height: fit-content;
  span:first-child {
    font-weight: bold;
    padding-right: 5px;
  }
`;

interface AbilityProps {
  abilityName: string;
  xl?: boolean;
}

const Ability = ({ abilityName, xl }: AbilityProps) => {
  const { loading, data } = useQuery<
    GetFuzzyAbilityQuery,
    GetFuzzyAbilityQueryVariables
  >(GET_ABILITY_PARTIAL_FUZZY, {
    variables: { ability: abilityName },
  });

  if (loading) return null;
  const ability = data?.getFuzzyAbility[0];

  return (
    <Description xl={xl}>
      <span>{ability?.name}</span>
      <span>{ability?.shortDesc}</span>
    </Description>
  );
};

export default Ability;
