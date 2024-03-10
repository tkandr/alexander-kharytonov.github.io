import { Container } from "@mui/material";

export default function QuestsLayout({
  launch,
  streaks,
  latest,
}: Readonly<{
  launch: React.ReactNode;
  latest: React.ReactNode;
  streaks: React.ReactNode;
}>): React.ReactElement {
  return (
    <Container sx={{ py: 4 }}>
      {launch}
      {streaks}
      {latest}
    </Container>
  );
}
