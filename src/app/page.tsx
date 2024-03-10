"use client";

import { Box, Container, Divider, Grid } from "@mui/material";
import CompleteQuestsPaper from "app/components/complete-quests-paper";
import DailyPaper from "app/components/daily-paper";
import ProgressPaper from "app/components/progress-paper";
import Quests from "app/components/quests";

export default function RootPage() {
  return (
    <>
      <Box component="section" sx={{ backgroundColor: "section.main" }}>
        <Container sx={{ py: { xs: 2, md: 6 } }}>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} sm={5} md={6} display="flex">
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
                    <Grid item xs={12} sm={6} display="flex">
                      <DailyPaper
                        title="Daily"
                        subTitle="Level up to unlock exclusive quests."
                        image="partners"
                        onClick={(event) => console.info(event)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} display="flex">
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
      <Container sx={{ py: 4 }}>
        <Quests
          title="LaunchJoy Quests"
          quests={[
            {
              title: "Creature",
              points: 120,
              stagesCount: 3,
              currentState: 0,
              image: "/images/quests/placeholder_6.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Creature",
              points: 466,
              stagesCount: 5,
              currentState: 3,
              image: "/images/quests/placeholder_7.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Creature",
              points: 245,
              stagesCount: 4,
              currentState: 2,
              image: "/images/quests/placeholder_8.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Creature",
              points: 890,
              stagesCount: 7,
              currentState: 1,
              image: "/images/quests/placeholder_8.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Creature",
              points: 340,
              stagesCount: 4,
              currentState: 3,
              image: "/images/quests/placeholder_1.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Creature",
              points: 120,
              stagesCount: 3,
              currentState: 0,
              image: "/images/quests/placeholder_10.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Creature",
              points: 466,
              stagesCount: 5,
              currentState: 3,
              image: "/images/quests/placeholder_11.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Creature",
              points: 245,
              stagesCount: 4,
              currentState: 2,
              image: "/images/quests/placeholder_12.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Creature",
              points: 890,
              stagesCount: 7,
              currentState: 1,
              image: "/images/quests/placeholder_4.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Creature",
              points: 340,
              stagesCount: 4,
              currentState: 3,
              image: "/images/quests/placeholder_5.jpg",
              onClick: (event) => console.info(event),
            },
          ]}
        />
        <Quests
          title="Streaks"
          quests={[
            {
              title: "Astronaut",
              points: 120,
              stagesCount: 3,
              currentState: 0,
              image: "/images/quests/placeholder_1.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Astronaut",
              points: 466,
              stagesCount: 5,
              currentState: 3,
              image: "/images/quests/placeholder_2.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Astronaut",
              points: 245,
              stagesCount: 4,
              currentState: 2,
              image: "/images/quests/placeholder_3.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Astronaut",
              points: 890,
              stagesCount: 7,
              currentState: 1,
              image: "/images/quests/placeholder_4.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Astronaut",
              points: 340,
              stagesCount: 4,
              currentState: 3,
              image: "/images/quests/placeholder_5.jpg",
              onClick: (event) => console.info(event),
            },
          ]}
        />
        <Quests
          title="Latest quests"
          quests={[
            {
              title: "Project name",
              points: 120,
              stagesCount: 3,
              currentState: 0,
              image: "/images/quests/placeholder_10.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Project name",
              points: 466,
              stagesCount: 5,
              currentState: 3,
              image: "/images/quests/placeholder_11.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Project name",
              points: 245,
              stagesCount: 4,
              currentState: 2,
              image: "/images/quests/placeholder_12.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Project name",
              points: 890,
              stagesCount: 7,
              currentState: 1,
              image: "/images/quests/placeholder_4.jpg",
              onClick: (event) => console.info(event),
            },
            {
              title: "Project name",
              points: 340,
              stagesCount: 4,
              currentState: 3,
              image: "/images/quests/placeholder_5.jpg",
              onClick: (event) => console.info(event),
            },
          ]}
        />
      </Container>
    </>
  );
}
