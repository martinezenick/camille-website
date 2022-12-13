import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ImageGallery.css";

const imageGallery = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    variablewidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          ...props.settings
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          ...props.settings
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          ...props.settings
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  return (
    <Slider {...settings}>
      <div>
        <img className = "gallery-image" src = {props.board1} />
      </div>
      <div>
      <img className = "gallery-image" src = {props.board2} />
      </div>
      <div>
      <img className = "gallery-image" src = {props.board3} />
      </div>
      <div>
      <img className = "gallery-image" src = {props.board4} />
      </div>
    </Slider>
  );
};

export default imageGallery;
