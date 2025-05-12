'use client'

import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css' 
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
export default function MySwiper() {
  return (
    <Swiper
    slidesPerView={1}
    pagination={{clickable:true}}
    navigation
    modules={[Navigation,Autoplay]}
    autoplay = {{
      delay:3000,
      disableOnInteraction:false
    }}
    className='w-[90%] rounded-md aspect-[1400/700]'
    >
      <SwiperSlide className='relative bg-blue-500'>
        <Image src='/images/bg_hero.jpg' fill  alt='image' className='object-cover'>
        </Image>
      </SwiperSlide>
      <SwiperSlide className='relative bg-blue-500'>
        <Image src='/images/bg_secondary.jpg' fill  alt='image' className='object-cover'>
        </Image>
      </SwiperSlide>


    </Swiper>
  )
}
