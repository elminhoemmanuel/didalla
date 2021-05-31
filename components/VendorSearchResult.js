import React , {useEffect, useState} from 'react'
import VendorDashNav from './VendorDashNav'
import {creatorsObjOne} from './CreatorsData'
import Link from 'next/link';
import { useRouter } from 'next/router'
import SendOffer from './SendOffer';
import ViewProfile from './ViewProfile';


const VendorSearchResult = () => {

    const router = useRouter()
    const enteredData = router.query.searchquery

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

    return (
        <div>
            <VendorDashNav 
            homeColour='text-didalla' 
            campaignColour =""
            creatorsColour = ""
            messagesColour = ""
            />

            {
             viewProfile && <ViewProfile showViewProfile={showViewProfile} hideViewProfile={hideViewProfile} showSendOffer={showSendOffer} hideSendOffer={hideSendOffer}/>
            }
            {
             sendOffer && <SendOffer showSendOffer={showSendOffer} hideSendOffer={hideSendOffer}/>
            }

            <div className='px-6 md:px-10 lg:px-16 pt-32 pb-20 bg-onboardinggray'>
                
                <p className='text-xl text-black font-bold pb-2 '>Results for {enteredData}</p>
                <p className='text-sm text-didallabody border-b border-gray-200 pb-4 mb-12'>Here is a list of creators from our pool of creators that match your requirements</p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                    {
                        creatorsObjOne.map(item =>(
                            <div className='border border-grayborder p-4 rounded bg-white' key={item.id}>
                                <div>
                                    <img className='' src={item.img} alt="creator avatar"/>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <div>
                                        <h1 className='text-didallablack text-base md:text-xl font-bold'>{item.name}</h1>
                                    </div>
                                    <div>
                                        <p className='text-didallabody'>{item.basicRate}-{item.premiumRate}</p>
                                    </div>

                                </div>
                                <div>
                                    <p className='text-didallabody mb-2'>{item.city}-{item.country}</p>
                                    <p className='text-didallabody mb-2'>{item.overview}</p>
                                </div>

                                <div className='grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-2 mb-3'>
                                    <div className='flex items-center '>
                                        <div className=' w-1/5'>
                                            <img className='w-16' src="/images/FacebookLogoRegister.svg" alt="facebook logo"/>
                                        </div>
                                        <div className='w-4/5 pl-4'>
                                            <p className='text-didallablack mb-1 text-sm font-bold'>{item.facebookFollowers}<br/>
                                                <span className='text-didallabody'>followers</span>
                                            </p>
                                        </div>

                                    </div>
                                    <div className='flex items-center '>
                                        <div className='w-1/5'>
                                            <img className='w-16' src="/images/TwitterLogoBlack.svg" alt="twitter logo"/>
                                        </div>
                                        <div className='w-4/5 pl-4'>
                                            <p className='text-didallablack mb-1 text-sm font-bold'>{item.instagramFollowers}<br/>
                                                <span className='text-didallabody'>followers</span>
                                            </p>
                                        </div>

                                    </div>
                                    <div className='flex items-center '>
                                        <div className='w-1/5'>
                                            <img className='w-16' src="/images/YoutubeLogoBlack.svg" alt="youtube logo"/>
                                        </div>
                                        <div className='w-4/5 pl-4'>
                                            <p className='text-didallablack mb-1 text-sm font-bold'>{item.youtubeFollowers}<br/>
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
        </div>
    )
}

export default VendorSearchResult
