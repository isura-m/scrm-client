import * as React from "react";
import TextField from "@mui/material/TextField";

interface CommentBoxProps {
  label: string;
  setState?: (state: any) => void;
}

export default function CommentBox(props: CommentBoxProps) {
  return (
    <TextField
      onChange={(e) => {
        if (props.setState) {
          props.setState(e.target.value);
        }
      }}
      id="outlined-textarea"
      label={props.label}
      multiline
      rows={4}
      sx={{ m: 1, width: 200 }}
    />
  );
}
