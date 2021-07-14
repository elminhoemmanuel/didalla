import React , { useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Keyboard, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import CreatorsCard from './CreatorsCard'
import { creatorsDataTop } from './CreatorsDataTop'

SwiperCore.use([Navigation, Keyboard, Scrollbar])

const CreatorsSlide = ({ boosters, showSendOffer, hideSendOffer, showViewProfile, hideViewProfile, addSingleBooster }) => {

    const slides = [];
    boosters.map(item =>(
        slides.push(<SwiperSlide key={item.id} tag='li'>
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
                                                                addSingleBooster(item);
                                                                showSendOffer();

                                                            }} className="block w-full md:w-auto py-3 px-6  text-center bg-didalla rounded border border-didalla
                                                                font-bold text-white hover:bg-green-600 focus:outline-none text-xs md:text-sm">
                                                                Send offer
                                                            </button>
                                                        </div>

                                                        <div className='ml-2'>
                                                            <button type='button' onClick={()=>{
                                                                addSingleBooster(item);
                                                                showViewProfile();
                                                            }} className="block w-full md:w-auto py-3 px-6 text-center bg-transparent text-didalla rounded 
                                                            font-bold hover:text-green-600  focus:outline-none  text-sm md:text-base"  
                                                                
                                                            >
                                                                View profile
                                                            </button>
                                                        </div>

                                                    </div>

        </div>
    </SwiperSlide>)
    ))

    return (
        <div className='dash'>
            {
                boosters[0] ? 
                <Swiper breakpoints={{
                    // when window width is >= 640px
                    600: {
                    slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                    slidesPerView: 2,
                    },
                    1200: {
                    slidesPerView: 3,
                    },
                }} id='main' tag="section" wrapperTag="ul"
                keyboard spaceBetween={0} slidesPerView={1}  spaceBetween={30} scrollbar={{ draggable: true }}
                
                >
                    {slides}                
                </Swiper> :
                <div>
                    <h1 className='text-didallablack text-sm mb-6 font-bold'>No content creators yet</h1>
                </div>
            }

        </div>
    )
}

export default CreatorsSlide
