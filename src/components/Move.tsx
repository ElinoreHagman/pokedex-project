import { useQuery } from "@apollo/client";
import {
  GetFuzzyMoveNameQuery,
  GetFuzzyMoveNameQueryVariables,
} from "../GraphQL/codegen-types";
import { GET_MOVE_FUZZY_PARTIAL } from "../GraphQL/Queries/MoveQueries";

const Move = (moveName: string) => {
  const { loading, data } = useQuery<
    GetFuzzyMoveNameQuery,
    GetFuzzyMoveNameQueryVariables
  >(GET_MOVE_FUZZY_PARTIAL, {
    variables: { move: moveName },
  });
};
