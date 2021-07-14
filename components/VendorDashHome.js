import React, { useState, useEffect }from 'react'
import VendorDashNav from './VendorDashNav'
import {DashboardInterests} from './DashboardInterestsData'
import Link from 'next/link';
import { useRouter } from 'next/router'
import CreatorsCard from './CreatorsCard'
import CreatorsSlide from './CreatorsSlide';
import SendOffer from './SendOffer';
import ViewProfile from './ViewProfile';
import StartCampaign from './StartCampaign';
import axios from 'axios';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";



const VendorDashHome = ({
    
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
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchArrived, setSearchArrived] = useState(false);   
    const [showFilter, setshowFilter] = useState(false);   

    const [boosters, setboosters] = useState([]);
    const [searchBoosters, setSearchBoosters] = useState([]);
    const [countries, setcountries] = useState([]);
    const [campaigns, setcampaigns] = useState([]);
    const [singleBooster, setsingleBooster] = useState()
    const [selectedCountry, setSelectedCountry] = useState()
    const [selectedPlatform, setSelectedPlatform] = useState()
    const [selectedBudget, setSelectedBudget] = useState()
    const [selectedTopic, setSelectedTopic] = useState()


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
            setisLoading(!isLoading)
            
        }, (error) => {
          console.log(error)
        });

        axios.get(`https://api.didalla.com/api/booster?network=all&budget=all&location=all&topic=all`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                console.log(response);
                response.data.data.data.map(item =>{
                    boosters.push(item);
                })
                console.log(boosters);
                localStorage.setItem("boosters",JSON.stringify(response.data.data.data))
                setisLoading2(!isLoading2);
            }, (error) => {
            console.log(error)
        });  

        axios.get(`https://api.didalla.com/api/campaign/vendor`, 
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
                setisLoading3(!isLoading3)
            }, (error) => {
            console.log(error)          
        });

                
    }, []) 

    

    const router = useRouter()

    const [sendOffer, setsendOffer] = useState(false);
    const showSendOffer = () =>{
        setsendOffer(!sendOffer);
        document.body.style.overflowY= 'hidden';
    }
    
    const hideSendOffer = () =>{
        setsendOffer(!sendOffer);
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
    const [viewProfile, setviewProfile] = useState(false);
    const hideViewProfile = () =>{
        setviewProfile(!viewProfile);
        document.body.style.overflowY= 'hidden';
    }
    const showViewProfile = () =>{
        setviewProfile(!viewProfile);
        document.body.style.overflowY= 'visible';
    }

    const addSingleBooster = (item) =>{
        setsingleBooster(item);
    }

    const getSearchBoosters = (e)=>{
        e.preventDefault();
        setSearchLoading(true);
        console.log(selectedCountry,selectedBudget,selectedPlatform,selectedTopic);

        const userToken = localStorage.getItem('userToken');

        axios.get(`https://api.didalla.com/api/booster?network=${selectedPlatform}&budget=${selectedBudget}&location=${selectedCountry}&topic=${selectedTopic}`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                console.log(response);
                setSearchBoosters(response.data.data.data);
                // response.data.data.data.map(item =>{
                //     searchBoosters.push(item);
                // })
                console.log(searchBoosters);
                setSearchLoading(false);
                setSearchArrived(true)
            }, (error) => {
            console.log(error)
        });  
    }

    return (
        <div className='relative'>
            {
                isLoading && isLoading2 && boosters!==[] && isLoading3 ? 

                <div className='flex justify-center items-center px-20 py-32'>
                <BeatLoader color={color}  loading={isLoading && isLoading2} css={override} size={40} />
                </div> 

                : 
                <div>

                        <VendorDashNav 
                        homeColour='text-didalla' 
                        campaignColour =""
                        creatorsColour = ""
                        messagesColour = ""
                        />


                        {
                        startCampaign && <StartCampaign countries={countries} openStartCampaign={openStartCampaign} closeStartCampaign={closeStartCampaign}/>
                        }

                        {
                        sendOffer && <SendOffer hideSendOffer={hideSendOffer} booster={singleBooster} campaigns={campaigns} />
                        }

                        {
                        viewProfile && <ViewProfile booster={singleBooster} showSendOffer={showSendOffer} showViewProfile={showViewProfile} hideViewProfile={hideViewProfile} addSingleBooster={addSingleBooster}/>
                        }

                        <div  className='bg-onboardinggray px-6 md:px-10 pt-32 pb-64 flex flex-col-reverse md:flex-row '>


                            {/* discover box */}
                            <div className='w-full md:w-3/4 pr-4'>
                                <div className='flex items-center justify-between mb-3'>
                                    <div className=''>
                                        <h1 className='font-bold text-didallablack text-lg md:text-xl lg:text-xl'>Discover</h1>
                                    </div>
                                    <div className='md:hidden'>
                                        <button onClick={()=>{setshowFilter(!showFilter)}} className='p-2 rounded text-sm text-center flex flex-row items-center justify-between w-full bg-white hover:bg-gray-300 whitespace-nowrap'>
                                            <div>
                                                <img src="/images/Funnel.svg" alt="filter icon" />
                                            </div>
                                            <div>
                                                &nbsp;Filter
                                            </div> 
                                            
                                        </button>
                                    </div>
                                </div>

                                <div className={showFilter ? 'mb-5' : 'mb-5 hidden md:block'}>
                                    <form action="" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2'>
                                        <div className=''>
                                            <select id=''
                                            className='w-full p-2 rounded bg-white focus:outline-none
                                            focus:border-didalla' value={selectedPlatform} onChange={(e)=>{setSelectedPlatform(e.target.value)}}
                                            >
                                                <option value="platform">Platform</option>
                                                <option value="facebook">facebook</option>
                                                <option value="twitter">twitter</option>
                                                <option value="instagram">instagram</option>
                                                <option value="youtube">youtube</option>
                                                <option value="substack">substack</option>
                                            </select>
                                        </div>

                                        <div className=''>
                                            <select id=''
                                            className='w-full p-2 rounded bg-white focus:outline-none
                                            focus:border-didalla' value={selectedBudget} onChange={(e)=>{setSelectedBudget(e.target.value)}}
                                            >
                                                <option value="budget">Budget($)</option>
                                                <option value="100">100-500</option>
                                                <option value="500">500-1000</option>
                                                <option value="1000">1000-2000</option>
                                                <option value="2500">2500-5000</option>
                                                <option value="5000">5000-10000</option>
                                            </select>
                                        </div>

                                        <div className=''>
                                            <select id=''
                                            className='w-full p-2 rounded bg-white focus:outline-none
                                            focus:border-didalla' value={selectedTopic} onChange={(e)=>{setSelectedTopic(e.target.value)}}
                                            >
                                                <option value="topic">Keywords</option>
                                                <option value="fashion">Fashion</option>
                                                <option value="food">Food</option>
                                                <option value="arts">Arts</option>
                                                <option value="crypto">Crypto</option>
                                                <option value="tourism">Tourism</option>
                                                <option value="tech">Tech</option>
                                            </select>
                                        </div>

                                        <div className=''>
                                            <select name="country" value={selectedCountry} 
                                            onChange={(e) =>{setSelectedCountry(e.target.value);}}  id="country" className='w-full p-2 rounded bg-white focus:outline-none
                                            focus:border-didalla'>
                                                {countries.map((item ) =>(
                                                    <option key={item.id} className='p-1 hover:bg-didalla' value={item.name} >{item.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className=''>
                                            <button className='text-white p-2 rounded font-bold text-sm text-center block w-full 
                                            border border-didalla hover:border-green-600 bg-didalla hover:bg-green-600 whitespace-nowrap focus:outline-none'
                                            onClick={getSearchBoosters}
                                            >
                                                Search
                                            </button>
                                        </div>

                                    </form>
                                </div>

                                {
                                    searchArrived &&
                                    <div>
                                        {
                                            !searchBoosters[0] ?
                                            <div className='flex items-center justify-between mb-1'>
                                                <div className=''><p className='text-base text-didallablack font-bold text-center'>No matching results</p></div>
                                            </div> :
                                            <div className='flex items-center justify-between mb-1 '>
                                                <div className=''><p className='text-base text-didallablack font-bold'>Search Results</p></div>
                                            </div>
                                        }
                                    </div>
                                }

                                {
                                    searchLoading ?
                                    <div className='flex justify-center items-center px-20 py-32'>
                                        <BeatLoader color={color}  loading={searchLoading} css={override} size={40} />
                                    </div> :
                                    <div className='mb-8'>
                                            <div className='hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-4'>
                                                
                                                {
                                                    searchBoosters.map(item=>(
                                                        <div className='border border-grayborder p-4 rounded bg-white' key={item.id}>
                                                            <div>
                                                                <img className='h-10 w-10 rounded-full' src={item.photo_url} alt="creator avatar"/>
                                                            </div>
                                                            <div className='flex items-center justify-between mt-1'>
                                                                <div>
                                                                    <h1 className='text-didallablack text-base md:text-xl font-bold'>{item.user.first_name} - {item.user.last_name}</h1>
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
                                                                {
                                                                    item.facebook && 
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
                                                                    item.twitter && 
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

                                                            <div className='flex items-center flex-nowrap'>

                                                                <div className='flex items-center justify-end'>
                                                                    <button type='submit' onClick={()=>{
                                                                        setsingleBooster(item);
                                                                        showSendOffer();
                                                                    }} className="block w-full md:w-auto py-3 px-6  text-center bg-didalla rounded border border-didalla
                                                                        font-bold text-white hover:bg-green-600 focus:outline-none text-xs md:text-sm">
                                                                        Send offer
                                                                    </button>
                                                                </div>

                                                                <div className='ml-2'>
                                                                    <button type='button' onClick={()=>{
                                                                        setsingleBooster(item);
                                                                        showViewProfile();
                                                                    }} className="block w-full md:w-auto py-3 px-6 text-center bg-transparent text-didalla rounded 
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

                                <div className='md:hidden mb-6'>
                                    <div className=' md:hidden'><p className='text-base text-didallablack font-bold mb-2'>Top Creators</p></div>
                                    <CreatorsSlide showViewProfile={showViewProfile} hideViewProfile={hideViewProfile} addSingleBooster={addSingleBooster}
                                    boosters={boosters} showSendOffer={showSendOffer}  hideSendOffer={hideSendOffer} />
                                </div>

                                <div className='mb-3 md:hidden'>
                                    <div className='bg-didallablack rounded p-3'>
                                        <h1 className='text-base md:text-lg text-white'>Ready to start </h1>
                                        <h1 className='text-base md:text-lg text-white mb-5'>a new campaign?</h1>
                                        <button onClick={openStartCampaign} className='text-didalla py-2 font-bold text-base flex items-center focus:outline-none whitespace-nowrap'>
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
                                </div>

                                
                                <div className='mb-8'>
                                            <div className='md:flex items-center justify-between mb-1 hidden '>
                                                <div className=''><p className='text-base text-didallablack font-bold'>Top Creators</p></div>
                                            </div>
                                            {
                                                boosters[0] ?
                                                <div className='hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-4'>
                                                {
                                                    boosters.map(item=>(
                                                        <div className='border border-grayborder p-4 rounded bg-white' key={item.id}>
                                                            <div>
                                                                <img className='h-10 w-10 rounded-full' src={item.photo_url} alt="creator avatar"/>
                                                            </div>
                                                            <div className='flex items-center justify-between mt-1'>
                                                                <div>
                                                                    <h1 className='text-didallablack text-base md:text-xl font-bold'>{item.user.first_name} - {item.user.last_name}</h1>
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
                                                                {
                                                                    item.facebook && 
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
                                                                    item.twitter && 
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

                                                            <div className='flex items-center flex-nowrap'>

                                                                <div className='flex items-center justify-end'>
                                                                    <button type='submit' onClick={()=>{
                                                                        setsingleBooster(item);
                                                                        showSendOffer();
                                                                    }} className="block w-full md:w-auto py-3 px-6  text-center bg-didalla rounded border border-didalla
                                                                        font-bold text-white hover:bg-green-600 focus:outline-none text-xs md:text-sm">
                                                                        Send offer
                                                                    </button>
                                                                </div>

                                                                <div className='ml-2'>
                                                                    <button type='button' onClick={()=>{
                                                                        setsingleBooster(item);
                                                                        showViewProfile();
                                                                    }} className="block w-full md:w-auto py-3 px-6 text-center bg-transparent text-didalla rounded 
                                                                    font-bold hover:text-green-600  focus:outline-none  text-sm md:text-base"  
                                                                        
                                                                    >
                                                                        View profile
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    ))
                                                } 
                                                
                                            </div> :
                                            <div className='hidden md:block'>
                                                <h1 className='text-didallablack text-sm mb-6 font-bold'>No content creators yet</h1>
                                            </div>
                                            }
                                </div>

                                {/* <div className='pl-0'>
                                    <p className='text-base text-didallablack font-bold mb-10'>Popular interests</p>

                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                                        {
                                            DashboardInterests.map(item =>(
                                                
                                                    <button key={item.id} onClick={
                                                        () =>{
                                                            router.push(`/dashboard/vendor/result/${item.link}`)
                                                        }
                                                    } type='button' className='block focus:outline-none'>
                                                        <div className='mb-2'>
                                                            <img className='h-48 w-full' src={item.img} alt={item.alt}/>
                                                        </div>

                                                        <div className='mb-3 text-left'>
                                                            <h2 className='text-didallablack text-base font-bold '>{item.name}</h2>
                                                            <p className='text-didallablack text-sm'>{item.creatorsNum} creators</p>
                                                        </div>
                                                    </button>
                                                
                                            ))
                                        }

                                    </div>

                                </div> */}

                            </div>
                            <div className='hidden md:block w-full  md:w-1/4 mb-3'>
                                <div className='bg-didallablack rounded p-6'>
                                    <h1 className='text-base md:text-lg text-white'>Ready to start </h1>
                                    <h1 className='text-base md:text-lg text-white mb-5'>a new campaign?</h1>
                                    <button onClick={openStartCampaign} className='text-white p-3 rounded font-bold text-sm text-center block w-full bg-didalla hover:bg-green-600 whitespace-nowrap focus:outline-none'>
                                        Get Started
                                    </button>

                                </div>
                            </div>

                        </div>

                </div>
            }
        </div>
    )
}



export default VendorDashHome
