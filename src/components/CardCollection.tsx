import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { CardDetails } from "./CardDetails";

const GridWrapper = styled(Grid)`
  position: relative;
  justify-content: center;
`;

interface PokemonListProp {
  pokemonList: number[];
}

export const CardCollection = ({ pokemonList }: PokemonListProp) => {
  const [open, setOpen] = React.useState(false);
  const [activePokemon, setActivePokemon] = React.useState(0);

  const handleOpen = function (pokemonId: number) {
    setOpen(true);
    setActivePokemon(pokemonId);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
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
