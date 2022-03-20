import { useQuery } from "@apollo/client";
import {
  GetFuzzyAbilityQuery,
  GetFuzzyAbilityQueryVariables,
  QueryGetFuzzyAbilityArgs,
} from "../GraphQL/codegen-types";
import { GET_ABILITY_PARTIAL_FUZZY } from "../GraphQL/Queries/AbilityQueries";

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
  const ability = data?.getFuzzyAbility.at(0)!;
  console.log(ability);

  return (
    <div>
      {ability.name}
      {ability.shortDesc}
    </div>
  );
};

export default Ability;
