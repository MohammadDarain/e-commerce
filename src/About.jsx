// import React, { useContext } from 'react'
import HeroSection from "./Components/HeroSection";
import {useProductContext } from "./Context/ProductContext";
import Footer from './Components/Footer'
// import { AppContext } from './Context/ProductContext';
const About = () => {
  // const {MyName} = useContext(AppContext);
  const {MyName}= useProductContext(); 

  const data = {
    name: "E-commerce",
  };

  return (
    <>
    {MyName}
    <HeroSection myData={data} />
    <Footer/>
    </>
  )
}

export default About