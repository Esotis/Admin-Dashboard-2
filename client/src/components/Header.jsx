import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

function Header({ title, subtitle }) {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[200]}
        fontWeight="bold"
        sx={{ mb: "px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[200]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
