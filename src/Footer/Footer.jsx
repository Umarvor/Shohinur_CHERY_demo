import React from 'react';
import './Footer.css';
import Yutub from '../img/yu.png'
import Telegram from '../img/tel.png'
import Facebooc from '../img/Facebok.png'
import Instagramm from '../img/ins.png'
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
          <a href="tel:712765555"><p className="phone-number">+998 71 276 55 55</p></a>
          <p>Ishonch telefoni (shikoyat va takliflar):</p>
          <a href="tel:+998712091524"><p className="phone-number">+998 71 209 15 24</p></a>
        </div>
        <div className="footer-social">
          <p>IJTIMOIY TARMOQLARDA BIZGA QO'SHILING:</p>
          <div className="social-icons">
            <a target='_blank' href="https://www.youtube.com/@cheryuzbekistan"> <img src={Yutub} alt="Yutub" className='social-icon' /></a>
           <a target='_blank' href="https://t.me/cheryuzbekistan"> <img src={Telegram} alt="Yutub" className='social-icon' /></a>

          <a target='_blank' href="https://www.facebook.com/CheryUzbekistan"><img src={Facebooc} alt="Yutub" className='social-icon' />
          </a>  
           <a target='_blank' href="https://www.instagram.com/cheryuzbekistan/"> <img src={Instagramm} alt="Yutub" className='social-icon' /></a>

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
