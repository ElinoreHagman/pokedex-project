import styled from "styled-components";
import { store } from "../Redux/Index";
import { CardCollection } from "./CardCollection";
import { Search } from "./Search";

const Wrapper = styled.div`
  max-width: 1000px;
  min-width: 90%;
  flex: auto;
  margin: auto;
  padding: 20px 0px;
  z-index: 2;
`;

type Props = {
  pageIndex: number;
};

const Content = ({ pageIndex }: Props) => {
  return (
    <Wrapper>
      {pageIndex === 0 ? (
        <CardCollection pokemonList={store.getState().pokemons} />
      ) : (
        <Search />
      )}
    </Wrapper>
  );
};

export default Content;
