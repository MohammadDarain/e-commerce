import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import MohammadLogo from "../Images/MohammadLogo.jpg"
import Nav from './Nav'
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
        <img src={MohammadLogo}  style={{width:"200px" ,height:"30px ",border:"2px solid black" }} alt="Logo" />
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}
const MainHeader = styled.header`
position:sticky;
padding: 0 4.8rem;
height: 7rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo {
  height: 5rem;
}
`;

export default Header