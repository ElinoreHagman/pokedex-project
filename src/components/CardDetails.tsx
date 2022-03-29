import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Card from "./Card";
import { GetPokemonByDexNumberQuery, Pokemon } from "../GraphQL/codegen-types";
import { Modal } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  aspectRatio: "4 / 6",
  width: "80%",
  maxHeight: "80%",
  bgcolor: "background.paper",
  outline: "none",
};

export interface SimpleDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  activePokemon: number;
}

export const CardDetails = (props: SimpleDialogProps) => {
  const setOpen = () => {
    props.setOpen(false);
  };

  return (
    <Modal
      open={props.open}
      onClose={setOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card pokemonId={props.activePokemon} xl />
      </Box>
    </Modal>
  );
};
