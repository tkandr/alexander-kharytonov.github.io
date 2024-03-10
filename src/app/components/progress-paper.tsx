import _ from "lodash";
import Image from "next/image";
import {
  Box,
  Divider,
  Paper,
  Stack,
  SvgIcon,
  Typography,
  styled,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { StarPoint as StarPointIcon } from "lib/icons";

const IMAGES = {
  box: {
    src: "/images/box.png",
    width: 48,
    height: 50,
  },
  partners: {
    src: "/images/partners.png",
    width: 60,
    height: 50,
  },
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2, 2.5),
  borderRadius: 12,
  height: "100%",

  ".preview": {
    position: "absolute",
    top: "45%",
    maxWidth: "40%",
    height: "auto",
    right: 0,
    transform: "translateY(-50%)",
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#BCBBB7" : "#64676B",
  },

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function ProgressPaper({
  userName,
  points,
  totalPoints,
}: {
  userName: string;
  points: number;
  totalPoints: number;
}): React.ReactElement {
  return (
    <StyledPaper elevation={0}>
      <Image
        src="/images/progress.png"
        width={237}
        height={151}
        alt="My progress"
        priority={true}
        className="preview"
      />
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2.5}
        sx={{ flex: 1, position: "relative" }}
      >
        <Typography variant="body1">My progress</Typography>
        <Stack spacing={1.5} sx={{ maxWidth: "100%" }}>
          <Stack
            direction="row"
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Typography variant="body2" title={userName} noWrap>
              {userName}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <StarPointIcon sx={{ color: "transparent" }} />
              <Typography
                variant="body2"
                sx={{ whiteSpace: "nowrap" }}
              >{`${points} / ${totalPoints} POINTs`}</Typography>
            </Stack>
          </Stack>
          <BorderLinearProgress
            variant="determinate"
            value={(points / totalPoints) * 100}
          />
        </Stack>
      </Stack>
    </StyledPaper>
  );
}
