import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { NavBarItem } from "./NavBarItem";
import { BranchLogo } from "../icons/BranchLogo";
import { SearchIcon } from "../icons/SearchIcon";
import { BuyMeCoffeeIcon } from "../icons/BuyMeCoffeeIcon";
import { COLOR } from "../const";
import { COMMON_LAYOUT_PADDING } from "../const";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: "100%",
          bgcolor: COLOR.WHITE,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: "1rem",
          paddingX: COMMON_LAYOUT_PADDING
        }}
      >
        <BranchLogo />
        <Stack direction="row" spacing={2}>
          <NavBarItem text="Home" special={false} />
          <NavBarItem text="Category" special={false} />
          <NavBarItem text="About Me" special={false} />
          <NavBarItem text="Search" icon={<SearchIcon />} special={false} />
          <NavBarItem
            text="Buy me a coffee"
            icon={<BuyMeCoffeeIcon />}
            special={true}
          />
        </Stack>
      </Box>
    </React.Fragment>
  );
};
