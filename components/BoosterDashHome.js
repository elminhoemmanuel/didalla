import React, {useState, useEffect} from 'react'
import BoosterDashNav from './BoosterDashNav'
import {feedObjOne} from './FeedData'
import Link from 'next/link';
import axios from 'axios';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import ShowBoosterOffers from './ShowBoosterOffers';
import ShowBoosterProposals from './ShowBoosterProposals';
import CampaignDescription from './CampaignDescription';
import SubmitProposal from './SubmitProposal';

const BoosterDashHome = () => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#39B54A");

    const [isLoading2, setisLoading2] = useState(true);
    const [isLoading, setisLoading] = useState(true);
    const [isLoading3, setisLoading3] = useState(true);
    const [campaigns, setcampaigns] = useState([]);
    const [offers, setoffers] = useState([]);
    const [bids, setbids] = useState([]);
    const [singleCampaign, setSingleCampaign] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');

        axios.get(`https://api.didalla.com/api/campaign`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                // console.log(response.data.data);
                response.data.data.data.map(item =>{
                    campaigns.push(item);
                 })
                // console.log(campaigns);
                setisLoading2(!isLoading2)
            }, (error) => {
            console.log(error)
            
        });       
        axios.get(`https://api.didalla.com/api/bid`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                // console.log(response.data.data.data);
                response.data.data.data.map(item =>{
                    bids.push(item);
                 })
                // console.log(bids);
                setisLoading(!isLoading)
            }, (error) => {
            console.log(error)
            
        }); 

        axios.get(`https://api.didalla.com/api/offer/booster`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                console.log(response.data.data.data);
                response.data.data.data.map(item =>{
                    offers.push(item);
                 })
                console.log(offers);
                setisLoading3(!isLoading3)
            }, (error) => {
            console.log(error)
            
        });       
              
                
    }, [])

    const [showOffers, setshowOffers] = useState(false);
    const openShowOffers = () =>{
        setshowOffers(!showOffers);
        document.body.style.overflowY= 'hidden';
    }
    const closeShowOffers = () =>{
        setshowOffers(!showOffers);
        document.body.style.overflowY= 'visible';
    }

    const [showProposals, setshowProposals] = useState(false);
    const openShowProposals = () =>{
        setshowProposals(!showProposals);
        document.body.style.overflowY= 'hidden';
    }
    const closeShowProposals = () =>{
        setshowProposals(!showProposals);
        document.body.style.overflowY= 'visible';
    }

    const [showCampaignDesc, setshowCampaignDesc] = useState(false);
    const openShowCampaignDesc = () =>{
        setshowCampaignDesc(!showCampaignDesc);
        document.body.style.overflowY= 'hidden';
    }
    const closeShowCampaignDesc = () =>{
        setshowCampaignDesc(!showCampaignDesc);
        document.body.style.overflowY= 'visible';
    }

    const handleSingleCampaign = (item) =>{
        setSingleCampaign(item);
    }

    const [showSubmitProposal, setshowSubmitProposal] = useState(false);
    const openShowSubmitProposal = () =>{
        setshowSubmitProposal(!showSubmitProposal);
        document.body.style.overflowY= 'hidden';
    }
    const closeShowSubmitProposal = () =>{
        setshowSubmitProposal(!showSubmitProposal);
        document.body.style.overflowY= 'visible';
    }
    
    
    
    return (
        <div>
            {
                isLoading2 && isLoading && isLoading3 ? 

                <div className='flex justify-center items-center px-20 py-32'>
                <BeatLoader color={color}  loading={isLoading2&& isLoading && isLoading3} css={override} size={40} />
                </div>

                :

                <div>
                    <BoosterDashNav 
                    homeColour='text-didalla' 
                    campaignColour =""
                    creatorsColour = ""
                    messagesColour = ""
                    />

                    {
                        showOffers && <ShowBoosterOffers openShowOffers={openShowOffers} closeShowOffers={closeShowOffers} offers={offers}/>
                    }
                    {
                        showProposals && <ShowBoosterProposals openShowProposals={openShowProposals} closeShowProposals={closeShowProposals} bids={bids}/>
                    }
                    {
                        showCampaignDesc && <CampaignDescription openShowSubmitProposal={openShowSubmitProposal} closeShowCampaignDesc={closeShowCampaignDesc} singleCampaign={singleCampaign}/>
                    }
                    {
                        showSubmitProposal && <SubmitProposal openShowSubmitProposal={openShowSubmitProposal} closeShowSubmitProposal={closeShowSubmitProposal} singleCampaign={singleCampaign}/>
                    }

                    <div  className={
                        campaigns[0] ? 'bg-onboardinggray px-6 md:px-10 lg:px-16 pt-32 pb-64 flex flex-col-reverse md:flex-row ' :
                        'bg-onboardinggray px-6 md:px-10 lg:px-16 pt-32 pb-20 flex flex-col-reverse md:flex-row h-screen'
                    }>
                        <div className='w-full md:w-4/5 pt-6'>
                            <h1 className='text-didallablack text-2xl mb-6 font-bold'>My Feed</h1>
                            {
                                campaigns[0] ?
                                <div className='mt-2 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    {
                                        campaigns.map(item =>(
                                            <button onClick={()=>{
                                                openShowCampaignDesc();
                                                handleSingleCampaign(item);
                                            }} 
                                            type='button' className='block focus:outline-none'  key={item.id}>
                                                <div  className='bg-white rounded p-4 mb-5 block'>
                                                    <div className='flex items-center justify-between mb-2'>
                                                        <div>
                                                            <h1 className='text-xl text-didallablack font-bold'>{item.name}</h1>
                                                        </div>
                                                        <div>
                                                            <img src="/images/DashboardLoveBlack.svg" alt="like icon"/>
                                                        </div>
                                                    </div>
                                                        
                                                    <div className='mb-3'>
                                                        <p className='text-sm text-didallablack font-bold text-left'>{item.city} - 
                                                            <span className='text-didallabodytext-left'>{item.country}</span>
                                                        </p>
                                                    </div>

                                                    <div className=''>
                                                        

                                                        <div className='flex flex-row flex-nowrap items-center mb-3'>
                                                            <div className='mr-4'>
                                                                <p className='text-didallablack text-base font-bold text-left'>{item.budget}</p>
                                                                <p className='text-didallabody text-sm mb-1 text-left'>Budget</p>
                                                                
                                                            </div>
                                                            <div>
                                                                <p className='text-didallablack text-base font-bold text-left'>{item.start_date.substr(0,10)} - {item.end_date.substr(0,10)}</p>
                                                                <p className='text-didallabody text-sm mb-1 text-left'>Duration</p>
                                                                
                                                            </div>

                                                        </div>

                                                        <div>
                                                            <p className='text-didallabody text-sm mb-1 text-left'>{item.brief}</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </button>
                                        ))
                                    }
                                </div> :
                                <div>
                                    <h1 className='text-didallablack text-sm mb-6 font-bold'>No campaigns yet</h1>
                                </div>
                            }

                        </div>
                        <div className='w-full md:w-1/5'>
                            <div className='md:mt-16 mt-0 md:p-4'>
                                <button onClick={openShowOffers} className='text-black mb-3 p-4 md:p-1 lg:p-4 rounded font-bold text-lg md:text-sm text-center flex flex-row items-center justify-between w-full bg-white hover:bg-gray-300 whitespace-nowrap'>
                                    <div>
                                        Offers
                                    </div> 
                                    <div>
                                        <svg className="w-3 h-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                </button>
                                <button onClick={openShowProposals} className='text-black p-4 md:p-1 lg:p-4 rounded font-bold text-lg md:text-sm text-center flex flex-row items-center justify-between w-full bg-white hover:bg-gray-300 whitespace-nowrap'>
                                    <div>
                                        My proposals
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

export default BoosterDashHome
