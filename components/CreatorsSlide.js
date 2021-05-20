import React , { useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Keyboard } from 'swiper';
import 'swiper/swiper-bundle.css';
import CreatorsCard from './CreatorCard'
import { creatorsDataTop } from './CreatorsDataTop'

SwiperCore.use([Navigation, Keyboard])

const CreatorsSlide = ({creators}) => {

    const slides = [];

    for ( let i=0; i<3; i+=1){
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag='li'>
                <CreatorsCard creators={creatorsDataTop[i]} />
            </SwiperSlide>
        )
    }

    return (
        <div className=''>
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
            navigation keyboard spaceBetween={0} slidesPerView={1}  spaceBetween={30}
            // onInit={(swiper) =>console.log('Swiper initialized', swiper)}
            // onSlideChange={(swiper) =>console.log('Slide changed to:', swiper.activeIndex)}
            // onReachEnd={() =>console.log('Swiper end reached')}
            >
                {slides}                
            </Swiper>

        </div>
    )
}

export default CreatorsSlide
