import React, { useState } from 'react'
import PriceDetails from './PriceDetails'
import './Shipping.css';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from "../styles/Button";
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
    const navegate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        address: "",
        landmark: "",
        pincode: "",
        number: "",
    });
    const [inputs, setInputs] = useState([]);

    const PlaceOrder = () => {
        //debugger;
        if (form.username === "" || form.address === "" || form.landmark === "" || form.pincode === "" || form.number === "") {
            toast.error("All  input field are  mandatory ... ", {
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
        else if (form.number.length < 10) {
            toast.error("Please use valid mobile number", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (form.pincode === "") {
            toast.error("Please enter Pincode number", {
                position: "top-right", autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (form.pincode.length < 6) {
            toast.error("Allows 6 digits  pincode", {
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
            setInputs([...inputs, form])
            console.log(inputs)
            setForm({

                username: "",
                address: "",
                landmark: "",
                pincode: "",
                number: "",
            })
            navegate("/summary")
        }
    }
    return (
        <div className='main_container'>
            <div className="container_one details">
                <p><ToastContainer /></p>
                <h2>Enter Details for Shipping</h2>
                <hr className='hr hori' />
                <div className='shipping_box'>
                    <div className='input_feilds'>
                        <form >
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                name="username"
                                required
                                value={form.username}
                                onChange={(e) => setForm({ ...form, username: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Enter your Address"
                                name="address"
                                required
                                value={form.address}
                                onChange={(e) => setForm({ ...form, address: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Nearest Landmark"
                                name="landmark"
                                value={form.landmark}
                                required
                                onChange={(e) => setForm({ ...form, landmark: e.target.value })}
                            />
                            <input
                                type="number"
                                max="6"
                                placeholder="Enter Pincode"
                                value={form.pincode}
                                name="pincode"
                                required

                                onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                            />
                            <input
                                type="number"
                                placeholder="Phone number"
                                name="number"
                                value={form.number}
                                required
                                onChange={(e) => setForm({ ...form, number: e.target.value })}
                            />
                            <h3>NOTE: Due to technical issue, we are only accepting COD payment</h3>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container_one">
                <h2 className='priceHeading'>PRICE DETAILS</h2>
                <hr className='hr' />
                <div className='shipping_box'>
                    <PriceDetails />
                </div>
                <div className='PositionMethod'>
                    <Button style={{ backgroundColor: "#fb641b" }} className='butttonNav' onClick={PlaceOrder}> Place order </Button>
                </div>
            </div>
        </div>
    )
}

export default Shipping