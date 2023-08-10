import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import eCommerce from '../Images/eCommerce.jpg'
import Nav from './Nav'
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/" style={{backgroundColor:"#ac2020"}}>
        <img src={eCommerce}  style={{width:"146px" ,height:"28px"}} alt="Logo" />
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}
const MainHeader = styled.header`

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