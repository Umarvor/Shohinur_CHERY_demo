import React from 'react';
import './Pade4.css'; // For styling

const ServiceSection = () => {
  return (
    <div className="service-section">
      <div className="section left-section">
        <div className="content">
          <h2>DILERLAR</h2>
          <p>O'zbekistondagi eng yaqin dilerlik markazini toping</p>
          <button className="btn">Batafsil Ma'lumot Olish →</button>
        </div>
      </div>
      <div className="section right-section">
        <div className="content">
          <h2>XIZMAT KO'RSATISH</h2>
          <p>Vakolatli dilerdan muntazam texnik xizmat ko'rsatish uchun ro'yxatdan o'ting</p>
          <button className="btn">Batafsil Ma'lumot Olish →</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
