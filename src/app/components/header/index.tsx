"use client";

import { usePathname, useRouter } from "next/navigation";
import { AppBar, Container, Tab, Tabs, Toolbar, styled } from "@mui/material";
import Logo from "app/components/logo";
import ModeSwitcher from "./mode-switcher";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-flexContainer": {
    height: "100%",
  },

  "& .MuiButtonBase-root": {
    textTransform: "none",
  },
}));

export default function Header(): React.ReactElement {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, value: string) => {
    event.preventDefault();

    router.push(value, { scroll: false });
  };

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Container>
        <Toolbar disableGutters>
          <Logo />
          <StyledTabs
            value={pathname}
            onChange={handleChange}
            sx={{
              mx: "auto",
              alignSelf: "stretch",
              display: { xs: "none", md: "flex" },
            }}
            textColor="inherit"
          >
            <Tab label="Main" disabled />
            <Tab label="Quests" value="/" />
            <Tab label="Launch Pad" disabled />
            <Tab label="About" value="/about" />
          </StyledTabs>
          <ModeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
