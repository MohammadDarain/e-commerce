// import React, { useContext } from 'react'
import HeroSection from "./Components/HeroSection";
import {useProductContext } from "./Context/ProductContext";

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
    </>
  )
}

export default About