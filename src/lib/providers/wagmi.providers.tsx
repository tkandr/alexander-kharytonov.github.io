"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type State, WagmiProvider } from "wagmi";
import { wagmiConfig } from "lib/configs/wagmi.config";

export function WagmiProviders({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: State;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
