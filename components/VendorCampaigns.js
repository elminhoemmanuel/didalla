import React, { useState, useEffect }from 'react'
import VendorDashNav from './VendorDashNav'
import {DashboardInterests} from './DashboardInterestsData'
import Link from 'next/link';
import { useRouter } from 'next/router'
import {campaignObjOne} from './CampaignData'
import ShowCreatorBids from './ShowCreatorBids';
import StartCampaign from './StartCampaign';
import axios from 'axios';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";


const VendorCampaigns = ({
}) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#39B54A");

    const [isLoading, setisLoading] = useState(true);
    const [isLoading2, setisLoading2] = useState(true);
    const [isLoading3, setisLoading3] = useState(true);
    const [isLoading4, setisLoading4] = useState(true);
    const [campaigns, setcampaigns] = useState([])
    const [countries, setcountries] = useState([]);
    const [user, setuser] = useState();
    const [bids, setbids] = useState([])

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');

        //axios call for creator country details
        axios.get(`https://api.didalla.com/api/misc/countries`)
        .then((response) => {
            // console.log(response.data.data);
            response.data.data.map(item =>{
               countries.push(item);
            })
            // console.log(countries)
            setisLoading3(!isLoading3)
            
        }, (error) => {
          console.log(error)
        });

        axios.get(`https://api.didalla.com/api/campaign`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                // console.log(response.data.data.data);
                response.data.data.data.map(item =>{
                    campaigns.push(item);
                 })
                // console.log(campaigns);
                setisLoading2(!isLoading2)
            }, (error) => {
            console.log(error)
            
        });        
                
    }, [])


    // useEffect(() => {
    //     const userToken = localStorage.getItem('userToken');
    //     //axios call for user details
    //     axios.get(`https://api.didalla.com/api/user`, 
    //         {
    //             headers: {
    //             'Authorization': `Bearer ${userToken}`
    //             }}
    //         )
    //         .then((response) => {
    //             console.log(response.data);
    //             setuser(response.data)
    //             console.log(user);
    //             setisLoading4(!isLoading4)
    //         }, (error) => {
    //         console.log(error)          
    //     });
        
    // }, [isLoading4])

    const [showBids, setshowBids] = useState(false);
    const openShowBids = () =>{
        setshowBids(!showBids);
        document.body.style.overflowY= 'hidden';
    }
    const closeShowBids = () =>{
        setshowBids(!showBids);
        document.body.style.overflowY= 'visible';
    }
    
    const [startCampaign, setStartCampaign] = useState(false);
    const openStartCampaign = () =>{
        setStartCampaign(!startCampaign);
        document.body.style.overflowY= 'hidden';
    }
    const closeStartCampaign = () =>{
        setStartCampaign(!startCampaign);
        document.body.style.overflowY= 'visible';
    }
    
    

    return (
        <div>
            {
                isLoading && isLoading2 && isLoading3 && isLoading4 ? 

                <div className='flex justify-center items-center px-20 py-32'>
                <BeatLoader color={color}  loading={isLoading} css={override} size={40} />
                </div> 
                
                : 

                <div>
                    <VendorDashNav 
                    homeColour='' 
                    campaignColour ="text-didalla"
                    creatorsColour = ""
                    messagesColour = ""
                    // user={user}
                    />

                    {
                        startCampaign && <StartCampaign countries={countries} openStartCampaign={openStartCampaign} closeStartCampaign={closeStartCampaign}/>
                    }
                    {
                        showBids && <ShowCreatorBids openShowBids={openShowBids} closeShowBids={closeShowBids}/>
                    }

                    <div className='bg-onboardinggray px-6 md:px-10 lg:px-16 pt-32 pb-20'>
                        <div className='w-full md:w-3/4 flex flex-col md:flex-row md:items-center justify-start md:justify-between mb-4 px-0 md:px-5'>
                            <div className='mb-1 md:mb-0'>
                                <div><h1 className='font-bold text-didallablack text-lg md:text-xl lg:text-xl'>Campaigns</h1></div>
                            </div>
                                                                                                                                
                        </div>

                        <div className='flex flex-col-reverse md:flex-row p-0 md:p-5'>
                            <div className='w-full md:w-4/5 '>
                                <div className='flex flex-row items-center'>
                                    <div className='pr-2 md:pr-5'>
                                        <button 
                                        className='focus:outline-none block whitespace-nowrap border-b-2 border-didalla py-2 ' type='button'>
                                            Active campaigns (4)
                                        </button>
                                    </div>

                                </div>

                                <div className='mt-2'>
                                    {
                                        campaigns.map(item =>(
                                            <Link href='/dashboard/vendor/campaigns' key={item.id}>
                                                <a  className='bg-white rounded p-4 mb-5 block'>
                                                    <div className='flex items-center justify-between mb-2'>
                                                        <div>
                                                            <h1 className='text-xl text-didallablack font-bold'>{item.name}</h1>
                                                        </div>
                                                        <div>
                                                            <svg className="w-6 h-6 text-didallablack" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                                                        </div>
                                                    </div>
                                                        
                                                    <div className='mb-3'>
                                                        <p className='text-sm text-didallablack font-bold'>{item.city} - 
                                                            <span className='text-didallabody'>{item.country}</span>
                                                        </p>
                                                    </div>

                                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                                                        <div>
                                                            <p className='text-didallabody text-sm mb-1'>Networks</p>
                                                            <div className='flex flex-row flex-nowrap items-center'>
                                                                {item.network && <div><img src="/images/DashboardFacebook.svg" alt="facebook logo"/></div>}
                                                                {item.network && <div><img src="/images/DashboardTwitter.svg" alt="Twitter logo"/></div>}
                                                                {item.network && <div><img src="/images/DashboardYoutube.svg" alt="Youtube logo"/></div>}
                                                            </div>
                                                        </div>

                                                        <div className='flex flex-row flex-nowrap items-center'>
                                                            <div className='mr-4'>
                                                                <p className='text-didallabody text-sm mb-1'>Start date</p>
                                                                <p className='text-didallablack text-base font-bold'>{item.start_date.substr(0,10)}</p>
                                                            </div>
                                                            <div>
                                                                <p className='text-didallabody text-sm mb-1'>End date</p>
                                                                <p className='text-didallablack text-base font-bold'>{item.end_date.substr(0,10)}</p>
                                                            </div>

                                                        </div>

                                                        <div className=''>
                                                            <p className='text-didallabody text-sm mb-1 lg:text-right'>Creators engaged</p>
                                                            <p className='text-didallablack text-base lg:text-right'>10</p>
                                                        </div>

                                                    </div>
                                                </a>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='w-full md:w-1/4 pl-0 md:pl-3 mt-12'>

                                <div className='bg-didallablack rounded p-6 mb-4 hidden md:block'>
                                    <h1 className='text-base md:text-lg text-white'>Ready to start </h1>
                                    <h1 className='text-base md:text-lg text-white mb-5'>a new campaign?</h1>
                                    <button onClick={openStartCampaign} className='text-white p-3 rounded font-bold text-sm text-center block w-full bg-didalla hover:bg-green-600 whitespace-nowrap'>
                                        Get Started
                                    </button>

                                </div>

                                <div className='bg-didallablack rounded p-3 md:hidden mb-4'>
                                    <h1 className='text-base md:text-lg text-white'>Ready to start </h1>
                                    <h1 className='text-base md:text-lg text-white mb-5'>a new campaign?</h1>
                                    <button onClick={openStartCampaign} className='text-didalla py-2 font-bold text-base flex items-center whitespace-nowrap'>
                                        <div className='text-base'>
                                            Get Started &nbsp;&nbsp;
                                        </div> 
                                        <div className='text-base'>
                                            <svg className='w-5 h-5' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 0.5C5.71442 0.5 4.45772 0.881218 3.3888 1.59545C2.31988 2.30968 1.48676 3.32484 0.994786 4.51256C0.502816 5.70028 0.374095 7.00721 0.624899 8.26809C0.875703 9.52896 1.49477 10.6872 2.40381 11.5962C3.31285 12.5052 4.47104 13.1243 5.73192 13.3751C6.99279 13.6259 8.29973 13.4972 9.48744 13.0052C10.6752 12.5132 11.6903 11.6801 12.4046 10.6112C13.1188 9.54229 13.5 8.28558 13.5 7C13.498 5.2767 12.8126 3.62456 11.594 2.40601C10.3754 1.18745 8.7233 0.501992 7 0.5ZM9.96155 7.19092C9.93646 7.25196 9.89954 7.30743 9.85291 7.35413L7.73242 9.47461C7.63863 9.5682 7.51152 9.62073 7.37902 9.62066C7.24652 9.62059 7.11946 9.56793 7.02577 9.47423C6.93208 9.38054 6.87941 9.25348 6.87934 9.12098C6.87927 8.98848 6.9318 8.86137 7.02539 8.76758L8.29297 7.5H4.5C4.36739 7.5 4.24022 7.44732 4.14645 7.35355C4.05268 7.25979 4 7.13261 4 7C4 6.86739 4.05268 6.74021 4.14645 6.64645C4.24022 6.55268 4.36739 6.5 4.5 6.5H8.29297L7.02539 5.23242C6.9318 5.13863 6.87927 5.01152 6.87934 4.87902C6.87941 4.74651 6.93208 4.61946 7.02577 4.52577C7.11946 4.43207 7.24652 4.37941 7.37902 4.37934C7.51152 4.37927 7.63863 4.4318 7.73242 4.52539L9.85291 6.64587C9.92274 6.71589 9.97031 6.80499 9.98964 6.90197C10.009 6.99895 9.9992 7.09948 9.96155 7.19092V7.19092Z" fill="#39B54A"/>
                                            </svg>
                                        </div>

                                    </button>

                                </div>

                                <button onClick={openShowBids} className='text-black mb-3 p-3 lg:p-4 rounded font-bold text-sm text-center flex flex-row items-center justify-between w-full bg-white hover:bg-gray-300 whitespace-nowrap'>
                                    <div>
                                        Creator bids
                                    </div> 
                                    <div>
                                        <svg className="w-3 h-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                </button>

                            </div>

                        </div>


                    </div>
                </div>
            }
            
        </div>
    )
}


export default VendorCampaigns
