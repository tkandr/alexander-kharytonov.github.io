import { CardPropsColorOverrides } from "@mui/material";

declare module "@mui/material/Button" {
  interface CardPropsColorOverrides {
    section: true;
    footer: true;
    quest: true;
  }
}
