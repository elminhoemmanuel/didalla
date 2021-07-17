import React, {useState} from 'react'
import Select from 'react-select';


const CampaignDescription = ({ openShowSubmitProposal, closeShowCampaignDesc, singleCampaign }) => {

    return (
        <div className='absolute py-6  w-full h-screen bg-gray-700 bg-opacity-50 
        flex flex-col items-center justify-center z-20 '>
            <div className='modal-box fixed w-4/5 lg:w-3/5 h-full bg-white border border-gray-100 overflow-y-auto'>
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={closeShowCampaignDesc}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mb-2'>
                    <div className='px-6 py-4 border-b border-grayborder mb-3'>
                        <h1 className='text-sm text-black font-bold mb-2'>{singleCampaign.name}</h1>
                        <p className='text-didallabody mb-3'>marvel's place - <span className='text-didallabody'>posted {singleCampaign.created_at.substr(0,10)}</span></p>
                        <div className='flex items-center'>
                            <div><img className='mr-1' src="/images/Location.svg" alt="location icon" /></div>
                            <div>
                                <p className='text-didallabody'>{singleCampaign.city} - <span className='text-didallabody'>{singleCampaign.country}</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-6 py-2 border-b border-grayborder'>
                    <p className='text-didallabody'>{singleCampaign.brief}</p>
                </div>
                <div className='px-6 py-2 border-b border-grayborder'>
                    <h1 className='text-sm text-black font-bold mb-2'>Networks</h1>
                    <div className='flex items-center'>
                            {singleCampaign.network.includes('instagram') && 
                            <div className='mr-2 rounded p-2 bg-grayborder flex items-center flex-nowrap'>
                                <div className='mr-1'>
                                    <img src="/images/InstagramLogoBlack.svg" alt="Instagram Logo" />
                                </div>
                                <div>
                                    Instagram
                                </div>
                            </div>
                            }
                            {singleCampaign.network.includes('twitter') && 
                            <div className='mr-2 rounded p-2 bg-grayborder flex items-center flex-nowrap'>
                                <div className='mr-1'>
                                    <img src="/images/TwitterLogoBlack.svg" alt="Twitter Logo" />
                                </div>
                                <div>
                                    Twitter
                                </div>
                            </div>
                            }
                            {singleCampaign.network.includes('youtube') && 
                            <div className='mr-2 rounded p-2 bg-grayborder flex items-center flex-nowrap'>
                                <div className='mr-1'>
                                    <img src="/images/YoutubeLogoBlack.svg" alt="Youtube Logo" />
                                </div>
                                <div>
                                    Youtube
                                </div>
                            </div>
                            }
                            {singleCampaign.network.includes('facebook') && 
                            <div className='mr-2 rounded p-2 bg-grayborder flex items-center flex-nowrap'>
                                <div className='mr-1'>
                                    <img src="/images/FacebookLogoRegister.svg" alt="Facebook Logo" />
                                </div>
                                <div>
                                    Facebook
                                </div>
                            </div>
                            }

                    </div>

                    <div className='mt-5 flex items-center'>
                        <div className='flex items-center mr-6'>
                            <div className='mr-2'>
                                <img className='' src="/images/Dollar.svg" alt="Rates icon" />
                            </div>

                            <div className=''>
                                <p className='text-didallablack text-base font-bold text-left'>{singleCampaign.budget}</p>
                                <p className='text-didallabody text-sm mb-1 text-left'>Budget</p>                         
                            </div>

                        </div>
                        <div className='flex items-center '>
                            <div className='mr-2'>
                                <img className='' src="/images/Clock.svg" alt="duration icon" />
                            </div>

                            <div className=''>
                                <p className='text-didallablack text-base font-bold text-left'>{singleCampaign.start_date.substr(0,7)} - {singleCampaign.end_date.substr(0,7)}</p>
                                <p className='text-didallabody text-sm mb-1 text-left'>Duration</p>                         
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex flex-row items-center justify-end mb-3 mt-6 px-6'>

                                {/* <div>
                                    <button type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-transparent text-didalla rounded 
                                    font-bold hover:text-green-600 text-sm  focus:outline-none mr-2 text-sm md:text-base"  
                                    onClick={closeShowCampaignDesc}  
                                    >
                                        Save Campaign
                                    </button>
                                </div> */}

                                <div className='flex items-center justify-end'>
                                    <button type='submit' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2"
                                        onClick={()=>{
                                            closeShowCampaignDesc(); 
                                            openShowSubmitProposal();
                                        }}
                                        >
                                        Submit Proposal
                                    </button>
                                </div>

                </div>
            </div>
            
        </div>
    )
}

export default CampaignDescription
