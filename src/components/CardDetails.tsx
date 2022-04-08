import Card from "./Card";
import { Modal, SpeedDial, SpeedDialAction, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { store } from "../Redux/Index";
import SaveIcon from "@mui/icons-material/Save";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import pokemonExistsInDeck from "../Functions/PokemonExistsInDeck";

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

const Menu = styled(SpeedDial)`
  && button {
    background-color: #cc0000;
  }
`;

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

  const actions = [
    {
      icon: <SaveIcon sx={{ color: "white" }} />,
      name: "Save",
      tooltip: "Save to your deck",
    },
    {
      icon: <DeleteIcon sx={{ color: "white" }} />,
      name: "Remove",
      tooltip: "Remove from your deck",
    },
  ];

  function ShouldBeVisible(action: string) {
    if (action === "Save") {
      return !pokemonExistsInDeck(props.activePokemon);
    }
    if (action === "Remove") {
      return pokemonExistsInDeck(props.activePokemon);
    }
  }

  function HandleCard(action: string) {
    store.dispatch({
      type: action,
      pokemonId: props.activePokemon,
    });
    props.handleClose();
  }

  return (
    <Modal
      open={props.open}
      onClose={setOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card pokemonId={props.activePokemon} xl />
        <Menu
          direction="right"
          ariaLabel="Card menu"
          sx={{
            position: "absolute",
            width: "100%",
            bottom: -30,
            right: 0,
          }}
          icon={<MenuIcon />}
        >
          {actions.map(
            (action) =>
              ShouldBeVisible(action.name) && (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.tooltip}
                  onClick={() => HandleCard(action.name)}
                />
              )
          )}
        </Menu>
      </Box>
    </Modal>
  );
};
