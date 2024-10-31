import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

const Button = () => {
  return (
    <div>
      <button className="bg-blue-950">
        <ConnectButton />
      </button>
    </div>
  );
};

export default Button;
