import { Box } from "@mui/material";
import React from "react";
import { FONT_SIZE } from "../const";
import { RightArrow } from "../icons/RightArrow";

type Props = {
  text: string;
};

export const SeeAllCategoryWithArrow = (props: Props) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          rowGap: "0.75rem",
          alignItems:"center",
        }}
      >
        <div
          style={{
            fontSize: FONT_SIZE.SUB_HEADING_2,
            fontWeight: "700",
          }}
        >
          {props.text}
        </div>
        <RightArrow size="small"/>
      </Box>
    </React.Fragment>
  );
};
