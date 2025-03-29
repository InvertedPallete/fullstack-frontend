import React from "react";
import { AppBar, Toolbar, Typography, Box, Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: "#fff", color: "#333", boxShadow: "none", borderBottom: "1px solid #E0E0E0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">Portfolio</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar sx={{ bgcolor: "#1976D2" }}>T</Avatar>
          <Typography variant="body2">Tushar</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
