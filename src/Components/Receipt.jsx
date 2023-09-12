import { Dialog } from '@mui/material'
import { Button } from '../styles/Button'
import React from 'react'
import { FaGift } from 'react-icons/fa';
import './Receipt.css'
import CancelIcon from '@mui/icons-material/Cancel';
import { useCartContext } from '../Context/CartContext';
import FormatPrice from '../Helper/FormatePrice';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

const Receipt = ({ receipt, SetReceipt }) => {

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
    const addressLocalStorage = JSON.parse(localStorage.getItem("form"));
    // console.log("address",addressLocalStorage)

    const { total_amount, total_item, shipping_fee } = useCartContext();
    const handleClose = () => {
        SetReceipt(false)
    }
    return (

        <Dialog open={receipt}>
        <div className='buttonCross'>
        <Button onClick={window.print} style={{ backgroundColor: "white" ,color:"grey"}} title='Print'><LocalPrintshopIcon style={{fontSize:"30px"}}/></Button>
                <Button onClick={handleClose}style={{ backgroundColor: "white"}}><CancelIcon style={{ fontSize: "29px" }} className='cancelIcon' /></Button>
            </div>
            <div className='mainReceipt'>

                <div className='giftBox'>
                    <div className='faGiftIcon'>
                        <Button style={{ backgroundColor: "white" }}><FaGift style={{ fontSize: "60px", color: "#f56a11" }} /></Button>
                    </div>
                    <div className='OrderPlaceHeading'>
                        <h3 style={{ fontSize: "25px" }}>Order placed for  <FormatPrice price={shipping_fee + total_amount} /></h3>
                        <h3 style={{ color: "#bf0019" }}>Your <span style={{ fontSize: "25px" }}>{total_item}</span>  item will be delivered by {date.toDateString()}</h3>
                    </div>
                </div>
                <h3 className='deliveryHeading'>Delivery Address</h3>
                <div className='giftBoxAddress'>
                    <h3><span>Name</span> <b>:</b> {addressLocalStorage.username}</h3>
                    <h3><span>Address</span> <b>:</b> {addressLocalStorage.address}</h3>
                    <h3><span>Contact Number </span><b>:</b> {addressLocalStorage.number}</h3>
                    <h3><span>PinCode </span><b>:</b> {addressLocalStorage.pincode}</h3>
                </div>
                <p style={{ fontSize: "12px", paddingTop: "20px" }}>Orders placed with '1 Day Delivery' option, will not have open-box delivery. 'Working condition' of the product will not be verified during delivery.</p>
            </div>
        </Dialog>

    )
}

export default Receipt