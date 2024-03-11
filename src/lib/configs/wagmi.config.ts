import { createConfig, http, cookieStorage, createStorage } from "wagmi";
import { bsc, bscTestnet, mainnet } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [mainnet, bsc, bscTestnet],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [mainnet.id]: http(),
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
});
