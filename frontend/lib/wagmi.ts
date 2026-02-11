import { http, createConfig } from 'wagmi';
import { base, sepolia } from 'wagmi/chains';
import { injected, metaMask, coinbaseWallet } from 'wagmi/connectors';

export const config = createConfig({
  chains: [base, sepolia],
  connectors: [
    injected(),
    coinbaseWallet({ appName: 'Clawpump' }),
    metaMask(),
  ],
  transports: {
    [base.id]: http(),
    [sepolia.id]: http(),
  },
});
