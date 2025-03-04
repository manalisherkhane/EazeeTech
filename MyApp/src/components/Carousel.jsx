
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <img src='' className="item" data-value="1"/>,
    <img src='' className="item" data-value="2"/>,
    <img src='' className="item" data-value="3"/>,
    <img src='' className="item" data-value="4"/>,
    <img src='' className="item" data-value="5"/>
];

const renderSlideInfo = ({ item, itemsCount }) => {
    return `${item}\\${itemsCount}`;
};

const renderDotsItem = ({ isActive }) => {
    return isActive ? 'x' : 'o';
};

const renderPrevButton = ({ isDisabled }) => {
    return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&lt;</span>;
};

const renderNextButton = ({ isDisabled }) => {
    return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&gt;</span>;
};

const renderPlayPauseButton = ({ isPlaying }) => {
    return isPlaying ? 'PAUSE' : 'PLAY';
};



export default function Carousel() {
  return (
    <AliceCarousel
    mouseTracking
    items={items}
    
    disableSlideInfo={true}
    // renderSlideInfo={renderSlideInfo}
    // renderDotsItem={renderDotsItem}
    // renderPrevButton={renderPrevButton}
    // renderNextButton={renderNextButton}
    // renderPlayPauseButton={renderPlayPauseButton}
/>
  )
}
