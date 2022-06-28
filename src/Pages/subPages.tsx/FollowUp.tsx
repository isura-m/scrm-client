import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";

import ClientInfo from "../../components/customComponents/ClientInfo";
import FollowUpUpdate from "../../components/customComponents/FollowUpUpdate";
import ClientUpdates from "../../components/customComponents/ClientUpdates";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

interface FollowUpProps {
  id: string;
}

export default function FollowUp(props: FollowUpProps) {
  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/client/" + props.id)
      .then((response) => {
        const res = response.data;
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("at follow up level aaaaaaaaaaaaaaaaaaaaa", props.id);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item sx={{ boxShadow: 0 }}>
            <ClientInfo />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ textAlign: "center" }}>
            <h2>Updates</h2>
            <FollowUpUpdate />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ boxShadow: 0 }}>
            <ClientUpdates />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
