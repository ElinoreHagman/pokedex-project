import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import * as React from "react";
import styled from "styled-components";

const Menu = styled(BottomNavigation)`
  && {
    position: sticky;
    z-index: 3;
  }
`;

type Props = {
  pageIndex: number;
  setPageIndex: (pageIndex: number) => void;
};

export const Navigation = ({ pageIndex, setPageIndex }: Props) => {
  const [value, setValue] = React.useState(0);

  return (
    <Menu
      showLabels
      value={value}
      onChange={(event, newValue: number) => {
        setValue(newValue);
        setPageIndex(newValue);
      }}
      sx={{ position: "sticky", bottom: 0, width: "100%" }}
    >
      <BottomNavigationAction label="Deck" icon={<CatchingPokemonIcon />} />
      <BottomNavigationAction label="Search" icon={<ManageSearchIcon />} />
    </Menu>
  );
};
