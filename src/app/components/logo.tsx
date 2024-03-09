"use client";

import Link from "next/link";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { useThemeContext } from "lib/providers/mui.providers";

export default function Logo(): React.ReactElement {
  const { mode } = useThemeContext();

  return (
    <Stack
      component={Link}
      direction="row"
      alignItems="center"
      href="/"
      title="LaunchJoy"
      color="inherit"
      sx={{ my: 2, textDecoration: "none" }}
    >
      <Image
        src={`/logo/logo.${mode}.svg`}
        width={42}
        height={56}
        alt="Picture of the author"
      />
      <Typography component="h2" variant="h4" sx={{ marginTop: 1 }}>
        LaunchJoy
      </Typography>
    </Stack>
  );
}
