import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import './Slider.scss';

import { Controller, Navigation } from 'swiper';

const Slider = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const sliderTitles = ['Испания', 'Франция', 'Сент_Винсент и Гренадины', 'Португалия', 'Саудовская Аравия'];

  return (
    <div className="slider">
      <Swiper
        navigation={ {
          nextEl: '.slider__button_next',
          prevEl: '.slider__button_prev',
        } }
        onSwiper={ setFirstSwiper }
        controller={ { control: secondSwiper } }
        initialSlide={ 2 }
        modules={ [Navigation, Controller] }
        className='container'
      >
        {
          sliderTitles.map((item, index) => {
            return (
              <SwiperSlide key={index} className="slider__swiper_title">
                { item }
              </SwiperSlide>
            );
          })
        }
      </Swiper>
      <div className='slider__swiper_wrapper'>
        <button className="slider__button slider__button_prev">
          <span className='slider__icon slider__icon_prev'/>
        </button>
        <Swiper
          spaceBetween={ 28 }
          slidesPerView={ 5 }
          centeredSlides
          onSwiper={ setSecondSwiper }
          controller={ { control: firstSwiper } }
          slideToClickedSlide
          modules={ [Controller] }
          className='slider__swiper_container container'
        >
          {
            sliderTitles.map((item, index) => {
              return (
                <SwiperSlide key={index} className="slider__swiper_text">
                  { item }
                </SwiperSlide>
              );
            })
          }
        </Swiper>
        <button className="slider__button slider__button_next">
          <span className='slider__icon slider__icon_next'/>
        </button>
      </div>
      <div className='slider__divider container'/>
      <div className='container'>
        <p className='slider__text'>
          Мир Breezzor огромный, исследуй его!
        </p>
      </div>
    </div>
  );
};

export default Slider;