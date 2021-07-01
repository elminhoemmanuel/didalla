import React, {useState} from 'react'
import Select from 'react-select';


const ShowBoosterProposals = ({ openShowProposals, closeShowProposals , bids }) => {

    return (
        <div className='absolute py-6 px-8 md:px-52 lg:px-80 w-full h-full bg-gray-700 bg-opacity-50 
        flex flex-col z-20 '>
            <div className='modal-box fixed w-4/5 lg:w-3/5 bg-white border border-gray-100 overflow-y-auto'>
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={closeShowProposals}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>My Bids</h1></div>
                    </div>
                </div>

                {
                    bids.map(item=>(
                        <div className='mb-3' key={item.id}>
        
                            <div className='px-6 py-4 border-b border-grayborder mb-3'>
                                <h1 className='text-sm text-black font-bold mb-2'>{item.campaign.name}</h1>
                                <p className='text-didallabody mb-3'>marvel's place - <span className='text-didallabody'>posted {item.created_at.substr(0,10)}</span></p>

                                <div className='flex items-center justify-start mb-4 text-sm'>
                                    <div className='mr-4 md:mr-6'>
                                        <h1 className=' text-didallablack font-bold'>{item.bid}</h1>
                                        <p className='text-didallabody'>Budget</p>
                                    </div>

                                    <div className=''>
                                        <h1 className=' text-didallablack font-bold'>{item.campaign.start_date.substr(0,10)} - {item.campaign.end_date.substr(0,10)}</h1>
                                        <p className='text-didallabody'>Campaign duration</p>
                                    </div>

                                </div>

                                
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ShowBoosterProposals
