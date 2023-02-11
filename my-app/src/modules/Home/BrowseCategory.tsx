import { TitleSectionWithLine } from "@/src/common";
import { SeeAllCategoryWithArrow } from "@/src/common/SeeAllCategoryWithArrow";
import { COLOR, COMMON_LAYOUT_PADDING } from "@/src/const";
import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { DomainCard } from "./DomainCard";
import { ReactJSLogo } from "@/src/icons/ReactJSLogo";

type Props = {};

export const BrowseCategory = (props: Props) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: COLOR.LIGHT_GREY_1,
          paddingTop: "4.125rem",
          paddingBottom: "4.125rem",
          paddingX: COMMON_LAYOUT_PADDING,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <TitleSectionWithLine text="Browse the Category" />
          <SeeAllCategoryWithArrow text="See all Category" />
        </Stack>

        <Grid
          container
          spacing={2}
          sx={{
            paddingTop: "3.125rem",
          }}
        >
          <Grid item>
            <DomainCard text="ReactJS" image={<ReactJSLogo />} />
          </Grid>
          <Grid item>
            <DomainCard text="ReactJS" image={<ReactJSLogo />} />
          </Grid>
          <Grid item>
            <DomainCard text="ReactJS" image={<ReactJSLogo />} />
          </Grid>
          <Grid item>
            <DomainCard text="ReactJS" image={<ReactJSLogo />} />
          </Grid>
          <Grid item>
            <DomainCard text="ReactJS" image={<ReactJSLogo />} />
          </Grid>
          <Grid item>
            <DomainCard text="ReactJS" image={<ReactJSLogo />} />
          </Grid>
          <Grid item>
            <DomainCard text="ReactJS" image={<ReactJSLogo />} />
          </Grid>
          <Grid item>
            <DomainCard text="ReactJS" image={<ReactJSLogo />} />
          </Grid>                              
        </Grid>
      </Box>
    </React.Fragment>
  );
};
