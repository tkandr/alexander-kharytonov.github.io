import _ from "lodash";
import Image from "next/image";
import { Box, Button, Paper, Stack, Typography, styled } from "@mui/material";

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
    top: -16,
    right: 22,
  },
}));

export default function DailyPaper({
  subTitle,
  title,
  image,
  onClick,
}: {
  subTitle?: string;
  title: string;
  image?: "box" | "partners";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}): React.ReactElement {
  return (
    <StyledPaper elevation={0}>
      {image && !_.isEmpty(IMAGES[image]) && (
        <Image
          alt={title}
          priority={true}
          className="preview"
          {...IMAGES[image]}
        />
      )}
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={1}
        sx={{ flex: 1, position: "relative" }}
      >
        <Box>
          <Typography variant="h6">{title}</Typography>
          {subTitle && <Typography variant="caption">{subTitle}</Typography>}
        </Box>
        <Button
          onClick={(event) => onClick(event)}
          variant="contained"
          size="large"
          fullWidth
        >
          GM
        </Button>
      </Stack>
    </StyledPaper>
  );
}
