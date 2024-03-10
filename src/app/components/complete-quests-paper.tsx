import _ from "lodash";
import Image from "next/image";
import { Box, Button, Paper, Stack, Typography, styled } from "@mui/material";
import { East as EastIcon } from "@mui/icons-material";

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
    maxWidth: "100%",
    height: "auto",
  },
}));

export default function CompleteQuestsBox({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}): React.ReactElement {
  return (
    <StyledPaper
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
        sx={{
          marginTop: { xs: -3, md: -9 },
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Image
          src="/images/joystick.png"
          width={436}
          height={202}
          alt="Complete quests to earn XP and compete!"
          priority={true}
          className="preview"
        />
      </Box>
      <Stack
        direction="column"
        spacing={2}
        sx={{ marginTop: "auto", position: "relative" }}
      >
        <Typography variant="h6" sx={{ fontSize: "1.15rem" }}>
          Complete quests to earn XP and compete!
        </Typography>
        <div>
          <Button
            onClick={(event) => onClick(event)}
            variant="contained"
            sx={{ minWidth: "50%", width: { xs: "100%", md: "auto" } }}
            endIcon={<EastIcon />}
          >
            View leaderboard
          </Button>
        </div>
      </Stack>
    </StyledPaper>
  );
}
