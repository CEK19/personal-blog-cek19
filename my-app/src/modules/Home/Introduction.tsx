import React from "react";
import { Box, Divider, Stack } from "@mui/material";
import Image from "next/image";
import LearningCodingImage from "./assets/learn-coding 1.png";
import { COLOR, COMMON_LAYOUT_PADDING, FONT_SIZE } from "@/src/const";
import { InputEmailSignUp } from "./InputEmailSignup";

type Props = {};

export const Introduction = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // columnGap: "7.25rem",
        // paddingY:"10.2rem",
        paddingY: "6.4rem",
        paddingX: COMMON_LAYOUT_PADDING,
        bgcolor: COLOR.LIGHT_GREY_1,
        boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
      }}
    >
      <Stack spacing={3}>
        <div
          style={{
            fontSize: FONT_SIZE.HEADING_1,
          }}
        >
          Hi, I’m Nhan{"\n"}Backend Dev
        </div>
        <div>
          On this blog I share tips and tricks, frameworks, projects, tutorials,
          etc. Make sure you subscribe to get the latest updates
        </div>
        <InputEmailSignUp />
      </Stack>
      <Image src={LearningCodingImage} alt="image-learn-coding" width={470} />
    </Box>
  );
};
