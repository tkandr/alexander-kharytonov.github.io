import { Palette, PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    quest: Palette["primary"];
  }

  interface PaletteOptions {
    quest: PaletteOptions["primary"];
  }

  interface PaletteOptions {
    footer: PaletteColorOptions;
    section: PaletteColorOptions;
    quest: PaletteColorOptions;
  }
}
