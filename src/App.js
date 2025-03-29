import React, { useState } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import PortfolioTable from "./components/PortfolioTable";
import UploadDocument from "./components/UploadDocument";

const App = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile && (
        <IconButton onClick={() => setSidebarOpen(true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />

      <Box sx={{ flexGrow: 1, padding: isMobile ? 2 : 3 }}>
        <Navbar />
        <Filters />
        <PortfolioTable />
        <UploadDocument />
      </Box>
    </Box>
  );
};

export default App;
