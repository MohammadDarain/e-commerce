
import HeroSection from "./Components/HeroSection";
import Footer from './Components/Footer'
// import { useProductContext } from "./Context/ProductContext";
// import { AppContext } from './Context/ProductContext';
const About = () => {
  // const { products } = useProductContext();
  // console.log(products, "prod");
  // const getUniqueData = (data, attr) => {
  //   let newVal = data.map((curElem) => {
  //     return curElem[attr];
  //   })
  //   if(attr ==="colors"){
  //     newVal = newVal.flat();
  //     console.log("newVal",newVal);
  //   }
  //    return ['all', ...new Set(newVal)]
  //   //return newVal
  // }
  // const categoryData = getUniqueData(products, "category")
  // const CompanyData = getUniqueData(products, "company")
  // const ColorData = getUniqueData(products, "colors")
  // console.log("category", categoryData)
  // console.log("CompanyData", CompanyData)
  // console.log("ColorData", ColorData)
  
  const data = {
    name: "E-commerce",
  };

  return(
    <>
      <HeroSection myData={data} />
      <Footer />
    </>
  )
}

export default About