import React, { useState } from 'react'
import './Payment.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import wired from './../Images/wired.jpg'
import AddIcon from '@mui/icons-material/Add';
import WalletIcon from '@mui/icons-material/Wallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveIcon from '@mui/icons-material/Remove';


const Payment = () => {
    const [arrowState, setArrowState] = useState(false);


    return (
        <div className='main_payment container'>
            <div className='payment_options'>
                <div className='arrowBack_icon'>
                    <ArrowBackIcon style={{ fontSize: "25px" }} />
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
                            <div className='arrowDown' onClick={() => setArrowState(!arrowState)}>
                            {arrowState ?  <RemoveIcon style={{ fontSize: "30px", }} />:    <AddIcon style={{ fontSize: "30px", }} />}
                            </div>

                        </div>

                        {arrowState && 
                            <div>
                            Lorem ipsum, dolor sit amet quisquam modi aliquid explicabo harum neque beatae iste suscipit illum sint. Placeat cupiditate amet dolores eligendi natus consequuntur odit quas delectus accusamus temporibus nesciunt quia debitis beatae voluptatum animi accusantium, voluptates odio deserunt tempora ab iusto doloremque velit, iste harum. Aperiam tenetur ea facilis? Quo esse adipisci obcaecati eveniet, voluptas expedita quos ipsam consectetur. Optio ducimus, laborum in veniam, tempora perspiciatis, hic nobis numquam quisquam recusandae at debitis enim reprehenderit ratione expedita eum illo dolore saepe sit rerum sunt magnam doloremque aliquid. Cum ratione omnis reiciendis ipsa, et magnam. Deserunt dolorem porro iure voluptatibus, quasi itaque fugiat omnis aperiam quia est dignissimos adipisci quod temporibus cupiditate ut facere recusandae nostrum provident eum. Inventore officia vitae iure, quam maiores magni nesciunt quis doloremque ipsa quasi porro fugit est dolore consequuntur aut quibusdam dolorem eum explicabo alias pariatur veniam! Ad, pariatur molestiae! Facilis, minus! Asperiores culpa laborum enim assumenda odio suscipit incidunt ipsum ipsa. Sint tempora exercitationem ad laudantium neque sunt quam reprehenderit corrupti sapiente perferendis eos quibusdam.</div>}
                       
                    </div>
                    <div className='mini_containerOfUPI'>
                        <div className='Add_New_UPI_ID'>
                            <div className='AddIcon'><AccountBalanceIcon style={{ color: "#3d4046", fontSize: "20px" }} /></div>
                            <div className='UPI_Number'>
                                <div className='NewUPI' style={{ color: "#3d4046" }}>Netbanking</div>
                                <div className='registeredUPI'>Select from a list of banks</div>
                            </div>
                            <div className='arrowDown' onClick={() => setArrowState(!arrowState)}>
                                <AddIcon style={{ fontSize: "30px" }} />
                            </div>
                        </div>
                    </div>
                    <div className='mini_containerOfUPI'>
                        <div className='Add_New_UPI_ID'>
                            <div className='AddIcon'><CurrencyRupeeIcon style={{ color: "#3d4046", fontSize: "20px" }} /></div>
                            <div className='UPI_Number'>
                                <div className='NewUPI' style={{ color: "#3d4046" }}>Pay on Delivery</div>
                                <div className='registeredUPI'>Pay in cash or pay online.</div>
                            </div>
                            <div className='arrowDown' onClick={() => setArrowState(!arrowState)}>
                                <AddIcon style={{ fontSize: "30px" }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment