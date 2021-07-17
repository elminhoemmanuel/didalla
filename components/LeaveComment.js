import React, {useState, useEffect} from 'react'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';
import {useRouter} from 'next/router';
import StripeCheckout from 'react-stripe-checkout';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import useForm from './useForm';




const LeaveComment = ({ closeShowLeaveComment, singleCampaign, creator }) => {

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

    const stateSchema = {
        ratingText:{value:"" , error:""},
    }

    const stateValidatorSchema ={

        ratingText:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{2,}$/.test(value),
                error:"Must be more than two character "
            }
        },
        
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema);
    const {ratingText} = values;

    

    const paySubmit = (e) =>{
        e.preventDefault();
        closeShowLeaveComment()
        // console.log(creator.user.id,creator.cost,singleCampaign.id)

        // setIsSubmitting(!isSubmitting);
        // const userToken = localStorage.getItem('userToken');

        // const formdata = new FormData();
        // formdata.append("booster_id", creator.id)
        // formdata.append("campaign_id", singleCampaign.id)

        // axios.post('https://api.didalla.com/api/payment/stripe_pay_web',formdata,{
        //     headers: {
        //     'Authorization': `Bearer ${userToken}`
        //     }})
        // .then((response) => {
        //     setIsSubmitting(false)
        //     console.log(response);
        //     setsuccessMsg('Successful')

        //     stripe.redirectToCheckout({
        //         sessionId: response.data.id,
        //     });

        //     localStorage.setItem('fromDashboard', true)

        // }, (error) => {
        //     setIsSubmitting(false)
        //     seterrMsg('Something went wrong, try again')
        //     console.log(error);
            
        // });
    }
    

    return (
        <div className='absolute py-6  w-full h-screen bg-gray-700 bg-opacity-50 
        flex flex-col items-center justify-center z-20 '>
            <div className='modal-box fixed w-4/5 lg:w-3/5 h-full bg-white border border-gray-100 overflow-y-auto'>
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={closeShowLeaveComment}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>Rate {creator.user.first_name} {creator.user.last_name}</h1></div>
                    </div>
                </div>

                <div className='px-6 py-4'>
                    <p className='text-didallabody text-sm mb-1'>How did the creator fare</p>
                    
                    <div className='flex flex-row flex-nowrap items-center mb-8'>
                        <button className='mr-3 block focus:outline-none'>
                            <img src="/images/YellowStar.svg" alt="star rating" />
                        </button>
                        <button className='mr-3 block focus:outline-none'>
                            <img src="/images/YellowStar.svg" alt="star rating" />
                        </button>
                        <button className='mr-3 block focus:outline-none'>
                            <img src="/images/YellowStar.svg" alt="star rating" />
                        </button>
                        <button className='mr-3 block focus:outline-none'>
                            <img src="/images/YellowStar.svg" alt="star rating" />
                        </button>
                        <button className='mr-3 block focus:outline-none'>
                            <img src="/images/YellowStar.svg" alt="star rating" />
                        </button>
                    </div>

                    <div>
                        <form onSubmit={paySubmit}>
                            <p className='text-didallabody text-sm mb-1'>Please share more details</p>
                            <div className='mb-3'>
                                <textarea rows='3' type="text" name='ratingText' id='ratingText' className='py-3 pl-3 pr-5 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                value={ratingText} onChange={handleOnChange}
                                ></textarea>
                                {errors.ratingText && dirty.ratingText && (
                                                    <p className='text-red-500 text-xs'>{errors.ratingText}</p>
                                            )}
                            </div>
                            
                            {
                                errors.ratingText || ratingText.length===0                       
                                ?
                                <div className='flex items-center justify-start'>
                                    <button type='submit' className="pointer-events-none opacity-50 block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                        Send Feedback
                                    </button>
                                </div> :
                                <div className='flex items-center justify-start'>
                                    <button type='submit' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                        {isSubmitting ? <BeatLoader color={color}  loading={isSubmitting } css={override} size={15} />:<span>Send Feedback</span>}
                                    </button>
                                </div>

                            }
                        </form>

                        <div className='flex justify-start'>
                            {
                                isSubmitting === false && errMsg && <div className='text-sm text-red-400'>{errMsg}</div> 
                            }
                        </div>
                        <div className='flex justify-start'>
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

export default LeaveComment
