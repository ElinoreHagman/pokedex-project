import { useQuery } from "@apollo/client";
import { Avatar, AvatarGroup } from "@mui/material";
import styled from "styled-components";
import getTypeIcon from "../Functions/GetTypeIcon";
import {
  GetTypeMatchupQuery,
  GetTypeMatchupQueryVariables,
  TypesEnum,
} from "../GraphQL/codegen-types";
import { GET_TYPE_MATCHUP } from "../GraphQL/Queries/TypeMatchupQueries";

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-around;
`;

const Grouping = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 10px;
    margin: 0 0 5px 0;
  }
`;

interface TypesProps {
  types: TypesEnum[];
}

const TypeMatchup = (types: TypesProps) => {
  const { loading, data } = useQuery<
    GetTypeMatchupQuery,
    GetTypeMatchupQueryVariables
  >(GET_TYPE_MATCHUP, {
    variables: { types: types.types },
  });

  if (loading) return null;

  const defenseAgainst = data?.getTypeMatchup.defending;
  return (
    <Wrapper>
      <Grouping>
        <h3>Weakness</h3>
        <AvatarGroup
          sx={{ justifyContent: "center" }}
          max={2 + defenseAgainst?.effectiveTypes.length!}
        >
          {defenseAgainst?.effectiveTypes.map((type: string) => {
            return (
              <Avatar
                sx={{ width: 15, height: 15 }}
                alt={type}
                key={type}
                src={getTypeIcon(type)}
              />
            );
          })}
        </AvatarGroup>
      </Grouping>
      <Grouping>
        <h3>Resistance</h3>
        <AvatarGroup
          sx={{ justifyContent: "center" }}
          max={2 + defenseAgainst?.resistedTypes.length!}
        >
          {defenseAgainst?.resistedTypes.map((type: string) => {
            return (
              <Avatar
                sx={{ width: 15, height: 15 }}
                alt={type}
                key={type}
                src={getTypeIcon(type)}
              />
            );
          })}
        </AvatarGroup>
      </Grouping>
    </Wrapper>
  );
};

export default TypeMatchup;
