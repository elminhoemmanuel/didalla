import React, { useState, useEffect }from 'react'
import VendorDashNav from './VendorDashNav'
import Link from 'next/link';
import axios from 'axios';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import SendOffer from './SendOffer';
import ViewProfile from './ViewProfile';


const VendorCreatorsList = ({
}) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#39B54A");

    const [isLoading, setisLoading] = useState(true);

    const [boosters, setboosters] = useState([]);

    const [viewProfile, setviewProfile] = useState(false);
    const showViewProfile = () =>{
        setviewProfile(!viewProfile);
        document.body.style.overflowY= 'hidden';
    }
    const hideViewProfile = () =>{
        setviewProfile(!viewProfile);
        document.body.style.overflowY= 'visible';
    }

    const [sendOffer, setsendOffer] = useState(false);
    const showSendOffer = () =>{
        setsendOffer(!sendOffer);
        document.body.style.overflowY= 'hidden';
    }
    const hideSendOffer = () =>{
        setsendOffer(!sendOffer);
        document.body.style.overflowY= 'visible';
    }

    useEffect(() => {

        const userToken = localStorage.getItem('userToken');
        
        axios.get(`https://api.didalla.com/api/booster?network=all&budget=all&location=all&topic=all`, 
        {
            headers: {
            'Authorization': `Bearer ${userToken}`
            }}
        )
        .then((response) => {
            console.log(response.data.data.data);
            response.data.data.data.map(item =>{
                boosters.push(item);
            })
            console.log(boosters);
            setisLoading(!isLoading);
        }, (error) => {
        console.log(error)
        setisLoading(!isLoading);
        });  
        
    }, [])

    return (

        <>

            {
                isLoading ? 

                <div className='flex justify-center items-center px-20 py-32'>
                <BeatLoader color={color}  loading={isLoading} css={override} size={40} />
                </div> 

                :

                <div>

                    {
                    sendOffer && <SendOffer showSendOffer={showSendOffer} hideSendOffer={hideSendOffer}/>
                    }

                    {
                    viewProfile && <ViewProfile showViewProfile={showViewProfile} hideViewProfile={hideViewProfile} showSendOffer={showSendOffer} hideSendOffer={hideSendOffer}/>
                    }

                    <VendorDashNav 
                        homeColour='' 
                        campaignColour =""
                        creatorsColour = "text-didalla"
                        messagesColour = ""
                    />

                    <div  className='bg-onboardinggray px-6 md:px-10 lg:px-10 pt-32 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                        
                        {
                            boosters.map(item =>(
                            <div className='border border-grayborder p-4 rounded bg-white' key={item.id}>
                                    <div>
                                        <img className='h-32 w-full' src={item.photo_url} alt="creator avatar"/>
                                    </div>
                                    <div className='flex items-center justify-between mt-1'>
                                        <div>
                                            <h1 className='text-didallablack text-base md:text-xl font-bold'>{item.user.first_name} {item.user.last_name}</h1>
                                        </div>
                                        <div>
                                            <p className='text-didallabody'>{item.basic_plan}-{item.premium_plan}</p>
                                        </div>

                                    </div>
                                    <div>
                                        <p className='text-didallabody mb-2'>{item.city}-{item.country}</p>
                                        <p className='text-didallabody mb-2'>{item.bio}</p>
                                    </div>

                                    <div className='grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-2 mb-3'>
                                        <div className='flex items-center '>
                                            <div className=' w-1/5'>
                                                <img className='w-16' src="/images/FacebookLogoRegister.svg" alt="facebook logo"/>
                                            </div>
                                            <div className='w-4/5 pl-4'>
                                                <p className='text-didallablack mb-1 text-sm font-bold'>1k<br/>
                                                    <span className='text-didallabody'>followers</span>
                                                </p>
                                            </div>

                                        </div>
                                        <div className='flex items-center '>
                                            <div className='w-1/5'>
                                                <img className='w-16' src="/images/TwitterLogoBlack.svg" alt="twitter logo"/>
                                            </div>
                                            <div className='w-4/5 pl-4'>
                                                <p className='text-didallablack mb-1 text-sm font-bold'>2k<br/>
                                                    <span className='text-didallabody'>followers</span>
                                                </p>
                                            </div>

                                        </div>
                                        <div className='flex items-center '>
                                            <div className='w-1/5'>
                                                <img className='w-16' src="/images/YoutubeLogoBlack.svg" alt="youtube logo"/>
                                            </div>
                                            <div className='w-4/5 pl-4'>
                                                <p className='text-didallablack mb-1 text-sm font-bold'>1.5k<br/>
                                                    <span className='text-didallabody'>subscribers</span>
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='flex items-center flex-nowrap'>

                                        <div className='flex items-center justify-end'>
                                            <button type='submit' onClick={showSendOffer} className="block w-full md:w-auto py-3 px-6  text-center bg-didalla rounded border border-didalla
                                                font-bold text-white hover:bg-green-600 focus:outline-none text-xs md:text-sm">
                                                Send offer
                                            </button>
                                        </div>

                                        <div className='ml-2'>
                                            <button type='button' onClick={showViewProfile} className="block w-full md:w-auto py-3 px-6 text-center bg-transparent text-didalla rounded 
                                            font-bold hover:text-green-600  focus:outline-none  text-sm md:text-base"  
                                                
                                            >
                                                View profile
                                            </button>
                                        </div>

                                    </div>

                            </div>
                            ))
                        }

                    </div>

                </div>
            }
            
        </>
    )

    
}


export default VendorCreatorsList
