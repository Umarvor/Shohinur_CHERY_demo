import React, { useState } from 'react';
import './Vidio.css';

const videos = [
  {
    thumbnail: 'https://cheryauto.uz/uploads/banner/aebe88a27018.webp',
    title: 'Arrizo 6 Pro Sariq Boladan video sharh',
    url: 'https://www.youtube.com/embed/EMi__d-CQtE',
  },
  {
    thumbnail: 'https://cheryauto.uz/uploads/news/efe25aae23a0.webp',
    title: 'Tiggo 8 Pro Max video sharhi',
    url: 'https://www.youtube.com/embed/dBRpJMAjc30',
  },
  {
    thumbnail: 'https://cheryauto.uz/uploads/news/2f6a96636adc.webp',
    title: 'Tiggo 7 Pro Krash-test',
    url: 'https://www.youtube.com/embed/video3-id',
  },
  {
    thumbnail: 'https://cheryauto.uz/uploads/news/95b214656cca.webp',
    title: 'Tiggo 7 Pro video sharhi',
    url: 'https://www.youtube.com/embed/video4-id',
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="video-gallery">
      <h2>VIDEO SHARHLAR</h2>
      <div className="videos">
        {videos.map((video, index) => (
          <div key={index} className="video-thumbnail" onClick={() => openModal(video.url)}>
            <img src={video.thumbnail} alt={video.title} />
            <div className="play-button">▶️</div>
            <p>{video.title}</p>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
           
            <iframe
              width="700px"
              height="500px"
              src={selectedVideo}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
          </div>
         
        </div>
      )}
       <button className='bt223'>Video Sharhlar</button>
    </div>
  );
};

export default VideoGallery;
