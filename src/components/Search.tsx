import { Search as SearchIcon } from "@mui/icons-material";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import { SearchResult } from "./SearchResult";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  height: 100%;
  grid-gap: 20px;
`;

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
    <Wrapper>
      <TextField
        hiddenLabel
        variant="filled"
        size="small"
        onChange={handleChange("search")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <SearchResult pokemonName={values.search} />
    </Wrapper>
  );
};
