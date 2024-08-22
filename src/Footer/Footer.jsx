import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>
          * Saytda joylashgan CHERY brendi mahsulotlarining narxi haqida ma'lumot faqat axborot
          xususiyatiga ega. Ko'rsatilgan narxlar CHERY dilerlarining haqiqiy narxlaridan farq qilishi
          mumkin. CHERY mahsulotlariga aktual narxlar haqida batafsil ma'lumot olish uchun CHERY
          dileriga murojaat qiling. CHERY brending har qanday mahsulotini sotib olish yakka tartibdag
          oldi-sotdi shartnomasi shartlariga muvofiq amalga oshiriladi. Taqdim etilgan avtomobil
          tasvirlari xaqiqiydan farq qilishi mumkin.
        </p>
      </div>
      <div className="footer-middle">
        <div className="footer-links">
          <ul>
            <li>Modellar</li>
            <li>Dillerlar</li>
            <li>Xaridorlarga</li>
            <li>Chery olami</li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>Chery ishonch telefoni:</p>
          <p className="phone-number">+998 71 276 55 55</p>
          <p>Ishonch telefoni (shikoyat va takliflar):</p>
          <p className="phone-number">+998 71 209 15 24</p>
        </div>
        <div className="footer-social">
          <p>IJTIMOIY TARMOQLARDA BIZGA QO'SHILING:</p>
          <div className="social-icons">
            <a href="#" className="social-icon">
            
            </a>
            <a href="#" className="social-icon">
            
            </a>
            <a href="#" className="social-icon">
             
            </a>
            <a href="#" className="social-icon">
           
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          +“ROODELL” MCHJ O'zbekiston Respublikasi hududida o'z faoliyatini O'zbekiston Respublikasi
          qonunchiligiga muvofiq yuritadi. Sotilayotgan mahsulotlar O'zbekiston Respublikasi
          hududida qabul qilib olish uchun mavjud. O'zbekiston Respublikasidan tashqarida bo'lgan
          sub'ektlarning istemolchi harakati monitoring olib borilmaydi. Tegishli model va
          komplektatsiyalar va ularning mavjudligi, narxlari, xarid qilishdagi foydalar va shartlar
          to'g'risidagi axborot Cheryning O'zbekiston Respublikasi hududidagi dilerlarida mavjud.
          Tovarlar sertifikatlangan. Ommaviy oferta hisoblanmaydi.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
