import React, {useState} from 'react'
import Select from 'react-select';


const ShowCreatorBids = ({ openShowBids, closeShowBids, bids, singleCampaign}) => {

    return (
        <div className='absolute py-6  w-full h-screen bg-gray-700 bg-opacity-50 
        flex flex-col items-center justify-center z-20 '>
            <div className='modal-box fixed w-4/5 lg:w-3/5 h-full bg-white border border-gray-100 overflow-y-auto'>
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={closeShowBids}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>Creator bids</h1></div>
                    </div>
                </div>

                <div>
        
                    {
                        bids.length === 0 ?
                        <div className='text-didallabody text-sm px-6 py-4'>
                            There are no bids yet
                        </div>
                        :
                        <div>
                        {
                            bids.map(item=>(
                                <div className='px-6 py-4 border-b border-grayborder mb-3' key={item.id}>
                                    <h1 className='text-sm text-black font-bold mb-2'>{singleCampaign.name}</h1>
                                    <p className='text-didallabody mb-3'><span className='text-didallabody'>posted {singleCampaign.created_at.substr(0,10)}</span></p>

                                    <div className='flex items-center justify-start mb-4 text-sm'>
                                        <div className='mr-4 md:mr-6'>
                                            <h1 className=' text-didallablack font-bold'>{singleCampaign.budget}</h1>
                                            <p className='text-didallabody'>Budget</p>
                                        </div>

                                        <div className=''>
                                            <h1 className=' text-didallablack font-bold'>{singleCampaign.start_date.substr(0,10)} to {singleCampaign.end_date.substr(0,10)}</h1>
                                            <p className='text-didallabody'>Campaign duration</p>
                                        </div>

                                    </div>

                                    <div className='flex flex-row justify-start  items-center '>

                                        <div className='flex items-center justify-end'>
                                            <button onClick={()=>{
                                                closeShowBids();
                                            }} type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                                font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                                Accept Bid
                                            </button>
                                        </div>

                                        <div>
                                            <button type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-transparent text-didalla rounded 
                                                font-bold hover:text-green-600 text-sm  focus:outline-none mr-2 text-sm md:text-base"  
                                                onClick={closeShowBids}>
                                                Reject Bid
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    }

                </div>

            </div>
        </div>
    )
}

export default ShowCreatorBids
