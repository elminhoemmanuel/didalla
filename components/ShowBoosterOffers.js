import React, {useState} from 'react'
import Select from 'react-select';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';



const ShowBoosterOffers = ({ openShowOffers, closeShowOffers, offers }) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#FFFFFF");
    let [color2, setColor2] = useState("#39B54A");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitting2, setIsSubmitting2] = useState(false);
    const [errMsg, seterrMsg] = useState('');
    const [successMsg, setsuccessMsg] = useState();

    const acceptOffer =(id)=>{

        setIsSubmitting(!isSubmitting);
        const userToken = localStorage.getItem('userToken');

        axios.get(`https://api.didalla.com/api/offer/accept_offer/${id}`,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting(false)
            console.log(response);
            setsuccessMsg('Offer sent successfully')
            if(isSubmitting === false && errMsg === ''){
                setTimeout(() => {
                    closeShowOffers();
                }, 4000);
            }

        }, (error) => {
            setIsSubmitting(false)
            seterrMsg('Something went wrong, try again')
            console.log(error);
            
        });
    }
    const rejectOffer =(id)=>{

        setIsSubmitting2(!isSubmitting2);
        const userToken = localStorage.getItem('userToken');

        axios.get(`https://api.didalla.com/api/offer/reject_offer/${id}`,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting2(false)
            console.log(response);
            setsuccessMsg('Offer sent successfully')
            if(isSubmitting2 === false && errMsg === ''){
                setTimeout(() => {
                    closeShowOffers();
                }, 4000);
            }

        }, (error) => {
            setIsSubmitting2(false)
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
                            <button className='focus:outline-none block' onClick={closeShowOffers}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>Offers</h1></div>
                    </div>
                </div>

                <div>
                    {
                        offers.map(item=>(
                            <div className='px-6 py-4 border-b border-grayborder mb-3' key={item.id}>
                                <h1 className='text-sm text-black font-bold mb-2'>{item.campaign.name}</h1>
                                <p className='text-didallabody mb-3'><span className='text-didallabody'>posted {item.created_at.substr(0,10)}</span></p>

                                <div className='flex items-center justify-start mb-4 text-sm'>
                                    <div className='mr-4 md:mr-6'>
                                        <h1 className=' text-didallablack font-bold'>${item.campaign.budget}</h1>
                                        <p className='text-didallabody'>Budget</p>
                                    </div>

                                    <div className=''>
                                        <h1 className=' text-didallablack font-bold'>{item.campaign.start_date.substr(0,10)} to {item.campaign.end_date.substr(0,10)}</h1>
                                        <p className='text-didallabody'>Campaign duration</p>
                                    </div>

                                </div>

                                <div className='flex flex-row justify-start  items-center '>

                                    <div className='flex items-center justify-end'>
                                        <button onClick={()=>{
                                            acceptOffer(item.id);
                                        }} type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                            font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                            {isSubmitting ? <BeatLoader color={color}  loading={isSubmitting} css={override} size={15} />:<span>Accept Offer</span>}
                                        </button>
                                    </div>

                                    <div>
                                        <button type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-transparent text-didalla rounded 
                                            font-bold hover:text-green-600 text-sm  focus:outline-none mr-2 text-sm md:text-base"  
                                            onClick={()=>{
                                                rejectOffer(item.id);
                                            }}>
                                            {isSubmitting2 ? <BeatLoader color={color2}  loading={isSubmitting2} css={override} size={15} />:<span>Reject Offer</span>}
                                        </button>
                                    </div>

                                </div>
                                    <div className=''>
                                            {
                                                isSubmitting === false && errMsg && <div className='text-sm text-red-400'>{errMsg}</div> 
                                            }
                                    </div>
                                    <div className=''>
                                            {
                                                successMsg && <div className='text-sm text-didalla'>Successful !!</div> 
                                            }
                                    </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default ShowBoosterOffers
