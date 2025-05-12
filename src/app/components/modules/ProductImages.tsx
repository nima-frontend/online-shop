'use client'

import { useState } from "react"
import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
type ProductImagesProps = {
    images:string[];
}
export default function ProdoctImages({images}:ProductImagesProps){
    const [mainImage,setMainImage] = useState(0);

    return (
        <div className="w-full md:w-2/5">
            <Swiper 
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={(swiper)=> setMainImage(swiper.activeIndex)}
            initialSlide={mainImage}
            modules={[Navigation]}
            pagination={{clickable:true}}
            navigation
            className="w-[90%] aspect-square rounded" 
            >
                {images.map((img,i)=>(
                    <SwiperSlide key={i}>
                    <img 
                    src={img}
                    alt={`product image ${i}`}
                    className="rounded w-full h-full object-cover overflow-hidden" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-[90%] flex gap-2 my-4 overflow-x-auto mx-auto">
                {images.map((img,i)=>(
                    <img
                    key={i}
                    src={img}
                    className='h-20 w-20 object-cover rounded cursor-pointer'
                    />
                ))}
            </div>
        </div>
    )
}