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
import { Avatar } from "@mui/material";
import getTypeIcon from "../Functions/GetTypeIcon";
import getTexture from "../Functions/GetTexture";

interface CardBackground {
  back?: boolean;
  type?: TypeTexture;
}

interface TypeTexture {
  image: string;
  blackText: boolean;
}

const CardHolder = styled.div<CardBackground>`
  cursor: pointer;
  position: relative;
  margin: auto;
  width: 90%;
  height: calc(100vw * 0.55);
  max-height: 300px;
  max-width: 230px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: ${(props) => (props.type?.blackText ? "#000000" : "#ffffff")};
  background: ${(props) =>
    props.back
      ? "url('Assets/pokemonCard_back.png')"
      : `url(${props.type?.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: 100% 100%;
`;

const Border = styled.div`
  height: 100%;
  border: 5px solid #ffde00;
`;

const Header = styled.div`
  position: relative;
  padding: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 70%;
`;

const Hp = styled.div`
  width: fit-content;
  font-size: 70%;
  font-weight: 700;
  display: flex;
  align-items: baseline;
  padding-right: 2px;
  h3 {
    margin: 0;
    font-size: 50%;
    font-weight: 300;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const TypeGroup = styled.div`
  display: flex;
`;

interface Background {
  background: string;
}

const ImageWrapper = styled.div<Background>`
  position: relative;
  margin: 1px 5px 0px 5px;
  height: 35%;
  box-sizing: border-box;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: top;
  padding: 5px;
  border: 2px solid #b3a125;
  align-items: center;
  border-radius: 30% 2px 2px 2px;
`;

const Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 5px;
  padding: 1px 2px;
  font-size: min(2vw, 10px);
  border-bottom: 1px solid #ffde00;
  align-items: center;
`;

const Description = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 5px 5px;
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

const PreevolutionSprite = styled.div<Background>`
  width: min(5vw, 30px);
  height: min(5vw, 30px);
  border-radius: 50%;
  position: absolute;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: top;
  left: 0px;
  top: -2px;
  margin: 0px;
  overflow: hidden;
  border: 1px solid #b3a125;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: min(5vw, 30px);
    max-height: 30px;
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

  if (loading) return null;
  const pokemon = data?.getPokemonByDexNumber!;

  const types: TypesEnum[] = pokemon.types.map(
    (x: string) => x.toLowerCase() as TypesEnum
  );

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <CardHolder
      type={getTexture(pokemon!.types[0])}
      /*       onClick={() => setSelectedPokemon(data)}
       */
    >
      <Border>
        <Header>
          <Title>{capitalizeFirstLetter(pokemon!.species!)}</Title>
          <Right>
            <Hp>
              <h3>HP</h3>
              {pokemon!.baseStats.hp}
            </Hp>
          </Right>
        </Header>
        <ImageWrapper background={getTypeBackground(pokemon!.types[0]!)}>
          <Sprite alt={pokemon!.species} src={pokemon!.sprite} />
          {pokemon!.preevolutions && (
            <PreevolutionSprite
              background={getTypeBackground(
                pokemon!.preevolutions[0].types[0]!
              )}
            >
              <img
                alt={
                  pokemon!.preevolutions?.at(pokemon!.preevolutions?.length!)
                    ?.species
                }
                src={pokemon!.preevolutions?.at(0)?.sprite}
              />
            </PreevolutionSprite>
          )}
        </ImageWrapper>
        <Banner>
          <span>no. {pokemon!.num}</span>
          <span>{pokemon!.height}m</span>
          <span>{pokemon!.weight}kg</span>
          <TypeGroup>
            {pokemon!.types.map((type: string) => {
              return (
                <Avatar
                  sx={{ width: 9, height: 9 }}
                  alt={type}
                  key={type}
                  src={getTypeIcon(type)}
                />
              );
            })}
          </TypeGroup>
        </Banner>
        <Description>
          <Ability abilityName={pokemon!.abilities.first}></Ability>
          {pokemon!.abilities.second && (
            <Ability abilityName={pokemon!.abilities.second!}></Ability>
          )}
        </Description>
      </Border>
    </CardHolder>
  );
};

export default Card;