import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetTokens, SendTokens } from '../components/contract';
import Main from './Main';

export default function Home() {
  return (
    <div className={''}>
      <header style={{ padding: '1rem' }}>
        <ConnectButton />
      </header>

      <main
      // style={{
      //   minHeight: '60vh',
      //   flex: '1',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      // }}
      >
        <Main />
        <GetTokens />
        <SendTokens />
      </main>
    </div>
  );
}
