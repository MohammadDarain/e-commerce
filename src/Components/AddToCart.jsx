import React, { useState } from 'react'
import { styled } from 'styled-components';
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
const AddToCart = ({ product }) => {

  const {addToCart}=useCartContext()
  
  //console.log("pro",product);
    const {id,colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
       // amount > 1 ? setAmount(amount - 1) : setAmount(1)
       if(amount>1){
        setAmount(amount-1);
       }else{
        setAmount(1)
       }
    };

    const setIncrease = () => {
        // (amount < stock) ? setAmount(amount + 1) : `${setAmount(stock)} alert("
        // You can buy only up to 5 unit(s) of this product")`;


        if (amount < stock && amount < 5) {
            setAmount(amount + 1);
        } else {
            alert("You can buy only up to 5 unit(s) of this product")
        }
    };
    return (
        <Wrapper>
            <div className='colors'>
                <p>
                    Colors:
                    {
                        colors.map((curColor, index) => {
                            return <button key={index} style={{ backgroundColor: curColor }} className={color === curColor ? "btnStyle active" : "btnStyle"} onClick={() => setColor(curColor)}>
                                {color === curColor ? <FaCheck className='checkStyle' /> : null}
                            </button>;
                        })
                    }
                </p>
            </div>
            {/*Add to cart*/}
            <CartAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />
            <NavLink to="/Cart" onClick={()=>addToCart(id,color,amount,product)}>
                <Button className='btn'>Add To Cart</Button>
            </NavLink>
        </Wrapper>
    );
};


const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;