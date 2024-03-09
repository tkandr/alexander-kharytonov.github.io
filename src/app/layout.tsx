import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Stack } from "@mui/material";
import { ThemeProviders } from "lib/providers/mui.providers";
import Header from "./components/header/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "LaunchJoy Quests",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProviders>
            <Stack direction="column" sx={{ minHeight: "100vh" }}>
              <Header />
              {children}
              <Footer />
            </Stack>
          </ThemeProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
