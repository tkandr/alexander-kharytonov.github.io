import moment from "moment";
import { Box, Container, Typography } from "@mui/material";
import Logo from "app/components/logo";

export default function Footer(): React.ReactElement {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "footer.main", marginTop: "auto" }}
    >
      <Container sx={{ pb: 2 }}>
        <Logo />
        <Typography variant="body2">
          &copy; {moment().year()} LaunCHR
        </Typography>
      </Container>
    </Box>
  );
}
