import _ from "lodash";
import Link from "next/link";
import { Link as MUILink, Stack, Typography } from "@mui/material";

const PERSONA_NAVIGATION = [
  {
    title: "LaunchJoy",
    children: [
      { title: "Blog", href: "https://blog.launchjoy.com", target: "_blank" },
      {
        title: "Press & media kit",
        href: "https://www.bitget.com/calendar/event/coinmarketcap-partnership-chromia",
        target: "_blank",
      },
      {
        title: "CoinMarketCap",
        href: "https://www.bitget.com/calendar/event/coinmarketcap-partnership-chromia",
        target: "_blank",
      },
    ],
  },
  {
    title: "Technology",
    children: [
      { title: "Chromia", href: "http://chromia.com", target: "_blank" },
      {
        title: "Stake CHR",
        href: "https://staking.chromia.com",
        target: "_blank",
      },
      {
        title: "ChromaWay",
        href: "https://chromaway.com",
        target: "_blank",
      },
    ],
  },
  {
    title: "Games",
    children: [
      {
        title: "Mines of Dalarnia",
        href: "https://www.minesofdalarnia.com",
        target: "_blank",
      },
      {
        title: "Chain of Alliance",
        href: "https://chainofalliance.com",
        target: "_blank",
      },
      {
        title: "My Neighbor Alice",
        href: "https://www.myneighboralice.com",
        target: "_blank",
      },
    ],
  },
];

export default function Navigation(): React.ReactElement {
  return (
    <Stack
      spacing={{ xs: 4, sm: 6, md: 10 }}
      direction="row"
      justifyContent={{ md: "flex-end", sx: "flex-start" }}
      flexWrap="wrap"
      useFlexGap
    >
      {_.map(PERSONA_NAVIGATION, ({ title, children }, index) => (
        <Stack spacing={1} sx={{ py: { xs: 2, md: 6 } }} key={index}>
          <Typography component="h5" variant="h3" sx={{ pb: 2 }}>
            {title}
          </Typography>
          {_.map(children, (childrenItem, childrenIndex) => (
            <div key={childrenIndex}>
              <MUILink
                component={Link}
                color="inherit"
                underline="hover"
                variant="body2"
                {...childrenItem}
              >
                {childrenItem.title}
              </MUILink>
            </div>
          ))}
        </Stack>
      ))}
    </Stack>
  );
}
