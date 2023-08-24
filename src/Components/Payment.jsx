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
import { toast } from 'react-toastify';
import RefreshIcon from '@mui/icons-material/Refresh';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import FormatPrice from '../Helper/FormatePrice';
import Receipt from './Receipt';

const Payment = () => {
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
    const addressLocalStorage = JSON.parse(localStorage.getItem("form"));
    // console.log("address",addressLocalStorage)

    const { total_amount, total_item, shipping_fee } = useCartContext();
    const [receipt, SetReceipt] = useState(false);
    const [arrowState1, setArrowState1] = useState(false);
    const [arrowState2, setArrowState2] = useState(false);
    const [arrowState3, setArrowState3] = useState(false);
    const [paytm, setPaytm] = useState(false)
    const [phonePe, setPhonePe] = useState(false)
    const [googlePay, setGooglePay] = useState(false)
    const [amazon, setAmazon] = useState(false)
    const [randomVal, setRandomVal] = useState(Math.floor(Math.random() * 1000))
    const [inputVal, setInputVal] = useState("");
    const [addNewCard, setAddNewCard] = useState(false);
    const [UPI_id_input, setAmazon_id_Input] = useState("");
    const [debitAndCreditStatus, setDebitAndCreditStatus] = useState(false);
    const [debitCardForm, setDebitCardForm] = useState({
        cardNumber: "",
        cvvNumber: "",
        date: "",
    });
    const [debitInputs, setDebitInputs] = useState([]);

    const randomFun = () => {
        setRandomVal(Math.floor(Math.random() * 1000))
    }
    const confirmOrder = () => {

        //debugger
        if (inputVal === "") {
            alert("Please enter value")
        } else if (Number(inputVal) === randomVal) {
            toast.success("Payment Successfull with COD", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            
            setTimeout(() => {
                SetReceipt(true)
            }, 3000);
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
        setAmazon(false)
       
    }
    const PhonePe = () => {
        setPaytm(false)
        setPhonePe(true)
        setGooglePay(false)
        setAmazon(false)
       
        
    }
    const GooglePay = () => {
        setPaytm(false)
        setGooglePay(true)
        setPhonePe(false)
        setAmazon(false)
        
    }
    const UPI_ID = () => {
        setPaytm(false)
        setGooglePay(false)
        setPhonePe(false)
        setAmazon(true)
        
    }

    const payPaymentWithUPI = () => {
        if (UPI_id_input === "") {
            alert("Please enter UPI ID")
        } else {
            toast.success("Payment Successfull with UPI ID", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setAmazon_id_Input("")
            setTimeout(() => {
                SetReceipt(true)
            }, 3000);
        }
    }
    const payWithAmazon = ()=>{
        toast.success("Payment Successfull with Amazon Pay", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            SetReceipt(true)
        }, 3000);
    }
    const PayWithPaytm = ()=>{
        toast.success("Payment Successfull with Paytm", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            SetReceipt(true)
        }, 3000);
    }
    const payWithGooglePay = ()=>{
        toast.success("Payment Successfull with mobikwik Wallet", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            SetReceipt(true)
        }, 3000);
    }
    const PayWithPhonePe = ()=>{
        toast.success("Payment Successfull with PhonePe", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            SetReceipt(true)
        }, 3000);
    }

    const debitCardFunction = () => {
         const CVV = /^[0-9]{3,4}$/;
        const { cvvNumber,date, cardNumber } = debitCardForm
        debugger
        if (cardNumber === "" || cvvNumber === "" || date==="") {
            toast.error("Please Enter Card Details ", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (cardNumber.length !== 16) {
            toast.error("Please enter 16 digit CardNumber", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (!cvvNumber.match(CVV)) {
            toast.error("Please enter correct CVV number", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            setDebitInputs([...debitInputs, debitCardForm])
            toast.success("Payment Successfull with cards", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                SetReceipt(true)
            }, 3000);
            setDebitCardForm({
                cardNumber: "",
                cvvNumber: "",
                date: "",
            })
        }
    }
    return (
        <div className='main_payment container'>
            <div className='payment_options'>
                <div className='arrowBack_icon'>
                    <NavLink to="/summary" style={{ color: "gray" }}><ArrowBackIcon style={{ fontSize: "25px" }} title="" /></NavLink>
                </div>
                <div className='price_payment'>
                    <div><h2>Payment Options</h2></div>
                    <div className='item_price_details'><h3>{total_item} item . Total: <FormatPrice price={shipping_fee + total_amount} /></h3></div>
                </div>
            </div>
            <div className='mini_payment'>
                <div className='Delivery_Date_and_Address'>
                    <div className='wiredLogo'>
                        <img src={wired} alt="wiredlogo" style={{ width: "30px" }} />
                    </div>
                    <div className='address_time'>
                        <div className='date'>Delivery in | {date.toDateString()}</div>
                        <div className='address'><h3>Home |  {addressLocalStorage.address}</h3></div>
                    </div>
                </div>
                <div className='All_payment_option'>
                    <div className='UPI'>
                        UPI
                    </div>
                    <div className='mini_containerOfUPI'>
                        <div className='Add_New_UPI_ID' onClick={() => setAddNewCard(!addNewCard)}>
                            <div className='AddIcon' style={{ cursor: "pointer" }}><AddIcon style={{ color: "#f15700", fontSize: "20px" }} /></div>
                            <div className='UPI_Number'>
                                <div className='NewUPI'>Add New UPI ID</div>
                                <div className='registeredUPI'>You need to  have a registered UPI ID</div>
                            </div>
                        </div>
                        <div>
                            {addNewCard && <div className='Add_New_UPI_ID UPI_Add'>
                                <input
                                    type="number"
                                    placeholder="Enter UPI ID"
                                    autoComplete="off"
                                    value={UPI_id_input}
                                    onChange={(e) => setAmazon_id_Input(e.target.value)}
                                />
                                <Button onClick={payPaymentWithUPI} style={{ backgroundColor: "#60b246" }}>Pay <FormatPrice price={shipping_fee + total_amount} /></Button>
                            </div>}
                        </div>
                    </div>
                    <div className='UPI'>
                        Credit & Debit cards
                    </div>
                    <div className='mini_containerOfUPI'>
                        <div className='Add_New_UPI_ID' onClick={() => setDebitAndCreditStatus(!debitAndCreditStatus)}>
                            <div className='AddIcon' style={{ cursor: "pointer" }}><AddIcon style={{ color: "#f15700", fontSize: "20px" }} /></div>
                            <div className='UPI_Number'>
                                <div className='NewUPI'>Add New Cards</div>
                                <div className='registeredUPI'>Save and Pay via Cards.</div>
                            </div>
                        </div>
                        <div>
                            {debitAndCreditStatus && <div className='Add_New_UPI_ID UPI_Add '>
                                <div >
                                    <input style={{ width: "250px", padding: "20px" }}
                                        type="text"
                                        placeholder="Card Number"
                                        name='cardNumber'
                                        autoComplete="off"
                                        value={debitCardForm.cardNumber}
                                        onChange={(e) => setDebitCardForm({...debitCardForm,cardNumber: e.target.value })}
                                    />
                                    <div>
                                        <input style={{ width: "180px", padding: "15px" }}
                                            type="date"
                                            value={debitCardForm.date}
                                            onChange={(e) => setDebitCardForm({ ...debitCardForm, date: e.target.value })}
                                        />
                                        <input style={{ width: "70px", padding: "16px" }}
                                            type="text"

                                            placeholder="CVV"
                                            autoComplete="off"
                                            value={debitCardForm.cvvNumber}
                                            onChange={(e) => setDebitCardForm({ ...debitCardForm, cvvNumber: e.target.value })}
                                        />
                                    </div>

                                    <Button onClick={debitCardFunction} style={{ backgroundColor: "#60b246", marginTop: "10px", width: "250px" }}>Pay <FormatPrice price={shipping_fee + total_amount} /></Button>
                                </div>
                            </div>}
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
                                {amazon && <Button  onClick={payWithAmazon} style={{ color: "white", backgroundColor: "#1ba672", marginTop: "-10px" }}><img src={Amazon} alt="" style={{ borderRadius: "5px", width: "20px", paddingTop: "-50px" }}  />  with <FormatPrice price={shipping_fee + total_amount} /> </Button>}
                                {paytm && <Button  onClick={PayWithPaytm} style={{ color: "white", backgroundColor: "#1ba672", marginTop: "-10px" }}><img src={PaytmPay} alt="" style={{ borderRadius: "5px", width: "20px", paddingTop: "-50px" }}  />  with <FormatPrice price={shipping_fee + total_amount} /> </Button>}
                                {phonePe && <Button onClick={PayWithPhonePe}  style={{ color: "white", backgroundColor: "#1ba672", marginTop: "-10px" }}><img src={PhonePay} alt="" style={{ borderRadius: "5px", width: "20px", paddingTop: "-50px" }} />  with <FormatPrice price={shipping_fee + total_amount} /> </Button>}
                                {googlePay && <Button  onClick={payWithGooglePay} style={{ color: "white", backgroundColor: "#1ba672", marginTop: "-10px" }}><img src={Mobikwik} alt="" style={{ borderRadius: "5px", width: "20px", paddingTop: "-50px" }} />  with <FormatPrice price={shipping_fee + total_amount} /> </Button>}
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
                            <div className='Add_New_UPI_ID Wallet Cod'>
                                <input
                                    readOnly
                                    value={randomVal}
                                    className='readOnly'
                                    style={{ width: "82px", color: "green", fontSize: "25px" }}
                                />
                                <Button onClick={randomFun} style={{ backgroundColor: "white" }}><RefreshIcon style={{ fontSize: "30px", color: "#1976d2" }} /></Button>

                                <input
                                    type="text"
                                    value={inputVal}
                                    onChange={(e) => setInputVal(e.target.value)}
                                    placeholder="captcha"
                                    name="username"
                                    autoComplete="off"
                                    className='capatcha' 
                                />
                                <Button style={{ backgroundColor: "#fb641b" }} onClick={confirmOrder}>Confirm Order</Button>
                            </div>}
                            
                            <Receipt receipt={receipt} SetReceipt={SetReceipt}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment