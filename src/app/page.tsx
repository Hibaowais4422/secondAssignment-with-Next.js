import React from 'react';
import Header from './components/header';
import About from './components/about';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold">Home Page</h1>
        <About />
      </main>
    </div>
  );
};

export default HomePage;
