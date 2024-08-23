import React, { useState, useEffect } from 'react';
import './Slayder3.css';

export default function CarSlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const carData = [
        { name: "Texnologiyalar harakatda", img: 'https://cheryauto.uz/uploads/models/tiggo8pro/46c1f25a116b.webp', malumot: "To'rt silindrli in-layn dvigateli, 2 eksantrik mili mavjud, 16 ta klapan, ikki fazali almashtirish tizimiga ega. Maksimal quvvat - 136,5 kVt (186 ot kuchi)", malumot2: "Texnologiyalar harakatda", btn: "Batafsil ma'lumot olish →" },
        { name: 'ESP', img: 'https://cheryauto.uz/uploads/models/tiggo8pro/2cc1bd35f1a9.webp', malumot: "ESP xavfsizlik tizimi quvvat sarfini kamaytirish uchun eng yangi yuqori samarali protsessordan foydalanadi.", btn: "Batfsil ma'lumotolish →" },
        { name: 'Kuchli', img: 'https://cheryauto.uz/uploads/models/tiggo8pro/25e4fcafb96e.webp', malumot: "245 ot kuchiga ega baquvvat 2,0 TGDI dvigateli, 100 km/soat tezlikka 8,4 soniyada chiqadi", malumot2: "Har tomonlama ko'rishni ta'minlash uchun zamonaviy 360° HD kameralar", malumot3: "2 ta integratsiyalashgan 12,3 dyuym ekranli raqamli boshqaruv zonasi", btn: "Tanishib chiqish →" },
    ];

    const handleSlideChange = (index) => {
        if (index !== activeSlide) {
            setIsAnimating(false);
            setTimeout(() => {
                setActiveSlide(index);
                setIsAnimating(true);
            }, 1);
        }
    };

    useEffect(() => {
        setIsAnimating(true);
    }, []);

    return (
        <div className='Slayder3'>
            <div className="car-slider-containerr">
                <div className="car-modelss">
                    {carData.map((car, index) => (
                        <h1

                            key={index}
                            className={`model-buttonn ${activeSlide === index ? 'active' : ''}`}
                            onClick={() => handleSlideChange(index)}
                        >
                            {car.name}
                        </h1>
                    ))}
                </div>
                <div className="car-displayy">
                    <div
                        className={`car-imagee ${isAnimating ? 'animate' : ''}`}
                        style={{ backgroundImage: `url(${carData[activeSlide].img})` }}
                    />
                    <div className="car-infoo">
                        <h3>{carData[activeSlide].name}</h3>

                        <p>{carData[activeSlide].malumot}</p>

                        <p>{carData[activeSlide].malumot3}</p>
                        <article className='btn22'>
                            <button className='btnn'>{carData[activeSlide].btn}</button>
                        </article>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
