import React from 'react';
import GirlWithPhone from './GirlWithPhone';
import BoyWithLaptop from './BoyWithLaptop';
import Near from './Near';
import Optimization from './Optimization';
import Plan1 from './Plan1';
import Plan2 from './Plan2';
import Plan3 from './Plan3';
import Footer from './Footer';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <BoyWithLaptop />
      <div className='3xl:mb-52 2xl:mb-80 xl:mb-72 lg:mb-64 md:mb-8 sm:mb-6'>
      <GirlWithPhone />
      </div>
      <Near />
      <Optimization />
      <Plan1 />
      <Plan2 />
      <Plan3 />
      <Footer />
    </div>
  );
}

export default App;