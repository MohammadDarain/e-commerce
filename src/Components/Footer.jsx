import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import {FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <Wrapper>
                <section className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>Ready to get started?</h3>
                            <h3>Talk to us today</h3>
                        </div>

                        <div>
                            <Button className="btn hireme-btn">
                                <NavLink to="/Contact"> Get Started </NavLink>
                            </Button>
                        </div>
                    </div>
                </section>
                {/* footer section */}

                <footer>
                    <div className="container grid grid-three-column">
                        <div className="footer-about">
                            <h3>Mohammad Store</h3>
                            <p>Faster buying process.</p>
                            <p>Flexibility for customers.</p>
                            <p>Affordable advertising and marketing.</p>
                        </div>
                       
                        <div className="footer-social">
                            <h3>Follow Us</h3>
                            <div className="footer-social--icons">
                               
                                <div>
                                    <a
                                        href="https://www.instagram.com/mohammaddarain/" >

                                        <FaInstagram className="icons" />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.youtube.com/"
                                        >
                                        <FaYoutube className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <h3>Call Us</h3>
                            <a href="tel:9598904791"><h3>+91-9598904791</h3></a>
                            <a href="mailto:mohddarain2@gmail.com"><h3>mohddarain2@gmail.com</h3></a>
                        </div>
                    </div>

                    <div className="footer-bottom--section">
                        <hr />
                        <div className="container grid grid-two-column ">
                            <p>
                                @{new Date().getFullYear()} Mohammad Store. All Rights Reserved
                            </p>
                            <div>
                                <p>PRIVACY POLICY</p>
                                <p>TERMS & CONDITIONS</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;