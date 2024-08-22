import React, { useState, useEffect } from 'react';
import './Slayder2.css';
import Swiper from 'swiper';

export default function CarSlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const carData = [
        { name: 'TIGGO 8 PRO MAX', price: "301 900 000 so'm dan", img: 'https://cheryauto.uz/uploads/models/tiggo8promax/67afb8.png', malumot: "245 ot kuchiga ega baquvvat 2,0 TGDI dvigateli, 100 km/soat tezlikka 8,4 soniyada chiqadi", malumot2: "Har tomonlama ko'rishni ta'minlash uchun zamonaviy 360° HD kameralar", malumot3: "2 ta integratsiyalashgan 12,3 dyuym ekranli raqamli boshqaruv zonasi", btn: "Tanishib chiqish →" },
        { name: 'TIGGO 8 PRO', price: "285 000 000 so'm dan", img: 'https://cheryauto.uz/uploads/models/tiggo8pro/3c81a8.png',malumot: "245 ot kuchiga ega baquvvat 2,0 TGDI dvigateli, 100 km/soat tezlikka 8,4 soniyada chiqadi", malumot2: "Har tomonlama ko'rishni ta'minlash uchun zamonaviy 360° HD kameralar", malumot3: "2 ta integratsiyalashgan 12,3 dyuym ekranli raqamli boshqaruv zonasi", btn: "Tanishib chiqish →"  },
        { name: 'TIGGO 7 PRO', price: "260 000 000 so'm dan", img: 'https://cheryauto.uz/uploads/models/tiggo7pro/1433a5.png',malumot: "245 ot kuchiga ega baquvvat 2,0 TGDI dvigateli, 100 km/soat tezlikka 8,4 soniyada chiqadi", malumot2: "Har tomonlama ko'rishni ta'minlash uchun zamonaviy 360° HD kameralar", malumot3: "2 ta integratsiyalashgan 12,3 dyuym ekranli raqamli boshqaruv zonasi", btn: "Tanishib chiqish →"  },
        { name: 'ARRIZO 6 PRO', price: "240 000 000 so'm dan", img: 'https://cheryauto.uz/uploads/models/arrizo6pro/png/a37cbd201523.png',malumot: "245 ot kuchiga ega baquvvat 2,0 TGDI dvigateli, 100 km/soat tezlikka 8,4 soniyada chiqadi", malumot2: "Har tomonlama ko'rishni ta'minlash uchun zamonaviy 360° HD kameralar", malumot3: "2 ta integratsiyalashgan 12,3 dyuym ekranli raqamli boshqaruv zonasi", btn: "Tanishib chiqish →"  }
    ];

    const handleSlideChange = (index) => {
        if (index !== activeSlide) {
            setIsAnimating(false); // Avvalgi animatsiyani to'xtatish
            setTimeout(() => {
                setActiveSlide(index);
                setIsAnimating(true); // Yangi animatsiyani boshlash
            }, 500); // 50ms kechikish bilan animatsiyani qayta yuklash
        }
    };

    useEffect(() => {
        setIsAnimating(true); // Dastlabki yuklanishda animatsiyani ishga tushirish
    }, []);

    return (
        <div className="car-slider-container">

            <div className="car-models">
                {carData.map((car, index) => (
                    <button
                        key={index}
                        className={`model-button ${activeSlide === index ? 'active' : ''}`}
                        onClick={() => handleSlideChange(index)}
                    >
                        {car.name}
                    </button>
                ))}
            </div>
            <div className="car-display">
                <div
                    className={`car-image ${isAnimating ? 'animate' : ''}`}
                    style={{ backgroundImage: `url(${carData[activeSlide].img})` }}
                />
                <div className="car-info">
                    <span>Narxi: {carData[activeSlide].price}</span>

                </div>

            </div>
            <div className='malumot'>

                <span>{carData[activeSlide].malumot}</span>
                <span>{carData[activeSlide].malumot2}</span>
                <span>{carData[activeSlide].malumot3}</span>
                <button className='btn'>{carData[activeSlide].btn}</button>
            </div>
        </div>
    );
}
