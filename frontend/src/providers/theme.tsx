"use client";

import React from "react";
import { ThemeProvider as MuiTP } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "@/themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiTP theme={theme}>
      <CssBaseline />
      {children}
    </MuiTP>
  );
};

export default ThemeProvider;