import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base, baseSepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Clawpump',
  projectId: 'YOUR_PROJECT_ID', // Replace with your WalletConnect Project ID from https://cloud.walletconnect.com
  chains: [base, baseSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
