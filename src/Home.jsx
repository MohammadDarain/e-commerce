import React from 'react';
import HeroSection from './Components/HeroSection';
import Trusted from './Components/Trusted';
import Service from './Components/Service';
import FeaturesProducts from './Components/FeaturesProducts';
import Footer from './Components/Footer'

export const Home = () => {

  const data = {
    name: "E-Commerce store",
  };

  return (<>
    <HeroSection myData={data}/>
    <FeaturesProducts/>
    <Service/>
    <Trusted/>
    <Footer/>
    </>
  )
}
