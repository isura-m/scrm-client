import * as React from "react";
import TextField from "@mui/material/TextField";

export default function TextBox(props: any) {
  return (
    <TextField
      onChange={(e) => {
        props.setState(e.target.value);
      }}
      id="outlined-textarea"
      label={props.label}
      multiline
      sx={{ m: 1, width: 200 }}
    />
  );
}

// import * as React from "react";
// import TextField from "@mui/material/TextField";

// export default function TextBox(props: any) {
//   return (
//     <TextField
//       onChange={(e) => {
//         props.change(e.target.value);
//       }}
//       id="outlined-textarea"
//       label={props.label}
//       multiline
//       sx={{ m: 1, width: 200 }}
//     />
//   );
// }
