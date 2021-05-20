import React , { useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Keyboard, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import CreatorsCard from './CreatorsCard'
import { creatorsDataTop } from './CreatorsDataTop'

SwiperCore.use([Navigation, Keyboard, Scrollbar])

const CreatorsSlide = ({ creators }) => {

    const slides = [];

    creatorsDataTop.map(item =>(
        slides.push(<SwiperSlide key={item.id} tag='li'>
        <CreatorsCard creators={item} />
    </SwiperSlide>)
    ))

    return (
        <div className='dash'>
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
