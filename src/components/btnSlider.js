import React from 'react';
import './slider.css';
import leftArrow from './icons/angles-left-solid.svg';
import rightArrow from './icons/angles-right-solid.svg';

const btnSlider = ({direction,moveSlide}) => {
  return (
    <div>
    <button onClick={moveSlide} className={direction=== "next" ? 'btn-slide next' : 'btn-slide prev'}>
    <img src={direction=== "next" ? rightArrow : leftArrow} />
    </button>

    <button onClick={moveSlide} className={direction=== "prev" ? 'btn-slide prev' : 'btn-slide next'}>
    <img src={direction=== "prev" ? leftArrow : rightArrow} />
    </button>
    </div>
  )
}

export default btnSlider;