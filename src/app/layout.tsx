import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Stack } from "@mui/material";
import { ThemeProviders } from "lib/providers/mui.providers";
import Header from "app/components/header";
import Footer from "app/components/footer";
import Demo from "app/components/demo";

export const metadata: Metadata = {
  title: "LaunchJoy Quests",
  viewport: "initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProviders>
            <Demo />
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
