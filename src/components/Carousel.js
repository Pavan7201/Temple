import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Card = ({ imageSrc, caption, onClick }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card" />
      <div className="caption" onClick={() => onClick(caption)}> {/* Pass caption to onClick */}
        {caption}
      </div>
    </div>
  );
};

const Carousel = () => {
  const [showAyodhyaPopup, setShowAyodhyaPopup] = useState(false);
  const [showCaption1Popup, setShowCaption1Popup] = useState(false);
  const [showCaption2Popup, setShowCaption2Popup] = useState(false);
  const [showCaption3Popup, setShowCaption3Popup] = useState(false);
  const [showCaption4Popup, setShowCaption4Popup] = useState(false);
  const popupRef = useRef(null);

  const handleCaptionClick = (caption) => { // Accept caption parameter
    switch (caption) {
      case "AYODHYA":
        setShowAyodhyaPopup(!showAyodhyaPopup);
        break;
      case "Caption 1":
        setShowCaption1Popup(!showCaption1Popup);
        break;
      case "Caption 2":
        setShowCaption2Popup(!showCaption2Popup);
        break;
      case "Caption 3":
        setShowCaption3Popup(!showCaption3Popup);
        break;
      case "Caption 4":
        setShowCaption4Popup(!showCaption4Popup);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowAyodhyaPopup(false);
        setShowCaption1Popup(false);
        setShowCaption2Popup(false);
        setShowCaption3Popup(false);
        setShowCaption4Popup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const totalImages = 5; // Total number of images
  const centerIndex = Math.floor(totalImages / 2); // Index of the center card

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: centerIndex, // Start from the center (3rd card)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="centered-carousel-container">
      <Slider {...settings}>
        <Card imageSrc={require('./assets/img_3.jpg')} caption="Caption 3" onClick={handleCaptionClick} />
        <Card imageSrc={require('./assets/img_4.jpg')} caption="Caption 4" onClick={handleCaptionClick} />
        <Card imageSrc={require('./assets/img_5.jpg')} caption="AYODHYA" onClick={handleCaptionClick} />
        <Card imageSrc={require('./assets/img_1.jpg')} caption="Caption 1" onClick={handleCaptionClick} />
        <Card imageSrc={require('./assets/img_2.jpg')} caption="Caption 2" onClick={handleCaptionClick} />
        {/* Add more Card components as needed */}
      </Slider>
      {showCaption1Popup && (
      <div className='overlay'>
      <div className="popup" ref={popupRef}>
          {/* Caption 1 popup content */}
            <div className="popup-content">
              <div>
                <h2>Welcome to Caption 1</h2>
              </div>
              <div className="image-with-text">
                <img src={require('./assets/img_1.jpg')} alt="Caption 1" />
              <div>
                <p>Caption 1</p>
                <button className="popup-button">Know More..</button>
              </div>
              </div>
              </div>
            </div>
          </div>  
      )}
      {showCaption2Popup && (
      <div className='overlay'>
        <div className="popup" ref={popupRef}>
          {/* Caption 2 popup content */}
          
          <div className="popup-content">
            <div>
              <h2>Welcome to Caption 2</h2>
            </div>
            <div className="image-with-text">
              <img src={require('./assets/img_2.jpg')} alt="Caption 2" />
              <div>
                <p>Caption 2</p>
                <button className="popup-button">Know More..</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showCaption3Popup && (
      <div className='overlay'>
        <div className="popup" ref={popupRef}>
          {/* Caption 3 popup content */}
          
          <div className="popup-content">
            <div>
              <h2>Welcome to Caption 3 </h2>
            </div>
            <div className="image-with-text">
              <img src={require('./assets/img_3.jpg')} alt="Caption 3" />
              <div>
                <p>Caption 3</p>
                <button className="popup-button">Know More..</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        
      )}
      {showCaption4Popup && (
      <div className='overlay'>
        <div className="popup" ref={popupRef}>
          {/* Caption 4 popup content */}
          <div className="popup-content">
            <div>
              <h2>Welcome to Caption 4</h2>
            </div>
            <div className="image-with-text">
              <img src={require('./assets/img_4.jpg')} alt="Caption 4" />
              <div>
                <p>Caption 4</p>
                <button className="popup-button">Know More..</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showAyodhyaPopup && (
      <div className='overlay'>
        <div className="popup" ref={popupRef}>
          {/* Ayodhya popup content */}
          <div className="popup-content">
            <div>
              <h2>Welcome to Ayodhya</h2>
            </div>
            <div className="image-with-text">
              <img src={require('./assets/img_5.jpg')} alt="Ayodhya" />
              <div>
                <p>Ayodhya, also known as Saket, is an ancient city of India, is the birthplace of Bhagwan Shri Ram and setting of the great epic Ramayana. Ayodhya used to be the capital of the ancient Kosala Kingdom.</p>
                <button className="popup-button">Know More..</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
