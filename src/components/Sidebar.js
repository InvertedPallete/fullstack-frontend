import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon, useMediaQuery } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isOpen}
      onClose={toggleSidebar}
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          background: "#F8F9FC",
          borderRight: "1px solid #E0E0E0",
        },
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
