import React from 'react';
import './Rang1.css';
import global500Image from '../img/q.webp'; // Rasmni mos joyga yuklab, import qiling

function NewsSection() {
  return (
    <div className="news-section">
      <div className="news-item">
        <p className="news-date">16.08.2024</p>
        <h2 className="news-title">
          CHERY Group ilk bor 385-o‘rinni egallab “Fortune Global 500” ro‘yxatiga kiritildi
        </h2>
        <p className="news-description">
          CHERY Holding Group Co., Ltd. 39,0917 milliard AQSh dollari miqdoridagi ulkan daromadi tufayli
          385-o‘rinni egallab, nufuzli “Fortune Global 500”ning 2024-yil uchun reytingiga kiritildi.
          Bu yutuq nafaqat kompaniya uchun, balki butun Xitoy avtomobilsozlik sektori uchun muhim...
        </p>
      </div>
      <div className="news-image">
        <img src={global500Image} alt="Fortune Global 500 2024" />
      </div>

      <div className="additional-news">
        
        <div className="additional-news-item">
          <p className="news-date">08.08.2024</p>
          <p className="news-title">
            CHERY avtomobilini O‘zbekistondagi rasmiy dilerlardan sotib olishning ahamiyati →
          </p>
        </div>
        <div className="additional-news-item">
          <p className="news-date">05.08.2024</p>
          <p className="news-title">
            O‘zbekistonda 2024-yilning iyul oyida Chery avtomobillari sotuvlarining o‘sishi →
          </p>
        

        </div>
        <button className="news-button">BATAFSIL MA'LUMOT OLISH →</button>
      </div>
    </div>
  );
}

export default NewsSection;
