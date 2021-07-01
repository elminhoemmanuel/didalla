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
import { creatorsObjOne } from './CreatorsData';


const SingleVendorCampaigns = ({
}) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#39B54A");

    const [isLoading, setisLoading] = useState(false);
    const [isLoading2, setisLoading2] = useState(true);
    const [campaigns, setcampaigns] = useState([])
    const [bids, setbids] = useState([])

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');    
                
    }, [])
    

    return (
        <div>
            {
                isLoading  ? 

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
                    />

                    <div className='bg-onboardinggray px-6 md:px-10 lg:px-16 pt-32 pb-20'>
                        <div className='w-full md:w-3/4 flex flex-col md:flex-row md:items-center justify-start md:justify-between mb-4 px-0 md:px-5'>
                            <div className='mb-1 md:mb-0'>
                                <div><h1 className='font-bold text-didallablack text-lg md:text-xl lg:text-xl'>Marvel's Place</h1></div>
                            </div>
                                                                                                                                
                        </div>

                        <div className='flex flex-col-reverse md:flex-row p-0 md:p-5'>
                            <div className='w-full md:w-4/5 '>
                                <div className='flex flex-row items-center'>
                                    <div className='pr-2 md:pr-5'>
                                        <button 
                                        className='focus:outline-none block whitespace-nowrap border-b-2 border-didalla py-2 ' type='button'>
                                            Creators
                                        </button>
                                    </div>

                                </div>

                                <div className='mt-2'>
                                    {
                                        
                                    }
                                </div>
                            </div>
                            

                        </div>


                    </div>
                </div>
            }
            
        </div>
    )
}


export default SingleVendorCampaigns
