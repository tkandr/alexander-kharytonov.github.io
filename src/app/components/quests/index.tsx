import _ from "lodash";
import { Stack, Typography } from "@mui/material";
import Quest from "./quest";

export default function Quests({
  quests,
  title,
}: {
  title: string;
  quests: Array<{
    currentState: number;
    image: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    points: number;
    stagesCount: number;
    title: string;
  }>;
}): React.ReactElement {
  return (
    <Stack spacing={2.5} sx={{ py: 4 }}>
      <Typography component="h5" variant="h3">
        {title}
      </Typography>
      <Stack spacing={2.5} direction="row" useFlexGap flexWrap="wrap">
        {_.map(quests, (quest, index) => (
          <Quest {...quest} key={index} />
        ))}
      </Stack>
    </Stack>
  );
}
