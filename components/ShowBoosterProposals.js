import React, {useState} from 'react'
import Select from 'react-select';


const ShowBoosterProposals = ({ openShowProposals, closeShowProposals }) => {

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

                <div className='mb-3'>
        
                    <div className='px-6 py-4 border-b border-grayborder mb-3'>
                        <h1 className='text-sm text-black font-bold mb-2'>Promote my cloth line</h1>
                        <p className='text-didallabody mb-3'>marvel's place - <span className='text-didallabody'>posted 12 min ago</span></p>

                        <div className='flex items-center justify-start mb-4 text-sm'>
                            <div className='mr-4 md:mr-6'>
                                <h1 className=' text-didallablack font-bold'>$2000</h1>
                                <p className='text-didallabody'>Budget</p>
                            </div>

                            <div className=''>
                                <h1 className=' text-didallablack font-bold'>20/05/2020-20/06/2020</h1>
                                <p className='text-didallabody'>Campaign duration</p>
                            </div>

                        </div>

                        
                    </div>

                </div>
                <div className='mb-3'>
        
                    <div className='px-6 py-4 border-b border-grayborder mb-3'>
                        <h1 className='text-sm text-black font-bold mb-2'>Promote my cloth line</h1>
                        <p className='text-didallabody mb-3'>marvel's place - <span className='text-didallabody'>posted 12 min ago</span></p>

                        <div className='flex items-center justify-start mb-4 text-sm'>
                            <div className='mr-4 md:mr-6'>
                                <h1 className=' text-didallablack font-bold'>$2000</h1>
                                <p className='text-didallabody'>Budget</p>
                            </div>

                            <div className=''>
                                <h1 className=' text-didallablack font-bold'>20/05/2020-20/06/2020</h1>
                                <p className='text-didallabody'>Campaign duration</p>
                            </div>

                        </div>

                        
                    </div>

                </div>
                <div className='mb-3'>
        
                    <div className='px-6 py-4 border-b border-grayborder mb-3'>
                        <h1 className='text-sm text-black font-bold mb-2'>Promote my cloth line</h1>
                        <p className='text-didallabody mb-3'>marvel's place - <span className='text-didallabody'>posted 12 min ago</span></p>

                        <div className='flex items-center justify-start mb-4 text-sm'>
                            <div className='mr-4 md:mr-6'>
                                <h1 className=' text-didallablack font-bold'>$2000</h1>
                                <p className='text-didallabody'>Budget</p>
                            </div>

                            <div className=''>
                                <h1 className=' text-didallablack font-bold'>20/05/2020-20/06/2020</h1>
                                <p className='text-didallabody'>Campaign duration</p>
                            </div>

                        </div>

                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ShowBoosterProposals
