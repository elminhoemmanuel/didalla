import React, { useState, useEffect }from 'react'
import BoosterDashNav from './BoosterDashNav'
import Link from 'next/link';
import { useRouter } from 'next/router'
import AllBoosterCampaigns from './AllBoosterCampaigns';
import SingleBoosterCampaign from './SingleBoosterCampaign';
import axios from 'axios';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";


const BoosterCampaigns = ({
}) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#39B54A");

    const [isLoading2, setisLoading2] = useState(true);
    const [countries, setCountries] = useState([]);
    const [campaigns, setcampaigns] = useState([]);
    const [singleCampaign, setSingleCampaign] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');

        axios.get(`https://api.didalla.com/api/campaign/get_booster_campaigns`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                console.log(response.data.data);
                response.data.data.map(item =>{
                    campaigns.push(item);
                 })
                console.log(campaigns);
                setisLoading2(!isLoading2)
            }, (error) => {
            console.log(error)
            
        });       
                
    }, [])

    const [showAllCampaigns, setshowAllCampaigns] = useState(true);
    const openShowAllCampaigns = () =>{
        setshowAllCampaigns(!showAllCampaigns);
    }
    const closeShowAllCampaigns = () =>{
        setshowAllCampaigns(!showAllCampaigns);
    }
    const [showSingleCampaign, setshowSingleCampaign] = useState(false);
    const openShowSingleCampaign = () =>{
        setshowSingleCampaign(!showSingleCampaign);
    }
    const closeShowSingleCampaign = () =>{
        setshowSingleCampaign(!showSingleCampaign);
    }
    
    const getSingleCampaign = (item) =>{
        setSingleCampaign(item);
    }
    
    

    return (
        <div>
            {
                isLoading2 ? 

                <div className='flex justify-center items-center px-20 py-32'>
                <BeatLoader color={color}  loading={isLoading2} css={override} size={40} />
                </div> 
                
                : 

                <div>
                    <BoosterDashNav 
                    homeColour='' 
                    campaignColour ="text-didalla"
                    creatorsColour = ""
                    messagesColour = ""
                    />

                    <div className={
                        campaigns[0] ?
                        'bg-onboardinggray px-6 md:px-10 lg:px-16 pt-32 pb-64' :
                        'bg-onboardinggray px-6 md:px-10 lg:px-16 pt-32 pb-20 h-screen'
                    }>
                        <div className='w-full md:w-3/4 flex flex-col md:flex-row md:items-center justify-start md:justify-between mb-4 px-0 md:px-5'>
                            <div className='mb-1 md:mb-0'>
                                <div><h1 className='font-bold text-didallablack text-lg md:text-xl lg:text-xl'>Campaigns</h1></div>
                            </div>
                                                                                                                                
                        </div>

                        <div className='flex flex-col-reverse md:flex-row p-0 md:p-5'>
                            <div className='w-full md:w-4/5 '>
                                <div className='flex flex-row items-center'>
                                    <div className='pr-2 md:pr-5'>
                                        {
                                            campaigns[0] ?
                                            <button 
                                            className='focus:outline-none block whitespace-nowrap border-b-2 border-didalla py-2 ' type='button'>
                                                Active ({campaigns.length})
                                            </button> :
                                            <div>
                                                <h1 className='text-didallablack text-sm mb-6 font-bold'>No campaigns yet</h1>
                                            </div>
                                        }
                                    </div>
                                    

                                </div>

                               {
                                  showAllCampaigns && 
                                  <AllBoosterCampaigns campaigns={campaigns} closeShowAllCampaigns={closeShowAllCampaigns} getSingleCampaign={getSingleCampaign} 
                                  openShowSingleCampaign={openShowSingleCampaign}
                                  /> 
                               } 
                               {
                                  showSingleCampaign && 
                                  <SingleBoosterCampaign closeShowSingleCampaign={closeShowSingleCampaign} singleCampaign={singleCampaign} 
                                  openShowAllCampaigns={openShowAllCampaigns}
                                  /> 
                               } 
                            </div>
                            

                        </div>


                    </div>
                </div>
            }
            
        </div>
    )
}


export default BoosterCampaigns
