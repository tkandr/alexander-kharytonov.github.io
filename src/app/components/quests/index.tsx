"use client";

import _ from "lodash";
import { Alert, Stack, Typography } from "@mui/material";
import QuestSkeleton from "./quest-skeleton";
import Quest from "./quest";

export default function Quests({
  quests,
  title,
  useSkeleton,
  questsSize,
}: {
  title: string;
  quests?: Array<{
    currentState: number;
    image: string;
    points: number;
    stagesCount: number;
    title: string;
  }>;
  useSkeleton?: boolean;
  questsSize?: number;
}): React.ReactElement {
  return (
    <Stack spacing={2.5} sx={{ py: 4 }}>
      <Typography component="h5" variant="h3">
        {title}
      </Typography>
      {useSkeleton && questsSize ? (
        <Stack spacing={2.5} direction="row" useFlexGap flexWrap="wrap">
          {_.times(questsSize, (index) => (
            <QuestSkeleton key={index} />
          ))}
        </Stack>
      ) : _.isEmpty(quests) ? (
        <Alert severity="info">No quests available</Alert>
      ) : (
        <Stack spacing={2.5} direction="row" useFlexGap flexWrap="wrap">
          {_.map(quests, (quest, index) => (
            <Quest
              onClick={(event) => console.log(event)}
              index={index}
              key={index}
              {...quest}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
