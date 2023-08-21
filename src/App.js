import React, { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import ErrorPage from './ErrorPage'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Header from './Components/Header'
import SignUp from './SignUp/SignUp'
import Login from './LOGIN/Login'
import Shipping from './Components/Shipping'
import Summary from './Components/Summary'
import Payment from './Components/Payment'
export const DataParentContext = createContext();
const App = () => {
  const LoginStatus = localStorage.getItem("logIn")
  const [LoginDetails, setLoginDetails] = useState()
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },

  };

  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DataParentContext.Provider value={{ LoginDetails, setLoginDetails }}>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/summary' element={<Summary />} />
            {LoginStatus && <Route path='/payment' element={<Payment />} />}
            <Route path='/SingleProduct/:id' element={<SingleProduct />} />
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
         
        </DataParentContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
// export function ProtectedRoutes(props){
//   if(localStorage.getItem('logIn')){
//     return props.children
//   }else{
//     return <Navigate to="/Login"/>
//   }
// }

export default App;

