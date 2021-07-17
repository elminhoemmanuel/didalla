import React, {useState, useEffect} from 'react'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';
import {useRouter} from 'next/router';
import StripeCheckout from 'react-stripe-checkout';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';




const MakePayment = ({ closeShowMakePayment, singleCampaign, creator }) => {

    const stripe = useStripe()

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    const router = useRouter()
    let [color, setColor] = useState("#FFFFFF");
    const [stripePay, setStripePay] = useState(true);
    const [paystack, setPaystack] = useState(true);
    const [bitpay, setBitpay] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errMsg, seterrMsg] = useState('');
    const [successMsg, setsuccessMsg] = useState();
    

    const paySubmit = (e) =>{
        e.preventDefault();
        // console.log(creator.user.id,creator.cost,singleCampaign.id)

        setIsSubmitting(!isSubmitting);
        const userToken = localStorage.getItem('userToken');

        const formdata = new FormData();
        formdata.append("amount", creator.cost)
        formdata.append("booster_id", creator.id)
        formdata.append("campaign_id", singleCampaign.id)

        axios.post('https://api.didalla.com/api/payment/stripe_pay_web',formdata,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting(false)
            console.log(response);
            setsuccessMsg('Successful')

            stripe.redirectToCheckout({
                sessionId: response.data.id,
            });

            localStorage.setItem('fromDashboard', true)

        }, (error) => {
            setIsSubmitting(false)
            seterrMsg('Something went wrong, try again')
            console.log(error);
            
        });
    }
    

    return (
        <div className='absolute py-6  w-full h-screen bg-gray-700 bg-opacity-50 
        flex flex-col items-center justify-center z-20 '>
            <div className='modal-box fixed w-4/5 lg:w-3/5 h-full bg-white border border-gray-100 overflow-y-auto'>
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={closeShowMakePayment}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>Make Payment</h1></div>
                    </div>
                </div>

                <div className='px-6 py-2'>
                    <p className='text-didallabody text-sm mb-3'>You are about to make a payment of ${creator.cost} to {creator.user.first_name} {creator.user.last_name} for the completion of assigned tasks </p>
                    
                    <p className='text-didallabody text-sm mb-1'>Amount </p>
                    <p className='p-2 rounded text-didallabody text-sm font-bold mb-6 border border-grayborder'>${creator.cost}</p>

                    <div>
                        <form onSubmit={paySubmit}>
                            <div className='grid grid-cols-3 gap-3 mb-6'>
                                <button type='button' className=' rounded p-3 border bg-grayscale border-didalla flex items-center justify-center'
                                onClick={()=>{setStripePay(true)}}
                                >
                                    <div><img className='' src='/images/StripeLogo.svg' alt='stripe logo' /></div>
                                </button>
                                <button type='button' className='pointer-events-none opacity-50 rounded p-3 border hover:bg-grayscale hover:border-didalla border-grayborder flex items-center justify-center'>
                                    <div><img src='/images/PaystackLogo.svg' alt='paystack logo' /></div>
                                </button>
                                <button type='button' className='pointer-events-none opacity-50 rounded p-3 border hover:bg-grayscale hover:border-didalla border-grayborder flex items-center justify-center'>
                                    <div><img src='/images/BitpayLogo.svg' alt='bitpay logo' /></div>
                                </button>

                            </div>
                            <div className=''>
                                <button type='submit' className='focus:outline-none rounded bg-didalla text-white text-center px-5 py-3 hover:bg-green-600 w-full'
                                >
                                    {isSubmitting ? <BeatLoader color={color}  loading={isSubmitting} css={override} size={15} />:<span>Continue</span>}
                                </button>
                            </div>
                        </form>

                        <div className='flex justify-end'>
                            {
                                isSubmitting === false && errMsg && <div className='text-sm text-red-400'>{errMsg}</div> 
                            }
                        </div>
                        <div className='flex justify-end'>
                            {
                                successMsg && <div className='text-sm text-didalla'>Successful</div> 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakePayment
