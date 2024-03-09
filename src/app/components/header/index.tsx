"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  AppBar,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import ModeSwitcher from "./mode-switcher";
import Logo from "app/components/logo";

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
    router.push(value);
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
