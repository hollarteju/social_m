
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs, Autoplay} from "swiper"
import "swiper/css";


const SwiperComponent=()=>{
    const slides=["slide1", "slide2", "slide3","slide4", "fun", "global"];
    return(
        <>
        <Swiper 
        loop={false}
        spaceBetween={10}
        
       
        >
        
            {slides.map((slide)=>
            <SwiperSlide className="slides" >
               {slide}
            </SwiperSlide>
            )
            }
         </Swiper>
         </>
    )
    
};

export default SwiperComponent;