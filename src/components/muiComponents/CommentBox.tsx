import * as React from "react";
import TextField from "@mui/material/TextField";

export default function CommentBox(props: any) {
  return (
    <TextField
      onChange={(e) => {
        props.setState(e.target.value);
      }}
      id="outlined-textarea"
      label={props.label}
      multiline
      rows={4}
      sx={{ m: 1, width: 200 }}
    />
  );
}
