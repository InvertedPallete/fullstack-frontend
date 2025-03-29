import React from "react";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";

const Filters = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        alignItems: "center",
        justifyContent: isMobile ? "center" : "flex-start",
        marginBottom: 2,
      }}
    >
      <Button variant="contained" sx={{ flex: isMobile ? "1 1 100%" : "unset", minWidth: "120px" }}>
        All
      </Button>
      <Button variant="outlined" sx={{ flex: isMobile ? "1 1 100%" : "unset", minWidth: "120px" }}>
        Pre Sarfaesi
      </Button>
      <Button variant="outlined" sx={{ flex: isMobile ? "1 1 100%" : "unset", minWidth: "120px" }}>
        NPA
      </Button>
      <Button variant="outlined" sx={{ flex: isMobile ? "1 1 100%" : "unset", minWidth: "120px" }}>
        13(2) Responses
      </Button>
      <Button variant="outlined" sx={{ flex: isMobile ? "1 1 100%" : "unset", minWidth: "120px" }}>
        Symbolic Possession
      </Button>
      <Button variant="outlined" sx={{ flex: isMobile ? "1 1 100%" : "unset", minWidth: "120px" }}>
        DM Order
      </Button>
      <Button variant="outlined" sx={{ flex: isMobile ? "1 1 100%" : "unset", minWidth: "120px" }}>
        Physical Possessions
      </Button>
      <Button variant="outlined" sx={{ flex: isMobile ? "1 1 100%" : "unset", minWidth: "120px" }}>
        Auctions
      </Button>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search Loan Number"
        sx={{ flex: isMobile ? "1 1 100%" : "unset", minWidth: "250px" }}
      />
      <Button variant="contained" sx={{ flex: isMobile ? "1 1 100%" : "unset", minWidth: "120px" }}>
        More Filters
      </Button>
    </Box>
  );
};

export default Filters;
