import { Button } from "@mui/material";
import React from "react";
import { COLOR } from "../const";

type Props = {
  special: boolean;
  icon?: React.ReactNode;
  text: string;
};

export const NavBarItem = (props: Props) => {
  return (
    <React.Fragment>
      <Button
        size="large"
        variant="text"
        startIcon={props.icon}
        sx={{
          color: props.special ? COLOR.WHITE : COLOR.BLACK,
          bgcolor: props.special ? COLOR.BLUE : COLOR.WHITE,
        }}
      >
        {props.text}
      </Button>
    </React.Fragment>
  );
};
