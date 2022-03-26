import { Search as SearchIcon } from "@mui/icons-material";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React from "react";

interface State {
  search: string;
}

export const Search = () => {
  const [values, setValues] = React.useState<State>({
    search: "",
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
      <InputLabel>Search Pokémon</InputLabel>
      <FilledInput
        onChange={handleChange("search")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
