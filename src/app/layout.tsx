import type { Metadata } from "next";
import { headers } from "next/headers";
import { State, cookieToInitialState } from "wagmi";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Stack } from "@mui/material";
import { wagmiConfig } from "lib/configs/wagmi.config";
import { WagmiProviders } from "lib/providers/wagmi.providers";
import { ThemeProviders } from "lib/providers/mui.providers";
import Header from "app/components/header";
import Footer from "app/components/footer";

export const metadata: Metadata = {
  title: "LaunchJoy Quests",
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
  quests,
}: Readonly<{
  children: React.ReactNode;
  quests: React.ReactNode;
}>): React.ReactElement {
  const initialState = cookieToInitialState(
    wagmiConfig,
    headers().get("cookie")
  ) as State;

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <WagmiProviders initialState={initialState}>
            <ThemeProviders>
              <Stack direction="column" sx={{ minHeight: "100vh" }}>
                <Header />
                {children}
                {quests}
                <Footer />
              </Stack>
            </ThemeProviders>
          </WagmiProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
