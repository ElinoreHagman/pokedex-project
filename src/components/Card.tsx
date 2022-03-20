import { Avatar, AvatarGroup, Card as MuiCard, Chip } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_BY_NUMBER } from "../GraphQL/Queries/PokemonQueries";
import {
  GetPokemonByDexNumberQuery,
  GetPokemonByDexNumberQueryVariables,
  PokemonBasicInfoFragmentFragment,
} from "../GraphQL/codegen-types";
import getTypeColor from "../Functions/GetTypeColor";
import styled from "styled-components";
import getTypeBackground from "../Functions/GetTypeBackground";
import Ability from "./Ability";

const CardHolder = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  background: #ffffff;
  border-radius: 10px;
  margin: 5px;
  border: 5px solid #ffcb05;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: black;
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
  margin: 5px;
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
  height: 100%;
  background: white;
  color: black;
  font-size: 10px;
  margin: 5px;
  p {
    margin: 0;
  }
`;

const Sprite = styled.img`
  max-width: 80px;
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

  if (loading) return null;
  const pokemon = data?.getPokemonByDexNumber!;

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  console.log(pokemon);

  return (
    <CardHolder>
      <Header>
        <Title>{capitalizeFirstLetter(pokemon.species!)}</Title>
        <Hp>{pokemon.baseStats.hp} HP</Hp>
      </Header>
      <ImageWrapper background={getTypeBackground(pokemon.types[0]!)}>
        <Sprite src={pokemon.sprite} />
        {pokemon.preevolutions && (
          <PreevolutionSprite>
            <img src={pokemon.preevolutions?.at(0)?.sprite} />
          </PreevolutionSprite>
        )}
      </ImageWrapper>
      <Banner>
        <span>NO. {pokemon.num}</span>
        <span>{pokemon.height}cm</span>
        <span>{pokemon.weight}kg</span>
      </Banner>
      <Description>
        <Ability abilityName={pokemon.abilities.first}></Ability>
      </Description>
    </CardHolder>
  );
};

export default Card;
