import React, { useState } from 'react'
import './Payment.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import wired from './../Images/wired.jpg'
import AddIcon from '@mui/icons-material/Add';
import WalletIcon from '@mui/icons-material/Wallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '../styles/Button';
import Amazon from '../Images/Amazon.jpg'
import PhonePay from '../Images/PhonePe.jpg'
import PaytmPay from '../Images/Paytm.jpg'
import Mobikwik from '../Images/Mobikwik.jpg'
import RefreshIcon from '@mui/icons-material/Refresh';
import { NavLink } from 'react-router-dom';


const Payment = () => {
    const [arrowState1, setArrowState1] = useState(false);
    const [arrowState2, setArrowState2] = useState(false);
    const [arrowState3, setArrowState3] = useState(false);
    const [paytm, setPaytm] = useState(false)
    const [phonePe, setPhonePe] = useState(false)
    const [googlePay, setGooglePay] = useState(false)
    const [UPI, setUPI] = useState(false)
    const [randomVal, setRandomVal] = useState(Math.floor(Math.random() * 1000))
    const [inputVal, setInputVal] = useState("");

    const randomFun = () => {
        setRandomVal(Math.floor(Math.random() * 1000))
    }
    const confirmOrder = () => {
        // console.log(typeof inputVal)
        // console.log(typeof randomVal)
        debugger
        if (inputVal === "") {
            alert("Please enter value")
        } else if (Number(inputVal) === randomVal) {
            alert("Confirm Order")
        } else {
            alert("Please enter the captha again------")
        }
        setInputVal("")
    }
    const arrow1 = () => {
        setArrowState1(!arrowState1)
        setArrowState2(false)
        setArrowState3(false)
    }
    const arrow2 = () => {
        setArrowState1(false)
        setArrowState2(!arrowState2)
        setArrowState3(false)
    }
    const arrow3 = () => {
        setArrowState1(false)
        setArrowState2(false)
        setArrowState3(!arrowState3)
    }
    const Paytm = () => {
        setPaytm(true)
        setGooglePay(false)
        setPhonePe(false)
        setUPI(false)
    }
    const PhonePe = () => {
        setPaytm(false)
        setPhonePe(true)
        setGooglePay(false)
        setUPI(false)
    }
    const GooglePay = () => {
        setPaytm(false)
        setGooglePay(true)
        setPhonePe(false)
        setUPI(false)
    }
    const UPI_ID = () => {
        setPaytm(false)
        setGooglePay(false)
        setPhonePe(false)
        setUPI(true)
    }

    return (
        <div className='main_payment container'>
            <div className='payment_options'>
                <div className='arrowBack_icon'>
                    <NavLink to="/summary" style={{color:"gray"}}><ArrowBackIcon style={{ fontSize: "25px" }} title=""/></NavLink>
                </div>
                <div className='price_payment'>
                    <div><h2>Payment Options</h2></div>
                    <div className='item_price_details'><h3>1 item . Total: &#8377;14150</h3></div>
                </div>
            </div>
            <div className='mini_payment'>
                <div className='Delivery_Date_and_Address'>
                    <div className='wiredLogo'>
                        <img src={wired} alt="wiredlogo" style={{ width: "30px" }} />
                    </div>
                    <div className='address_time'>
                        <div className='date'>Delivery in | Sun Aug 20 2023</div>
                        <div className='address'><h3>Home |  Lucknow, Uttar Pradesh, India</h3></div>
                    </div>
                </div>
                <div className='All_payment_option'>
                    <div className='UPI'>
                        UPI
                    </div>
                    <div className='mini_containerOfUPI'>
                        <div className='Add_New_UPI_ID'>
                            <div className='AddIcon'><AddIcon style={{ color: "#f15700", fontSize: "20px" }} /></div>
                            <div className='UPI_Number'>
                                <div className='NewUPI'>Add New UPI ID</div>
                                <div className='registeredUPI'>You need to  have a registered UPI ID</div>
                            </div>
                        </div>
                    </div>
                    <div className='UPI'>
                        Credit & Debit cards
                    </div>
                    <div className='mini_containerOfUPI'>
                        <div className='Add_New_UPI_ID'>
                            <div className='AddIcon'><AddIcon style={{ color: "#f15700", fontSize: "20px" }} /></div>
                            <div className='UPI_Number'>
                                <div className='NewUPI'>Add New Cards</div>
                                <div className='registeredUPI'>Save and Pay via Cards.</div>
                            </div>
                        </div>
                    </div>
                    <div className='UPI'>
                        More Payment Options
                    </div>
                    <div className='mini_containerOfUPI'>
                        <div className='Add_New_UPI_ID'>
                            <div className='AddIcon'><WalletIcon style={{ color: "#3d4046", fontSize: "20px" }} /></div>
                            <div className='UPI_Number'>
                                <div className='NewUPI' style={{ color: "#3d4046" }}>Wallets</div>
                                <div className='registeredUPI'>Paytm,PhonePe,Amazon Pay & more</div>
                            </div>
                            <div className='arrowDown' onClick={arrow1}>
                                {arrowState1 ? <RemoveIcon style={{ fontSize: "30px", }} /> : <AddIcon style={{ fontSize: "30px", }} />}
                            </div>
                        </div>
                        <div>
                            {arrowState1 &&
                                <div className='Add_New_UPI_ID Wallet'>
                                    <div className='inputsWallet'>
                                        <input type="radio" name='wallet' onClick={Paytm} />
                                        <img src={PaytmPay} alt="" style={{ width: "50px" }} />
                                    </div>
                                    <div className='inputsWallet'>
                                        <input type="radio" name='wallet' onClick={PhonePe} />
                                        <img src={PhonePay} alt="" style={{ width: "50px" }} />
                                    </div>
                                    <div className='inputsWallet'>
                                        <input type="radio" name='wallet' onClick={UPI_ID} />
                                        <img src={Amazon} alt="" style={{ width: "50px" }} />
                                    </div>

                                    <div className='inputsWallet'>
                                        <input type="radio" name='wallet' onClick={GooglePay} />
                                        <img src={Mobikwik} alt="" style={{ width: "50px" }} />
                                    </div>
                                </div>
                            }
                            {arrowState1 && <div className='Add_New_UPI_ID Wallet'>
                                {UPI && <Button style={{ color: "white", backgroundColor: "#1ba672", marginTop: "-10px" }}><img src={Amazon} alt="" style={{ borderRadius: "5px", width: "20px", paddingTop: "-50px" }} />  with &#8377;14150 </Button>}
                                {paytm && <Button style={{ color: "white", backgroundColor: "#1ba672", marginTop: "-10px" }}><img src={PaytmPay} alt="" style={{ borderRadius: "5px", width: "20px", paddingTop: "-50px" }} />  with &#8377;14150 </Button>}
                                {phonePe && <Button style={{ color: "white", backgroundColor: "#1ba672", marginTop: "-10px" }}><img src={PhonePay} alt="" style={{ borderRadius: "5px", width: "20px", paddingTop: "-50px" }} />  with &#8377;14150 </Button>}
                                {googlePay && <Button style={{ color: "white", backgroundColor: "#1ba672", marginTop: "-10px" }}><img src={Mobikwik} alt="" style={{ borderRadius: "5px", width: "20px", paddingTop: "-50px" }} />  with &#8377;14150 </Button>}
                            </div>}
                        </div>

                    </div>
                    <div className='mini_containerOfUPI'>
                        <div className='Add_New_UPI_ID'>
                            <div className='AddIcon'><AccountBalanceIcon style={{ color: "#3d4046", fontSize: "20px" }} /></div>
                            <div className='UPI_Number'>
                                <div className='NewUPI' style={{ color: "#3d4046" }}>Netbanking</div>
                                <div className='registeredUPI'>Select from a list of banks</div>
                            </div>
                            <div className='arrowDown' onClick={arrow2}>
                                {arrowState2 ? <RemoveIcon style={{ fontSize: "30px", }} /> : <AddIcon style={{ fontSize: "30px", }} />}
                            </div>
                        </div>
                        {arrowState2 &&
                            <div className='Add_New_UPI_ID Wallet'>
                                <p>This instrument has low success,use UPI or Cards for better experience <span style={{ color: "red" }}>(Unavailable)</span></p>
                            </div>
                        }

                    </div>
                    <div className='mini_containerOfUPI'>
                        <div className='Add_New_UPI_ID'>
                            <div className='AddIcon'><CurrencyRupeeIcon style={{ color: "#3d4046", fontSize: "20px" }} /></div>
                            <div className='UPI_Number'>
                                <div className='NewUPI' style={{ color: "#3d4046" }}>COD</div>
                                <div className='registeredUPI'>Cash on Delivery</div>
                            </div>
                            <div className='arrowDown' onClick={arrow3}>
                                {arrowState3 ? <RemoveIcon style={{ fontSize: "30px", }} /> : <AddIcon style={{ fontSize: "30px", }} />}
                            </div>
                        </div>
                        {arrowState3 &&
                            <div className='Add_New_UPI_ID Wallet'>
                                <input
                                    readOnly
                                    value={randomVal}
                                    style={{ width: "80px", color: "green", fontSize: "25px" }}
                                />
                                <Button onClick={randomFun} style={{ backgroundColor: "white" }}><RefreshIcon style={{ fontSize: "30px", color: "#1976d2" }} /></Button>

                                <input
                                    type="text"
                                    value={inputVal}
                                    onChange={(e) => setInputVal(e.target.value)}
                                    placeholder="Enter the characters"
                                    name="username"
                                    required
                                    autoComplete="off"
                                />
                                <Button style={{ backgroundColor: "#fb641b" }} onClick={confirmOrder}>Confirm Order</Button>
                            </div>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment