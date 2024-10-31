import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Services from '../components/Services';
import ManualConnection from '../components/ManualConnection';

const Main = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Card />
      <Services />
      <ManualConnection />
    </div>
  );
};

export default Main;
