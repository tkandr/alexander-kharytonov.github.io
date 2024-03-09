import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import ModeSwitcher from "./mode-switcher";

export default function Header(): React.ReactElement {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Container>
        <Toolbar disableGutters>
          <Typography component="span" variant="h6" sx={{ flexGrow: 1 }}>
            LaunchJoy
          </Typography>
          <ModeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
