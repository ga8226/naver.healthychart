import React from 'react'
import banner from '../scss/banner.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";

export default function Banner(props) {
     return (
      <Swiper
      className={banner.container}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay ]}
      loop={true}
    >
      {
        [
          ['event','이달의 특가할인'],
          ['membershop','멤버혜택'],
          ['promotion','기획전']
        ].map(function(v , i){

          return(
            <SwiperSlide className={`${v[0]} ${banner.sw}`} key={`s_${i}`}>
            <div className='visually-hidden'>{v[1]}</div>
            </SwiperSlide>
          )

        })
      }        
    </Swiper>
       );
 };   

   
      
    
