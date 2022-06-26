import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface BasicButtonsProps {
  label: string;
  captureClick: () => void;
}

export default function BasicButtons(props: any) {
  const handleClick = () => {
    props.captureClick();
  };
  return (
    <Stack spacing={10} direction="row">
      <Button onClick={handleClick} sx={{ m: 1 }} variant="contained">
        {props.label}
      </Button>
    </Stack>
  );
}
