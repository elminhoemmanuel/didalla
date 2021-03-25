import HeaderTemplate from './HeaderTemplate'
import VendorCard from './VendorCard'
import { vendorObjOne, vendorObjTwo, vendorObjThree } from './VendorDetails'
import { headerObjThree } from './HeaderData';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

const Testimonials = () => {

    const slides = [];

    for ( let i=0; i<5; i+=1){
        slides.push(
            <SwiperSlide key={`slide-${1}`} tag='li'>
                <img
                 src={`https://picsum.photos/id/${i + 1}/1000/300`} 
                 alt={ `Slide ${i}`}
                 style={{listStyle:'none'}}
                 />
                <p>Slide</p>
            </SwiperSlide>
        )
    }

    return ( 
        <div className='px-6 md:px-10 lg:px-16 py-16'>
            <HeaderTemplate headerObj={headerObjThree} />
            {/* <Swiper id='main' tag="section" wrapperTag="ul" navigation pagination>
                {slides}                
            </Swiper> */}

        </div>
     );
}
 
export default Testimonials;