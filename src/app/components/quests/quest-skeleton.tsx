import { Box, CardActions, CardContent, Skeleton } from "@mui/material";
import { StyledCard } from "app/components/styled";

export default function QuestSkeleton(): React.ReactElement {
  return (
    <Box
      sx={{
        opacity: 0.5,
        minWidth: {
          lg: "calc(20% - 16px)",
          md: "calc(25% - 16px)",
          sm: "calc(50% - 10px)",
          xs: "calc(100%)",
        },
      }}
    >
      <StyledCard>
        <Skeleton variant="rectangular" height={250} />
        <CardContent sx={{ py: 1.5 }}>
          <Skeleton variant="rounded" height={24} sx={{ mb: 1.25 }} />
          <Skeleton variant="rounded" height={20} sx={{ mb: 1.5 }} />
          <Skeleton variant="rounded" animation="wave" height={5} />
        </CardContent>
        <CardActions sx={{ pt: 0, pb: 2, px: 2 }}>
          <Skeleton
            variant="rounded"
            width="100%"
            height={42}
            sx={{ mt: 0.9 }}
          />
        </CardActions>
      </StyledCard>
    </Box>
  );
}
