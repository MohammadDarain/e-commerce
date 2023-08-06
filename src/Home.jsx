import React from 'react';
import HeroSection from './Components/HeroSection';
import Trusted from './Components/Trusted';
import Service from './Components/Service';
import FeaturesProducts from './Components/FeaturesProducts';


export const Home = () => {

  const data = {
    name: "Mohammad store",
  };

  return (<>
    <HeroSection myData={data}/>
    <FeaturesProducts/>
    <Service/>
    <Trusted/>
    </>
  )
}
