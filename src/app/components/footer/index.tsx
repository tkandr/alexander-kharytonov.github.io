"use client";

import _ from "lodash";
import moment from "moment";
import { Box, Container, Grid, Typography } from "@mui/material";
import Logo from "app/components/logo";
import Navigation from "./navigation";
import SocialMedia from "./social-media";

export default function Footer(): React.ReactElement {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "footer.main", marginTop: "auto" }}
    >
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid container item spacing={4}>
            <Grid item xs={12} sm={4} alignSelf="center">
              <Logo />
              <SocialMedia />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Navigation />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={12}>
              <Typography variant="body2">
                &copy; {moment().year()} LaunCHR
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
