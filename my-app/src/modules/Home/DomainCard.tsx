import { FONT_SIZE } from "@/src/const";
import { ReactJSLogo } from "@/src/icons/ReactJSLogo";
import { Box, Card, CardMedia } from "@mui/material";
import React from "react";

type Props = {
  image: React.ReactNode;
  text: string;
};

export const DomainCard = (props: Props) => {
  return (
    <React.Fragment>
      <Card
        variant="outlined"
        sx={{
          width: "13.75rem",
          borderRadius: "8px",
          filter: "drop-shadow(4px 6px 13px rgba(215, 215, 215, 0.25))",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent:"left",
            alignItems: "left",
            paddingLeft: "1.875rem",
            paddingTop: "4.125rem",
            paddingBottom: "6rem",
            rowGap: "1.875rem",
          }}
        >
          <CardMedia>{props.image}</CardMedia>
          <div
            style={{
              fontSize: FONT_SIZE.SUB_HEADING_1,
              fontWeight: "700",
            }}
          >
            {props.text}
          </div>
        </Box>
      </Card>
    </React.Fragment>
  );
};
