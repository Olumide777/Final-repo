import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { IoWallet } from 'react-icons/io5';
import clsx from 'clsx';
import Button from './Button';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="container left-1 right-3 fixed top-0 flex justify-between items-center text-white z-50 shadow-lg pt-1 pb-2">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src=" https://i.imgur.com/XTcXHAG.png "
          alt="Logo"
          className="w-12 h-12"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {/* <Button /> */}
        <a
          href="/manual"
          className="hover:text-white-400  px-4 py-2 rounded-lg mt-3 bg-blue-900 hover:bg-blue-950 duration-300 text-white"
        >
          Our Services
        </a>
      </nav>

      {/* Desktop Connect Button */}
      <div className="hidden md:flex space-x-4">
        {/* <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
          Connect
        </button> */}
        <ConnectButton />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} absolute top-16 right-0 w-full bg-[#0A0F1E] md:hidden`}
      >
        <nav className="flex flex-col space-y-4 px-8 py-4 text-center">
          {/* <a href="#connect" className="hover:text-blue-400">Connect</a> */}
          <a
            href="/src/pages/Manual.tsx"
            className="hover:text-white-400 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-400 mt-3"
          >
            Our Services
          </a>
          {/* <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 mt-4">
            Connect
          </button> */}
          <Button />
        </nav>
      </div>
    </header>
  );
};
export default Header;

{
  /* */
}
