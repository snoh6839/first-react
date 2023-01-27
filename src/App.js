import React, { useState } from 'react';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image9 from './image9.jpg';
import image10 from './image10.jpg';
import './App.css';



const GamePromotion = () => {
  return (
    <>
    <div className='promo-container'>
      <h2 className='promo-title'>게임 프로모션 페이지 예시 제작</h2>
      <p className='promo-description'>React 사용법 익히기</p>
      <div className='parent-container'>
        <button className='promo-button'>Play Now</button>
      </div>
    </div>
    <div className="game-promotion">
        <h1>New Game Release!</h1>
        
          <img src={image2} alt="Game Screenshot 1" />
          <div className='parent-container'>
            <button>Learn More</button>
            <button>Pre-order Now</button>
          </div>
          <img src={image4} alt="Game Screenshot 2" />
          <div className='parent-container'>
            <button>Learn More</button>
            <button>Pre-order Now</button>
          </div>
          <img src={image5} alt="Game Screenshot 3" />
          <div className='parent-container'>
            <button>Learn More</button>
            <button>Pre-order Now</button>
          </div>
          <img src={image6} alt="Game Screenshot 4" />
          <div className='parent-container'>
            <button>Learn More</button>
            <button>Pre-order Now</button>
          </div>
          <img src={image7} alt="Game Screenshot 5" />
          <div className='parent-container'>
            <button>Learn More</button>
            <button>Pre-order Now</button>
          </div>
          <img src={image9} alt="Game Screenshot 6" />
          <div className='parent-container'>
            <button>Learn More</button>
            <button>Pre-order Now</button>
          </div>
        
        
    </div>
    </>
  );
};

export default GamePromotion;
