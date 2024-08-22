import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Slayder1/Slayder1.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='d'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                //   }}

                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='Slide1'>
                       <article  className='art1'>
                        <h1 >FOIZSIZ MUDDATLI TO'LOVGA BARCHA CHERY MODELLARIGA</h1>
                       
                       </article>
                      <article>
                        <button className='btn1'>BATAFSIL MA'LUMOT OLISH →</button>
                      </article>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Slide2'>
                        s
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Slide3'>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Slide4'>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Slide5'>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Slide6'>
                       
                    </div>
                </SwiperSlide>
              
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}
