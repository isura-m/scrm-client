import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function StarRating() {
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <Box
      sx={{
        "& > legend": { m: 1, mt: 2 },
      }}
    >
      <Typography component="legend">How Satisfied?</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        sx={{ m: 1 }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
