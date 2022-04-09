import { Alert, Fade, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { CardDetails } from "./CardDetails";

const GridWrapper = styled(Grid)`
  && {
    position: relative;
    justify-content: center;
  }
`;

const AlertInfo = styled(Alert)`
  && {
    position: fixed;
    bottom: 52px;
    z-index: 10;
    left: 50%;
    min-width: 300px;
    transform: translate(-50%);
    justify-content: center;
  }
`;

interface PokemonListProp {
  pokemonList: number[];
}

export const CardCollection = ({ pokemonList }: PokemonListProp) => {
  const [open, setOpen] = React.useState(false);
  const [fade, setFade] = React.useState(false);
  const [activePokemon, setActivePokemon] = React.useState(0);
  const [bannerOpen, setBannerOpen] = React.useState(false);

  const handleOpen = function (pokemonId: number) {
    setOpen(true);
    setActivePokemon(pokemonId);
  };

  const handleClose = () => {
    setOpen(false);
    setBannerOpen(true);
    setFade(true);
    setTimeout(function () {
      setFade(false);
    }, 5000);
  };

  return (
    <>
      {bannerOpen && (
        <Fade in={fade} timeout={2000}>
          <AlertInfo variant="filled" severity="info">
            Updated your Pokémon deck!
          </AlertInfo>
        </Fade>
      )}
      <CardDetails
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        activePokemon={activePokemon}
      />
      <GridWrapper
        container
        rowSpacing={2}
        columnSpacing={{ xs: 0, sm: 0, md: 2 }}
      >
        {pokemonList.map((pokemonId: number) => (
          <Grid item xs={6} sm={4} md={3} key={pokemonId}>
            <div onClick={() => handleOpen(pokemonId)}>
              <Card pokemonId={pokemonId} />
            </div>
          </Grid>
        ))}
      </GridWrapper>
    </>
  );
};
