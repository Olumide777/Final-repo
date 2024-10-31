import { CssBaseline, GeistProvider } from '@geist-ui/core';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';
// @ts-ignore
import '../styles/globals.css';

// Imports
import {
  configureChains,
  createConfig,
  mainnet,
  // createClient,
  WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

import { arbitrum, bsc, gnosis, optimism, polygon, sepolia } from 'viem/chains';
import { z } from 'zod';
import { useIsMounted } from '../hooks';

const walletConnectProjectId = '301da5cfda101628d27c3d5c3ae42180';
// z
// .string()
// .parse(process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID);

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, bsc, gnosis, sepolia],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: 'Drain',
  projectId: walletConnectProjectId,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const App = ({ Component, pageProps }: AppProps) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <html>
      <body className="bg-s1">
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider coolMode chains={chains}>
            <NextHead>
              <title>Drain</title>
              <meta
                name="description"
                content="Send all tokens from one wallet to another"
              />
              <link rel="icon" href="/favicon.ico" />
            </NextHead>
            <GeistProvider>
              <CssBaseline />
              <Component {...pageProps} />
            </GeistProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
};

export default App;
