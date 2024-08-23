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
                        <article className='art1'>
                            <h1 >FOIZSIZ MUDDATLI TO'LOVGA BARCHA CHERY MODELLARIGA</h1>

                        </article>
                        <article>
                            <button className='btn1'>BATAFSIL MA'LUMOT OLISH →</button>
                        </article>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='Slide2'>
                        <article className='art2'>
                            <h1 >ARRIZO  PRO </h1>
                            <h1>MUDDATLI TO'LOV</h1>

                        </article>
                        <article>
                            <button className='btn1'>BATAFSIL MA'LUMOT OLISH →</button>
                        </article>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Slide3'>
                    <article className='art3'>
                            <h1 >20% BOSHLANG'ICH </h1>
                            <h1>TO'LOV BILAN LIZING </h1>
                           
                        </article>
                        <article>
                            <button className='btn1'>BATAFSIL MA'LUMOT OLISH →</button>
                        </article>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Slide4'>
                    <article className='art4'>
                            <h1 >30% DAN BIRINCHI TO'LOV </h1>
                            <h1>QULAYLIK KREDIT SHARTLARI</h1>
                           
                        </article>
                        <article>
                            <button className='btn1'>BATAFSIL MA'LUMOT OLISH →</button>
                        </article>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Slide5'>
                    <article className='art4'>
                            <h1 >TEST-DREVE</h1>
                            <h1>CHARY AVTOMOBILI</h1>
                            <h1>RULIDA QULAYLIKNI HIS</h1>
                            <h1>ETING</h1>
                           
                        </article>
                        <article>
                            <button className='btn3'>BATAFSIL MA'LUMOT OLISH →</button>
                        </article>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Slide6'>
                    <article className='art1'>
                            <h1 >CHERY AVTOMOBILLARI</h1>
                            <h1>UCHUN 5 YILLIK KAFOLAT</h1>
                            <h1>YOKI 150 000  KM</h1>

                        </article>
                        <article>
                            <button className='btn3'>BATAFSIL MA'LUMOT OLISH →</button>
                        </article>
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
