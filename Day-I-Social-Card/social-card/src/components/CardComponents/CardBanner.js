import React from 'react';
import './Card.css';
import bannerImg from './react_dribbble.jpg'

const CardBanner = () => {
    return (
        <div className = "banner-container">
        <img className = "card-banner" src = {bannerImg} alt = "react banner"/>
        </div>
    );
}

export default CardBanner;