import Box from "@mui/material/Box";
import React from "react";
import Card from "./Card";

export const CardCollection = () => {
  let pokemonList: number[] = [];
  while (pokemonList.length < 4) {
    let r = Math.floor(Math.random() * 898) + 1;
    if (pokemonList.indexOf(r) === -1) pokemonList.push(r);
  }

  return (
    <Box sx={{ display: "flex" }}>
      {pokemonList.map((pokemonId: number) => (
        <Card pokemonId={pokemonId} key={pokemonId} />
      ))}
    </Box>
  );
};
