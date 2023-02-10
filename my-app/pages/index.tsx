import { LayoutCommonWrapper } from "@/src/common/LayoutCommonWrapper";
import { Navbar } from "@/src/common/Navbar";
import { BranchLogo } from "@/src/icons/BranchLogo";
import { BodyHome } from "@/src/modules";
import { Box, Container } from "@mui/material";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <React.Fragment>
        <LayoutCommonWrapper>
            <BodyHome/>
        </LayoutCommonWrapper>
    </React.Fragment>
  );
};

export default Home;
