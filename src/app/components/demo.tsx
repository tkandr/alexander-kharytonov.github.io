"use client";

import { Box, Container, Grid, Paper, Typography, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Demo(): React.ReactElement {
  return (
    <>
      <div style={{ backgroundColor: "#de2525" }}>
        <Grid container spacing={2} columns={16} zeroMinWidth>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </div>
      <Box sx={{ flexGrow: 1, backgroundColor: "#fefefe" }}>
        <Grid container spacing={2} columns={16} zeroMinWidth>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
