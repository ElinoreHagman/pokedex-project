import { Grid } from "@mui/material";
import Card from "./Card";

export const CardCollection = () => {
  let pokemonList: number[] = [];
  while (pokemonList.length < 6) {
    let r = Math.floor(Math.random() * 898) + 1;
    if (pokemonList.indexOf(r) === -1) pokemonList.push(r);
  }

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 0, md: 2 }}>
      {pokemonList.map((pokemonId: number) => (
        <Grid item xs={6} sm={4} md={3} key={pokemonId}>
          <Card pokemonId={pokemonId} />
        </Grid>
      ))}
    </Grid>
  );
};
