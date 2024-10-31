import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetTokens, SendTokens } from '../components/contract';
import Header from '@/components/shared/Header';
import Hero from '@/components/shared/Hero';
import Card from '@/components/shared/Card';
import Services from '@/components/shared/Services';
import ManualConnection from '@/components/shared/ManualConnection';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Card />
      <Services />
      <ManualConnection />
    </div>
  );
}

{
  /* <ConnectButton /> */
}
// <main
// >
//   <GetTokens />
//   <SendTokens />
// </main>
