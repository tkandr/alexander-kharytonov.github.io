import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    footer: PaletteColorOptions;
    section: PaletteColorOptions;
  }
}
