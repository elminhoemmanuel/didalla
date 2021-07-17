import React, {useState} from 'react'
import Select from 'react-select';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';



const ShowCampaignBids = ({ openShowBids, closeShowBids, bids, singleCampaign }) => {

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

    const acceptBid =(id)=>{

        setIsSubmitting(!isSubmitting);
        const userToken = localStorage.getItem('userToken');

        axios.get(`https://api.didalla.com/api/bid/accept_bid/${id}`,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting(false)
            console.log(response);
            setsuccessMsg('Success')
            if(isSubmitting === false && errMsg === ''){
                setTimeout(() => {
                    closeShowBids();
                }, 4000);
            }

        }, (error) => {
            setIsSubmitting(false)
            seterrMsg('Something went wrong, try again')
            console.log(error);
            
        });
    }
    const rejectBid =(id)=>{

        setIsSubmitting2(!isSubmitting2);
        const userToken = localStorage.getItem('userToken');

        axios.get(`https://api.didalla.com/api/bid/reject_bid/${id}`,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting2(false)
            console.log(response);
            setsuccessMsg('Successful')
            if(isSubmitting2 === false && errMsg === ''){
                setTimeout(() => {
                    closeShowBids();
                }, 4000);
            }

        }, (error) => {
            setIsSubmitting2(false)
            seterrMsg('Something went wrong, try again')
            console.log(error);
            
        });
    }

    // console.log(bids[0].user.booster_data.photo)

    return (
        <div className='absolute py-6  w-full h-screen bg-gray-700 bg-opacity-50 
        flex flex-col items-center justify-center z-20 '>
            <div className='modal-box fixed w-4/5 lg:w-3/5 h-full bg-white border border-gray-100 overflow-y-auto'>
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={closeShowBids}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>Bids Recieved</h1></div>
                    </div>
                </div>

                <div>
                    {
                        bids.map(item=>(
                            <div className=' border-b border-grayborder mb-3' key={item.id}>
                                <div className='flex items-center mb-2 px-6 py-4 border-b border-grayborder'>
                                    <div className='mr-3'>
                                        <img className='h-10 w-10 rounded-full' src={item.user.booster_data.photo_url} alt="creator avatar" />
                                    </div>
                                    <div>
                                        <h1 className='text-didallablack text-sm font-bold'>{item.user.first_name} {item.user.last_name}</h1>
                                        <p className='text-didallabody text-sm'><svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            &nbsp;{item.user.booster_data.city}, {item.user.booster_data.country}
                                        </p>
                                    </div>

                                </div>
                                <div className='px-6 py-4 border-b border-grayborder'>
                                    <h1 className='text-base text-black font-bold mb-2'>Networks</h1>
                                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2 mb-3'>
                                                {
                                                    item.user.booster_data.facebook &&
                                                    <div className='flex items-center '>
                                                        <div className=' w-1/5'>
                                                            <img className='w-16' src="/images/FacebookLogoRegister.svg" alt="facebook logo"/>
                                                        </div>
                                                        <div className='w-4/5 pl-4'>
                                                            <p className='text-didallablack mb-1 text-sm font-bold'>1K<br/>
                                                                <span className='text-didallabody'>followers</span>
                                                            </p>
                                                        </div>

                                                    </div>
                                                }
                                                {
                                                    item.user.booster_data.twitter &&
                                                    <div className='flex items-center '>
                                                        <div className='w-1/5'>
                                                            <img className='w-16' src="/images/TwitterLogoBlack.svg" alt="twitter logo"/>
                                                        </div>
                                                        <div className='w-4/5 pl-4'>
                                                            <p className='text-didallablack mb-1 text-sm font-bold'>1K<br/>
                                                                <span className='text-didallabody'>followers</span>
                                                            </p>
                                                        </div>

                                                    </div>
                                                }
                                                {
                                                    item.user.booster_data.youtube && 
                                                    <div className='flex items-center '>
                                                        <div className='w-1/5'>
                                                            <img className='w-16' src="/images/YoutubeLogoBlack.svg" alt="youtube logo"/>
                                                        </div>
                                                        <div className='w-4/5 pl-4'>
                                                            <p className='text-didallablack mb-1 text-sm font-bold'>1K<br/>
                                                                <span className='text-didallabody'>subscribers</span>
                                                            </p>
                                                        </div>

                                                    </div>
                                                }

                                    </div>

                                </div>
                                <div className='px-6 py-4 border-b border-grayborder'>
                                    <h1 className='text-base text-black font-bold mb-2'>About</h1>
                                    <p className='text-didallabody text-sm mb-4'>
                                        {item.user.booster_data.bio}
                                    </p>

                                </div>

                                <div className='px-6 py-4'>
                                    <div>
                                        <h1 className='text-sm text-black font-bold mb-2'>{singleCampaign.name}</h1>
                                        <p className='text-didallabody mb-3'><span className='text-didallabody'>sent on {singleCampaign.created_at.substr(0,10)}</span></p>
                                    </div>
                                    <div className=' flex items-center justify-start mb-4 text-sm'>
                                        <div className='mr-4 md:mr-6'>
                                            <h1 className=' text-didallablack font-bold'>${item.bid}</h1>
                                            <p className='text-didallabody'>Bid Cost</p>
                                        </div>

                                        <div className=''>
                                            <h1 className=' text-didallablack font-bold'>{item.campaign.start_date.substr(0,10)} to {item.campaign.end_date.substr(0,10)}</h1>
                                            <p className='text-didallabody'>Campaign duration</p>
                                        </div>

                                    </div>
                                </div>

                                <div className='px-6 py-4 flex flex-row justify-start  items-center '>

                                    <div className='flex items-center justify-end'>
                                        <button onClick={()=>{
                                            acceptBid(item.id);
                                        }} type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                            font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                            {isSubmitting ? <BeatLoader color={color}  loading={isSubmitting} css={override} size={15} />:<span>Accept Offer</span>}
                                        </button>
                                    </div>

                                    <div>
                                        <button type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-transparent text-didalla rounded 
                                            font-bold hover:text-green-600 text-sm  focus:outline-none mr-2 text-sm md:text-base"  
                                            onClick={()=>{
                                                rejectBid(item.id);
                                            }}>
                                            {isSubmitting2 ? <BeatLoader color={color2}  loading={isSubmitting2} css={override} size={15} />:<span>Reject Offer</span>}
                                        </button>
                                    </div>

                                </div>
                                <div className='px-6'>
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
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default ShowCampaignBids
