import { Divider } from "@mui/material";
import React from "react";
import { BrowseCategory } from "./BrowseCategory";
import { Introduction } from "./Introduction";
import { SeeAllCategoryWithArrow } from "@/src/common/SeeAllCategoryWithArrow";

type Props = {};

export const BodyHome = (props: Props) => {
  return (
    <React.Fragment>
        <Introduction/>
        <Divider/>
        <BrowseCategory/>        
    </React.Fragment>
  );
};
