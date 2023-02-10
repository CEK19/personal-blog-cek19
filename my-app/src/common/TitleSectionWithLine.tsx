import { Box } from "@mui/material";
import React from "react";
import { COLOR, FONT_SIZE } from "../const";

type Props = {
  text: string;
};

export const TitleSectionWithLine = (props: Props) => {
  return (
    <React.Fragment>
      <Box        
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "0.625rem"
        }}
      >
        <div
          style={{
            fontSize: FONT_SIZE.SUB_HEADING_1,
            color: COLOR.BLACK,
            fontWeight: 700,
          }}
        >
          {props.text}
        </div>
        <div
          style={{
            width: "2.25rem",
            height: "2px",
            backgroundColor: COLOR.BLACK,
          }}
        ></div>
      </Box>
    </React.Fragment>
  );
};
