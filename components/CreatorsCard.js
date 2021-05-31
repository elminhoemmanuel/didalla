import React from 'react'


const CreatorsCard = ({ creators , sendOffer , showSendOffer}) => {
    return ( 
        <div className='border border-grayborder p-4 rounded bg-white'>
            <div className='flex items-center justify-between mb-3'>
                <div className='flex items-center'>
                    <div className='mr-3'>
                        <img className='h-8 w-8 rounded' src={creators.photo_url} alt="creator avatar" />
                    </div>
                    <div>
                        <h1 className='text-didallablack text-sm font-bold'>{creators.user.first_name} {creators.user.last_name}</h1>
                        <p className='text-didallabody'>{creators.city}, {creators.country}</p>
                    </div>

                </div>
                <div>
                    <img className='' src="/images/BlackHeart.svg" alt="love icon" />
                </div>
            </div>

            <div className='flex items-center justify-between mb-3'>
                <div className=''>
                    <p className='text-didallabody text-sm mb-1'>Networks</p>
                    <div className='flex flex-row flex-nowrap items-center'>
                        {creators.facebook && <div><img src="/images/DashboardFacebook.svg" alt="facebook logo"/></div>}
                        {creators.twitter && <div><img src="/images/DashboardTwitter.svg" alt="Twitter logo"/></div>}
                        {creators.youtube && <div><img src="/images/DashboardYoutube.svg" alt="Youtube logo"/></div>}
                    </div>
                </div>

                <div className='text-right'>
                    <h1 className='text-didallabody '>Total followers</h1>
                    <p className='text-didallablack font-bold'>2M</p>
                </div>

            </div>

            <div>
                <button onClick={showSendOffer} className='text-white p-2 rounded font-bold text-sm text-center block w-full bg-didalla hover:bg-green-600 whitespace-nowrap'>
                    Send offer
                </button>
            </div>
            
        </div>
    )
}

export default CreatorsCard
