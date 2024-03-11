import { Tabs, styled } from "@mui/material";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-flexContainer": {
    height: "100%",
  },

  "& .MuiButtonBase-root": {
    textTransform: "none",
  },
}));

export default StyledTabs;
