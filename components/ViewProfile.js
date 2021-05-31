import React, {useState} from 'react'
import Select from 'react-select';


const ViewProfile = ({showViewProfile , hideViewProfile, showSendOffer}) => {

    return (
        <div className='absolute py-6 px-8 md:px-52 lg:px-80 w-full h-full bg-gray-700 bg-opacity-50 
        flex flex-col z-20 '>
            <div className='modal-box fixed w-4/5 lg:w-3/5 bg-white border border-gray-100 overflow-y-auto'>
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={hideViewProfile}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>View profile</h1></div>
                    </div>
                </div>

                <div>
                    <div className='flex items-center mb-2 px-6 py-4 border-b border-grayborder'>
                        <div className='mr-3'>
                            <img src='/images/ManImage.svg' alt="creator avatar" />
                        </div>
                        <div>
                            <h1 className='text-didallablack text-sm font-bold'>Obinnaya Chukwu</h1>
                            <p className='text-didallabody text-sm'><svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                &nbsp;Lagos, Nigeria
                            </p>
                        </div>

                    </div>

                    <div className='px-6 py-4 border-b border-grayborder'>
                        <h1 className='text-base text-black font-bold mb-2'>Networks</h1>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2 mb-3'>
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

                        </div>

                    </div>

                    <div className='px-6 py-4 border-b border-grayborder'>
                        <h1 className='text-base text-black font-bold mb-2'>About</h1>
                        <p className='text-didallabody text-sm mb-4'>
                            I am a determined content creator that aims to drive traffic towards my clients products and ensure conversions
                            I am a determined content creator that aims to drive traffic towards my clients products and ensure conversions
                        </p>

                        <div className='flex items-center justify-start mb-2'>
                            <div className='mr-4 md:mr-6'>
                                <h1 className=' text-didallablack font-bold'>$250-2000</h1>
                                <p className='text-didallabody'>Per campaign</p>
                            </div>

                            <div className=''>
                                <h1 className=' text-didallablack font-bold'>15</h1>
                                <p className='text-didallabody'>Campaigns completed</p>
                            </div>

                        </div>

                    </div>

                    <div className='px-6 py-4 border-b border-grayborder'>
                        <h1 className='text-base text-black font-bold mb-2'>Campaign history</h1>
                    </div>

                    <div className='px-6 py-4 border-b border-grayborder'>
                        <h1 className='text-sm text-black font-bold mb-2'>Promote my cloth line</h1>
                        <p className='text-didallabody mb-3'>marvel's place</p>

                        <div className='flex items-center justify-start mb-2'>
                            <div className='mr-2 flex items-center'>
                                <div><img src='/images/GreenStar.svg' alt='star icon' /></div>
                                <div><img src='/images/GreenStar.svg' alt='star icon' /></div>
                                <div><img src='/images/GreenStar.svg' alt='star icon' /></div>
                                <div><img src='/images/GreenStar.svg' alt='star icon' /></div>
                                <div><img src='/images/GreenStar.svg' alt='star icon' /></div>
                            </div>

                            <div className='text-didallabody'>
                                6.0
                            </div>

                        </div>

                        <p className='text-didallabody text-sm mb-2'>
                            Did a very good job. Would recommend him again and again
                        </p>

                        <div className='flex items-center justify-start mb-2'>
                            <div className='mr-4 md:mr-6'>
                                <h1 className=' text-didallabody text-sm '>$250-2000</h1>
                            </div>

                            <div className=''>
                                <h1 className=' text-didallabody text-sm '>5/10/2020 - 5/12/2020</h1>
                            </div>

                        </div>

                    </div>

                    <div className='px-6 py-4 border-b border-grayborder mb-3'>
                        <h1 className='text-sm text-black font-bold mb-2'>Promote my cloth line</h1>
                        <p className='text-didallabody mb-3'>marvel's place</p>

                        <div className='flex items-center justify-start mb-2'>
                            <div className='mr-2 flex items-center'>
                                <div><img src='/images/GreenStar.svg' alt='star icon' /></div>
                                <div><img src='/images/GreenStar.svg' alt='star icon' /></div>
                                <div><img src='/images/GreenStar.svg' alt='star icon' /></div>
                                <div><img src='/images/GreenStar.svg' alt='star icon' /></div>
                                <div><img src='/images/GreenStar.svg' alt='star icon' /></div>
                            </div>

                            <div className='text-didallabody'>
                                6.0
                            </div>

                        </div>

                        <p className='text-didallabody text-sm mb-2'>
                            Did a very good job. Would recommend him again and again
                        </p>

                        <div className='flex items-center justify-start mb-2'>
                            <div className='mr-4 md:mr-6'>
                                <h1 className=' text-didallabody text-sm '>$250-2000</h1>
                            </div>

                            <div className=''>
                                <h1 className=' text-didallabody text-sm '>5/10/2020 - 5/12/2020</h1>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='flex flex-row items-center justify-end mb-4'>
                    <div>
                        <button type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-transparent text-didalla rounded 
                            font-bold hover:text-green-600 text-sm  focus:outline-none mr-2 text-sm md:text-base"  
                            onClick={hideViewProfile}>
                            Cancel
                        </button>
                    </div>

                    <div className='flex items-center justify-end'>
                        <button onClick={()=>{
                            hideViewProfile();
                            showSendOffer();
                        }} type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                            font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                            Send offer
                        </button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ViewProfile
