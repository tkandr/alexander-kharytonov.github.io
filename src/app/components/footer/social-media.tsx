import _ from "lodash";
import { Stack, IconButton } from "@mui/material";
import { Instagram as InstagramIcon } from "@mui/icons-material";
import {
  Telegram as TelegramIcon,
  Facebook as FacebookIcon,
  Discord as DiscordIcon,
  Twitter as TwitterIcon,
} from "lib/icons";

export default function SocialMedia(): React.ReactElement {
  return (
    <Stack
      direction="row"
      useFlexGap
      flexWrap="wrap"
      spacing={0.75}
      sx={{ mt: 3 }}
    >
      <IconButton
        color="inherit"
        href="https://t.me/launchjoy"
        title="Find as on Telegram"
        target="_blank"
      >
        <TelegramIcon />
      </IconButton>
      <IconButton
        color="inherit"
        href="https://www.facebook.com/launchjoy"
        title="Find as on Facebook"
        target="_blank"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        color="inherit"
        href="https://discord.gg/launchjoy"
        title="Find as on Discord"
        target="_blank"
      >
        <DiscordIcon />
      </IconButton>
      <IconButton
        color="inherit"
        href="https://twitter.com/launchjoy"
        title="Find as on Twitter"
        target="_blank"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        color="inherit"
        href="https://www.instagram.com/launchjoy"
        title="Find as on Instagram"
        target="_blank"
      >
        <InstagramIcon />
      </IconButton>
    </Stack>
  );
}
