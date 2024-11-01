import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';

const Hero = () => {
  // const navigate = useNavigate();
  const router = useRouter();

  return (
    <section className="container relative  text-white py-16 px-8 md:px-16 lg:px-24 pb-3">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Your Trusted Blockchain and <br />
            Solution! <br />
            Crypto Rectification
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Your go-to online tool to{' '}
            <span className="text-blue-400">seamlessly</span> and{' '}
            <span className="text-blue-400">efficiently</span> fix any
            blockchain-related issues you might encounter.
          </p>
          <div className=" space-x-4 inline-flex">
            <Button />
            <a
              href="/manual"
              className="hover:text-white-400  px-4 py-2 rounded-lg  bg-blue-900 hover:bg-blue-950 duration-300 text-white"
            >
              Our Services
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
          <img
            src="https://i.imgur.com/LDyIw0L.png"
            alt="Hero Image"
            className="w-full max-w-md lg:max-w-lg"
          />
          <img
            src="https://i.imgur.com/RQi6gmA.png"
            alt="Hero Image"
            className="w-1/2 max-w-md lg:max-w-lg absolute top-0 left-0 transform translate-x-1/4 translate-y-1/4 animate-spin-slow"
          />
        </div>
      </div>
      <div className="absolute bottom-4 right-8 flex space-x-4">
        <button className="bg-blue-600 w-10 h-10 rounded-full hover:bg-blue-700">
          1
        </button>
        <button className="bg-blue-600 w-10 h-10 rounded-full hover:bg-blue-700">
          2
        </button>
        <button className="bg-blue-600 w-10 h-10 rounded-full hover:bg-blue-700">
          3
        </button>
      </div>
    </section>
  );
};

export default Hero;
