import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface StandardMenuProps {
  clickedItem: (clickedItem: string) => void;
}

const StandardMenu = (props: any) => {
  return (
    <>
      <List>
        {[
          "Create Client",
          "Client List",
          "Marked Clients",
          "Follow Up List",
          "Follow Up",
          "Upcoming Orders",
        ].map((text) => (
          <ListItem
            onClick={() => {
              props.clickedItem(text);
            }}
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default StandardMenu;
