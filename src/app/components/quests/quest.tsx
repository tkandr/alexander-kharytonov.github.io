import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import BorderLinearProgress from "app/components/styled/border-linear-progress";
import {
  Star as StarIcon,
  MetaMask as MetaMaskIcon,
  System as SystemIcon,
} from "lib/icons";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.quest.main,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 12,
  boxShadow: "none",
}));

export default function Quest({
  title,
  stagesCount,
  currentState,
  onClick,
}: {
  title: string;
  stagesCount: number;
  currentState: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}): React.ReactElement {
  return (
    <StyledCard
      sx={{
        minWidth: {
          md: "calc(20% - 16px)",
          sm: "calc(50% - 16px)",
          xs: "calc(100% - 16px)",
        },
      }}
    >
      <CardMedia
        sx={{ height: 250 }}
        image="/images/quests/placeholder_1.png"
        title={title}
      />
      <CardContent sx={{ py: 1.5 }}>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          sx={{ fontWeight: 700, mb: 1.25 }}
        >
          {title}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <StarIcon viewBox="0 0 20 20" sx={{ fontSize: 18 }} />
            <Typography variant="body2">300 POINTs</Typography>
          </Stack>
          <MetaMaskIcon viewBox="0 0 20 20" sx={{ fontSize: 18 }} />
        </Stack>
        <Box display="flex" alignItems="center" sx={{ mt: 0.5 }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <BorderLinearProgress
              variant="determinate"
              value={Math.round((currentState / stagesCount) * 100)}
            />
          </Box>
          <Typography variant="caption" sx={{ whiteSpace: "nowrap" }}>
            {`${currentState} / ${stagesCount}`}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ pt: 0, pb: 2 }}>
        <Button
          onClick={(event) => onClick(event)}
          startIcon={
            <SystemIcon viewBox="0 0 20 20" sx={{ color: "transparent" }} />
          }
          variant="contained"
          fullWidth
        >
          Start a task
        </Button>
      </CardActions>
    </StyledCard>
  );
}
