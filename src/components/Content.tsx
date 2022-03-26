import styled from "styled-components";
import { CardCollection } from "./CardCollection";
import { Search } from "./Search";

const Wrapper = styled.div`
  width: 1000px;
  flex: auto;
  margin: auto;
  padding: 20px 5px;
  z-index: 2;
`;

type Props = {
  pageIndex: number;
};

const Content = ({ pageIndex }: Props) => {
  return <Wrapper>{pageIndex === 0 ? <CardCollection /> : <Search />}</Wrapper>;
};

export default Content;
