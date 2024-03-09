import { Box, Container, Typography } from "@mui/material";

export default function Page(): React.ReactElement {
  return (
    <>
      <Box component="section" sx={{ backgroundColor: "section.main" }}>
        <Container sx={{ py: 2 }}>
          <Typography>Daily section</Typography>
        </Container>
      </Box>
      <Container sx={{ py: 2 }}>
        <Typography>Quests</Typography>
      </Container>
    </>
  );
}
