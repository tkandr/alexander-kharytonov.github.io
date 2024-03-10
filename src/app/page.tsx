"use client";

import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import DailyPaper from "app/components/daily-paper";
import ProgressPaper from "app/components/progress-paper";

const Item = styled(Paper)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(2, 2.5),
  borderRadius: 12,
  height: "100%",

  ".preview-joystick": {
    maxWidth: "100%",
    height: "auto",
  },

  ".preview": {
    position: "absolute",
    top: -16,
    right: 22,
  },
}));

export default function HomePage() {
  return (
    <>
      <Box component="section" sx={{ backgroundColor: "section.main" }}>
        <Container sx={{ py: { xs: 2, md: 6 } }}>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} sm={5} md={6}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "stretch",
                  flexDirection: "column",
                  padding: { xs: 2, md: 4 },
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ marginTop: { xs: -4, md: -8 } }}
                >
                  <Image
                    src={`/images/joystick.png`}
                    width={436}
                    height={202}
                    alt="Complete quests to earn XP and compete!"
                    priority={true}
                    className="preview-joystick"
                  />
                </Box>
                <Stack
                  direction="column"
                  spacing={2}
                  sx={{ marginTop: "auto" }}
                >
                  <Typography variant="h6" sx={{ position: "relative" }}>
                    Complete quests to earn XP and compete!
                  </Typography>
                  <div>
                    <Button variant="contained">View leaderboard</Button>
                  </div>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={12} sm={7} md={6}>
              <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="stretch"
                    spacing={{ xs: 2, md: 4 }}
                  >
                    <Grid item xs={12} sm={6}>
                      <DailyPaper
                        title="Daily"
                        subTitle="Level up to unlock exclusive quests."
                        image="partners"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <DailyPaper
                        title="Joy Streak"
                        subTitle="Level up to unlock exclusive quests."
                        image="box"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <ProgressPaper
                    userName="alexander.kharytonov"
                    points={755}
                    totalPoints={1531}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container sx={{ py: 2 }}>
        <Typography>Quests</Typography>
      </Container>
    </>
  );
}
