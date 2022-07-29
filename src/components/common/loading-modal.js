import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingModal = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        zIndex: 999,
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={100} />
    </Box>
  );
};

export default LoadingModal;
