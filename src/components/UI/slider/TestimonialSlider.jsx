import React from 'react'
import Slider from "react-slick";

import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava03.jpeg'

import './slider.css'

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
    <div>
      <p className="review__text">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      </p>
      <div className="ava d-flex align-items-center gap-3">
        <img src={ava01} alt="avatar"/>
        <h6>Actor Boys</h6>
      </div>
    </div>
    <div>
      <p className="review__text">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      </p>
      <div className="ava d-flex align-items-center gap-3">
        <img src={ava02} alt="avatar"/>
        <h6>Max Stick</h6>
      </div>
    </div>
    <div>
    <p className="review__text">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      </p>
      <div className="ava d-flex align-items-center gap-3">
        <img src={ava03} alt="avatar"/>
        <h6>Alice Cats</h6>
      </div>
    </div>
    </Slider>
  )
}

export default TestimonialSlider