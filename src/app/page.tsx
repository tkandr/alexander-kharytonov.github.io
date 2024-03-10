"use client";

import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import CompleteQuestsPaper from "app/components/complete-quests-paper";
import DailyPaper from "app/components/daily-paper";
import ProgressPaper from "app/components/progress-paper";

export default function RootPage() {
  return (
    <>
      <Box component="section" sx={{ backgroundColor: "section.main" }}>
        <Container sx={{ py: { xs: 2, md: 6 } }}>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} sm={5} md={6}>
              <CompleteQuestsPaper onClick={(event) => console.info(event)} />
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
                        onClick={(event) => console.info(event)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <DailyPaper
                        title="Joy Streak"
                        subTitle="Level up to unlock exclusive quests."
                        image="box"
                        onClick={(event) => console.info(event)}
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
      <Divider />
      <Container sx={{ py: 2 }}>
        <Typography>Quests</Typography>
      </Container>
    </>
  );
}
