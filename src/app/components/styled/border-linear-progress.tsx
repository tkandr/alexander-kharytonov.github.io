import { styled } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

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

export default BorderLinearProgress;
