import { Badge, Box, Divider, Stack, Typography, styled } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: "50%",
    right: "100%",
    backgroundColor: "#44b700",
    color: "#44b700",
    marginRight: 12,

    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },

  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function Wallet(): React.ReactElement {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <Typography variant="caption" align="right" sx={{ opacity: 0.38 }}>
          Wallet ID
        </Typography>
        <StyledBadge overlap="circular" variant="dot">
          <Typography variant="caption" align="right">
            0xC4B..24dc4
          </Typography>
        </StyledBadge>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography variant="caption" sx={{ opacity: 0.38 }}>
          Balance
        </Typography>
        <Typography variant="caption" noWrap>
          8 000.00 POINT
        </Typography>
      </Box>
    </Stack>
  );
}
