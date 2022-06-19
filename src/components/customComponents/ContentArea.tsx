import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import CreateClient from "../../Pages/subPages.tsx/CreateClient";
import FollowUp from "../../Pages/subPages.tsx/FollowUp";
import Calendar from "../muiComponents/Calendar";
import ProdList from "../muiComponents/ProdList";
import FollowUpList from "../../Pages/subPages.tsx/FollowUpList";
import MarkedClients from "../../Pages/subPages.tsx/MarkedClients";
import ClientList from "../../Pages/subPages.tsx/ClientList";
import UpcomingOrders from "../../Pages/subPages.tsx/UpcomingOrders";
import AdminTools from "../../Pages/subPages.tsx/AdminTools";
import SimpleBackdrop from "../muiComponents/SimpleBackdrop";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function ContentArea(props: any) {
  const clickedName = props.clickedItem;

  console.log(clickedName);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Item sx={{ boxShadow: 0 }}>
            {clickedName === "" && <h2>Welcome to Project CRM!</h2>}
            {clickedName === "Create Client" && (
              <CreateClient setPage={props.setNewPage} />
            )}
            {clickedName === "Follow Up" && <FollowUp />}
            {clickedName === "Follow Up List" && <FollowUpList />}
            {clickedName === "Marked Clients" && <MarkedClients />}
            {clickedName === "Client List" && <ClientList />}
            {clickedName === "Upcoming Orders" && <UpcomingOrders />}
            {clickedName === "Admin Tools" && <AdminTools />}
            {clickedName === "Logout" && <SimpleBackdrop />}
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ textAlign: "center" }}>
            <h2>Prod. Planner</h2>
            <Calendar />
            <h3>Scheduled Jobs</h3>

            <ProdList />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
