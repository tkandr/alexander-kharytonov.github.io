"use client";

import { Sora } from "next/font/google";
import { createContext, useContext, useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";

const sora = Sora({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const ThemeContext = createContext({ mode: "", toggleTheme: () => {} });

export const useThemeContext = () => useContext(ThemeContext);

export const THEME_MODE: { LIGHT: PaletteMode; DARK: PaletteMode } = {
  LIGHT: "light",
  DARK: "dark",
};

function getDesignTokens(mode: PaletteMode): ThemeOptions {
  return {
    palette:
      mode === THEME_MODE.DARK
        ? {
            mode,
            primary: { main: "#FFDE68", contrastText: "#21262F" },
            secondary: { main: "#5EC07F" },
            section: { main: "#1A1C21" },
            footer: { main: "#2D333F" },
            background: { paper: "#21262F", default: "#21262F" },
            text: { primary: "#FFFCF5" },
          }
        : {
            mode,
            primary: { main: "#FFDE68", contrastText: "#21262F" },
            secondary: { main: "#5EC07F" },
            section: { main: "#EBE6D7" },
            footer: { main: "#EBE6D7" },
            background: { paper: "#FFFCF5", default: "#FFFCF5" },
            text: { primary: "#21262F" },
          },
    typography: {
      fontFamily: sora.style.fontFamily,
    },
    shape: {
      borderRadius: 40,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: () => ({
            textTransform: "none",
          }),
        },
      },
    },
  };
}

export function ThemeProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  const [mode, updateMode] = useState<PaletteMode>(THEME_MODE.DARK);

  const value = useMemo(
    () => ({
      mode,
      toggleTheme: () => {
        updateMode((prevMode) =>
          prevMode === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT
        );
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
