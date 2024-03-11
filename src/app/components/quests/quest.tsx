import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { StyledLinearProgress, StyledCard } from "app/components/styled";
import {
  Star as StarIcon,
  MetaMask as MetaMaskIcon,
  System as SystemIcon,
} from "lib/icons";
import { useThemeContext } from "lib/providers/mui.providers";

export default function Quest({
  currentState,
  image,
  onClick,
  points,
  stagesCount,
  title,
  index,
}: {
  currentState: number;
  image: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  points: number;
  stagesCount: number;
  title: string;
  index: number;
}): React.ReactElement {
  const theme = useTheme();
  const { mode } = useThemeContext();

  const [sm, md, lg] = [
    useMediaQuery(theme.breakpoints.up("sm"), { noSsr: true }),
    useMediaQuery(theme.breakpoints.up("md"), { noSsr: true }),
    useMediaQuery(theme.breakpoints.up("lg"), { noSsr: true }),
  ];

  function getDelay(): number {
    switch (true) {
      case lg:
        return (index % 5) / 10;
      case md:
        return (index % 4) / 10;
      case sm:
        return (index % 2) / 10;
      default:
        return 0;
    }
  }

  return (
    <Box
      component={motion.div}
      initial="offscreen"
      variants={{
        offscreen: {
          opacity: 0,
          scale: 0.9,
          y: 80,
        },
        onscreen: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            bounce: 0.4,
            duration: 0.8,
            delay: getDelay(),
            type: "spring",
          },
        },
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      whileInView="onscreen"
      sx={{
        minWidth: {
          lg: "calc(20% - 16px)",
          md: "calc(25% - 16px)",
          sm: "calc(50% - 10px)",
          xs: "calc(100%)",
        },
      }}
    >
      <Tilt
        perspective={1500}
        tiltEnable={false}
        glareEnable={true}
        glareMaxOpacity={0.25}
        glareBorderRadius="12px"
        transitionSpeed={1500}
        glareColor={mode === "dark" ? "lightblue" : "#FFDE68"}
        glarePosition="all"
        scale={1.025}
      >
        <StyledCard>
          <CardMedia sx={{ height: 250 }} image={image} title={title} />
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
                <Typography variant="body2">{points} POINTs</Typography>
              </Stack>
              <MetaMaskIcon viewBox="0 0 20 20" sx={{ fontSize: 18 }} />
            </Stack>
            <Box display="flex" alignItems="center" sx={{ mt: 0.5 }}>
              <Box sx={{ width: "100%", mr: 1 }}>
                <StyledLinearProgress
                  variant="determinate"
                  value={Math.round((currentState / stagesCount) * 100)}
                />
              </Box>
              <Typography variant="caption" sx={{ whiteSpace: "nowrap" }}>
                {`${currentState} / ${stagesCount}`}
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ pt: 0, pb: 2, px: 2 }}>
            <Button
              sx={{ position: "relative", zIndex: 1 }}
              onClick={(event) => onClick(event)}
              size="large"
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
      </Tilt>
    </Box>
  );
}
