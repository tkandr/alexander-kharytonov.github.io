import _ from "lodash";
import { Container, Stack, Typography } from "@mui/material";
import Quest from "./quest";

export default function Quests({
  title,
}: {
  title: string;
}): React.ReactElement {
  return (
    <Container sx={{ py: 2 }}>
      <Stack spacing={2.5} sx={{ py: 5 }}>
        <Typography component="h5" variant="h3">
          {title}
        </Typography>
        <Stack spacing={2.5} direction="row" useFlexGap flexWrap="wrap">
          {_.map(
            [
              {
                title: "Project name",
                points: 100,
                totalPoints: 100,
                stagesCount: 5,
                currentState: 3,
              },
            ],
            (quest, index) => (
              <Quest
                {...quest}
                onClick={(event) => console.info(event)}
                key={index}
              />
            )
          )}
        </Stack>
      </Stack>
    </Container>
  );
}
