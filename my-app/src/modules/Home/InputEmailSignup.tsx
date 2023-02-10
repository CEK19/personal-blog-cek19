import { Button, Stack, TextField } from "@mui/material";
import { COLOR } from "@/src/const";
import React from "react";

type Props = {};

const LABEL: string = "Enter your email here";

export const InputEmailSignUp = (props: Props) => {
  return (
    <React.Fragment>
      <Stack direction="row" spacing={2}>
        <TextField
          id="outlined-basic"
          label={LABEL}
          variant="outlined"
          fullWidth
        />
        <Button
          variant="text"
          sx={{
            bgcolor: COLOR.BLUE,
            color: COLOR.WHITE,
            paddingY: "0.7rem",
            paddingX: "1.2rem",
            textTransform:"none"            
          }}
        >
          Subscribe
        </Button>
      </Stack>
    </React.Fragment>
  );
};
