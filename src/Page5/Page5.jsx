import React from 'react';
import './Page5.css';

const TestDrive = () => {
  return (
    <div className="test-drive-section">
      <div className="test-drive-option">
        <div className="icon">🔄</div>
        <h3>TEST DRIVE UCHUN RO‘YXATDAN O'TISH</h3>
        <p>Eng yaqin vakolatli dilerda test drive'ga yoziling</p>
        <button className="test-drive-button">YOZILISH →</button>
      </div>
      <div className="test-drive-option">
        <div className="icon">🔄</div>
        <h3>DILERGA AYLANISH</h3>
        <p>Anketani to'ldiring va Chery dilerlik markazini egasiga aylaning</p>
        <button className="anketa-button">ANKETA →</button>
      </div>
      
    </div>
  );
};

export default TestDrive;
