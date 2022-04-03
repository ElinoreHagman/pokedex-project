import { createStore } from "redux";
import { PokemonReducer } from "./PokemonReducer";

export const store = createStore(PokemonReducer);
