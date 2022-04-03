import { useQuery } from "@apollo/client";
import { Avatar, Tooltip } from "@mui/material";
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
  width: 100%;
`;

const Grouping = styled.div`
  display: flex;
  width: 50%;
  padding: 0 10px;
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  h3 {
    font-size: min(4vw, 13px);
    margin: 0 0 5px 0;
    text-align: center;
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
        <div>
          {defenseAgainst?.effectiveTypes.map((type: string) => {
            return (
              <Tooltip title={`Weak against ${type}`} key={type}>
                <Avatar
                  sx={{ width: "min(5vw, 20px)", height: "min(5vw, 20px)" }}
                  alt={type}
                  src={getTypeIcon(type)}
                />
              </Tooltip>
            );
          })}
        </div>
      </Grouping>
      <Grouping>
        <h3>Resistance</h3>
        <div>
          {defenseAgainst?.resistedTypes.map((type: string) => {
            return (
              <Tooltip title={`Resistant against ${type}`} key={type}>
                <Avatar
                  sx={{ width: "min(5vw, 20px)", height: "min(5vw, 20px)" }}
                  alt={type}
                  src={getTypeIcon(type)}
                />
              </Tooltip>
            );
          })}
        </div>
      </Grouping>
    </Wrapper>
  );
};

export default TypeMatchup;
