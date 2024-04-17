import React from 'react';
import Dropdown from '../components/Dropdown';
import Search from '../components/search';
import Carousel from '../components/Carousel';

const HomePage = () => {
  return (
    <div>
      <Dropdown />
      <Search />
      <Carousel /> 
    </div>
  );
}

export default HomePage;