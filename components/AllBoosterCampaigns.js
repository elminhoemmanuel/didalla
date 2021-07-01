import React from 'react'

const AllBoosterCampaigns = ({campaigns, openShowSingleCampaign, closeShowAllCampaigns, getSingleCampaign}) => {
    return (
        <div className='mt-2 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    {
                                        campaigns.map(item =>(
                                            <button onClick={()=>{
                                                closeShowAllCampaigns();
                                                openShowSingleCampaign();
                                                getSingleCampaign(item);
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
        </div>
    )
}

export default AllBoosterCampaigns
