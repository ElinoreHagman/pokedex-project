import { useQuery } from "@apollo/client";
import { GET_POKEMON_BY_NUMBER } from "../GraphQL/Queries/PokemonQueries";
import {
  GetPokemonByDexNumberQuery,
  GetPokemonByDexNumberQueryVariables,
  TypesEnum,
} from "../GraphQL/codegen-types";
import styled from "styled-components";
import getTypeBackground from "../Functions/GetTypeBackground";
import Ability from "./Ability";
import TypeMatchup from "./TypeMatchup";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { Box } from "@mui/system";

interface CardBackground {
  back?: boolean;
}

const CardHolder = styled.div<CardBackground>`
  cursor: pointer;
  position: relative;
  width: ${(props) => (props.back ? "225px" : "215px")};
  height: ${(props) => (props.back ? "310px" : "300px")};
  background: #ffffff;
  border-radius: 10px;
  margin: 5px;
  border: ${(props) => (props.back ? "none" : "5px solid #ffcb05")};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: black;
  background: ${(props) =>
    props.back ? "url('Assets/pokemonCard_back.png')" : "white"};
  background-size: cover;
`;

const Header = styled.div`
  position: relative;
  padding: 3px 0 1px 0;
  display: flex;
  margin: 0 5px 0 45px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 16px;
  color: black;
`;

const Hp = styled.div`
  width: fit-content;
  font-size: 12px;
  font-weight: bold;
`;

interface Background {
  background: string;
}

const ImageWrapper = styled.div<Background>`
  position: relative;
  margin: 2px 5px 5px 5px;
  height: 80px;
  box-sizing: border-box;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: top;
  padding: 50px;
  border: 2px solid #ffcb05;
`;

const Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin: 5px;
  padding: 1px 5px;
  margin-top: -3px;
  font-size: 10px;
  background: #e3e3e3;
  color: black;
`;

const Description = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
  color: black;
  font-size: 10px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
  }
`;

const Sprite = styled.img`
  max-height: 90%;
  border-radius: 3px;
  padding: 5px;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PreevolutionSprite = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  background: #999999;
  left: 0;
  top: -22px;
  margin: 0px;
  overflow: hidden;
  border: 2px solid #ffcb05;
  z-index: 1;
  img {
    width: 20px;
  }
`;

interface CardProps {
  pokemonId: number;
}

const Card = ({ pokemonId }: CardProps) => {
  const { loading, data } = useQuery<
    GetPokemonByDexNumberQuery,
    GetPokemonByDexNumberQueryVariables
  >(GET_POKEMON_BY_NUMBER, {
    variables: { number: pokemonId },
  });
  const [isFlipped, toggleFlipped] = useState(false);

  if (loading) return null;
  const pokemon = data?.getPokemonByDexNumber!;

  const types: TypesEnum[] = pokemon.types.map(
    (x: string) => x.toLowerCase() as TypesEnum
  );

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Box>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardHolder back onClick={() => toggleFlipped(true)}></CardHolder>
        <CardHolder onClick={() => toggleFlipped(false)}>
          <Header>
            <Title>{capitalizeFirstLetter(pokemon.species!)}</Title>
            <Hp>{pokemon.baseStats.hp} HP</Hp>
          </Header>
          <ImageWrapper background={getTypeBackground(pokemon.types[0]!)}>
            <Sprite alt={pokemon.species} src={pokemon.sprite} />
            {pokemon.preevolutions && (
              <div>
                <PreevolutionSprite>
                  <img
                    alt={
                      pokemon.preevolutions?.at(pokemon.preevolutions?.length!)
                        ?.species
                    }
                    src={pokemon.preevolutions?.at(0)?.sprite}
                  />
                </PreevolutionSprite>
              </div>
            )}
          </ImageWrapper>
          <Banner>
            <span>no. {pokemon.num}</span>
            <span>{pokemon.height}m</span>
            <span>{pokemon.weight}kg</span>
          </Banner>
          <Description>
            <Ability abilityName={pokemon.abilities.first}></Ability>
            {pokemon.abilities.second && (
              <Ability abilityName={pokemon.abilities.second!}></Ability>
            )}
          </Description>
          <TypeMatchup types={types} />
        </CardHolder>
      </ReactCardFlip>
    </Box>
  );
};

export default Card;
