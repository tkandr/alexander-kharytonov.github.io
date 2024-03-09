import { Box, Container, Typography } from "@mui/material";

export default function Footer(): React.ReactElement {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "footer.main", marginTop: "auto" }}
    >
      <Container sx={{ py: 2 }}>
        <Typography>Footer</Typography>
      </Container>
    </Box>
  );
}
