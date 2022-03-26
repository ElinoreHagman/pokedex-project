import styled from "styled-components";

const Background = styled.div`
  background: #cc0000;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 10;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 0;
  padding: 5px;
  color: white;
  font-weight: 400;
  font-variant: all-small-caps;
`;

type Props = {
  pageIndex: number;
};

export const Header = ({ pageIndex }: Props) => {
  return (
    <Background>
      <Title>
        {pageIndex === 0 ? "Card collection" : "Search for Pokémon"}
      </Title>
    </Background>
  );
};
