import React from 'react';
import "./Story.css";
import { TopStory } from './StoryData';
import {Swiper, SwiperSlide} from "swiper/react";


import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/free-mode"
const Story =()=>{

    let a=[

        {
            backgroundImage: "url('snow.jpg')",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        },
        {
            backgroundImage: "url('olami.jpg')",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        },
        {
            backgroundImage: "url('seyi.jpg')",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        },
        {
            backgroundImage: "url('lady.jpg')",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        },
        {
            backgroundImage: "url('babe.jpg')",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        },
        {
            backgroundImage: "url('travel.jpg')",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        },
        {
            backgroundImage: "url('ola.jpg')",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        },
        
       
    ]

    return(
        <div className='story' id='story'>
           <Swiper className='top-story-container'
       
           slidesPerView={"auto"}
           loop={false}
           spaceBetween={10}
           
           observeParents={true}
           observer={true}
           watchSlidesProgress={true}
           watchSlidesVisibility={true}
           >
            
                {TopStory.map(story=>
                 <SwiperSlide className="slider"style={{ width:80}}>
                <div style={a[story.id]} className="top-story">
                    <div className='profile-pics'>
                        <img src={story.image} alt="" />
                    </div>
                    <div className='top-story-name'>
                        <p>{story.name}</p>
                    </div>
                </div>
                </SwiperSlide>
                    )}
            </Swiper>
             <div className='search-container'>
                <div className='profile-pics'>
                    <img src="ola.jpg" alt="" />
                </div>  
                <input type="text" placeholder='What is on your mind' />
                <div className='btn'>Submit</div>
            </div>
            <div className='update-container'>
                <div className='update-profile-container'>
                    <div className='update-profile'>
                        <div className='profile-pics'>
                            <img src="usain.jpg" alt="" />
                        </div>
                        <div>
                            <b>thrj jshfe </b>
                            <p className='text-muted'>thbdksnkn</p>
                        </div>  
                    </div>
                    <i className='bx bx-dots-horizontal-rounded'></i>
                </div>
                <div className='update-picture'>
                    <img src="usain.jpg" alt="" />
                </div>
                <div  className='update-icon'>
               <div className='like-icon'>
                    <i className='bx bx-heart'></i>
                    <i className='bx bx-message-rounded-dots'></i>
                    <i className='bx bx-share-alt'></i>
                </div>
                <div>
                    <i className='bx bx-bookmark'></i>
                </div>
                </div>
                <div className='comment'>
                    <div className='comment-field'>
                        <img src="babe.jpg" alt="" />
                        <img src="couples.jpeg" alt="" />
                        <img src="usain.jpg" alt="" />
                        Liked by
                        <b>Emernent Archiver</b>
                        and
                        <b>2,3283 others</b> 
                    </div>
                    <div id='comment-field'>
                        <b>Lana Rose</b>
                        Loren Frej Baj dour proi hander thujnj mant through frown
                        <p className='text-muted'>View 272 comments</p>
                    </div>
                    
                </div> 
            </div>
            <div className='update-container'>
                <div className='update-profile-container'>
                    <div className='update-profile'>
                        <div className='profile-pics'>
                            <img src="ola.jpg" alt="" />
                        </div>
                        <div>
                            <b>thrj jshfe </b>
                            <p className='text-muted'>thbdksnkn</p>
                        </div>  
                    </div>
                    <i className='bx bx-dots-horizontal-rounded'></i>
                </div>
                <div className='update-picture'>
                    <img src="food.jpeg" alt="" />
                </div>
                <div  className='update-icon'>
               <div className='like-icon'>
                    <i className='bx bx-heart'></i>
                    <i className='bx bx-message-rounded-dots'></i>
                    <i className='bx bx-share-alt'></i>
                </div>
                <div>
                    <i className='bx bx-bookmark'></i>
                </div>
                </div>
                <div className='comment'>
                    <div className='comment-field'>
                        <img src="babe.jpg" alt="" />
                        <img src="couples.jpeg" alt="" />
                        <img src="usain.jpg" alt="" />
                        Liked by
                        <b>Emernent Archiver</b>
                        and
                        <b>2,3283 others</b> 
                    </div>
                    <div id='comment-field'>
                        <b>Lana Rose</b>
                        Loren Frej Baj dour proi hander thujnj mant through frown
                        <p className='text-muted'>View 272 comments</p>
                    </div>
                    
                </div> 
            </div>   
            <div className='update-container'>
                <div className='update-profile-container'>
                    <div className='update-profile'>
                        <div className='profile-pics'>
                            <img src="snow.jpg" alt="" />
                        </div>
                        <div>
                            <b>thrj jshfe </b>
                            <p className='text-muted'>thbdksnkn</p>
                        </div>  
                    </div>
                    <i className='bx bx-dots-horizontal-rounded'></i>
                </div>
                <div className='update-picture'>
                    <img src="plane.jpg" alt="" />
                </div>
                <div  className='update-icon'>
                <div className='like-icon'>
                    <i className='bx bx-heart'></i>
                    <i className='bx bx-message-rounded-dots'></i>
                    <i className='bx bx-share-alt'></i>
                </div>
                <div>
                    <i className='bx bx-bookmark'></i>
                </div>
                </div>
                <div className='comment'>
                    <div className='comment-field'>
                        <img src="babe.jpg" alt="" />
                        <img src="couples.jpeg" alt="" />
                        <img src="usain.jpg" alt="" />
                        Liked by
                        <b>Emernent Archiver</b>
                        and
                        <b>2,3283 others</b> 
                    </div>
                    <div id='comment-field'>
                        <b>Lana Rose</b>
                        Loren Frej Baj dour proi hander thujnj mant through frown
                        <p className='text-muted'>View 272 comments</p>
                    </div>
                    
                </div> 
            </div>
            <div className='update-container'>
                <div className='update-profile-container'>
                    <div className='update-profile'>
                        <div className='profile-pics'>
                            <img src="couples.jpeg" alt="" />
                        </div>
                        <div>
                            <b>thrj jshfe </b>
                            <p className='text-muted'>thbdksnkn</p>
                        </div>  
                    </div>
                    <i className='bx bx-dots-horizontal-rounded'></i>
                </div>
                <div className='update-picture'>
                    <img src="adventure.jpeg" alt="" />
                </div>
                <div  className='update-icon'>
                <div className='like-icon'>
                    <i className='bx bx-heart'></i>
                    <i className='bx bx-message-rounded-dots'></i>
                    <i className='bx bx-share-alt'></i>
                </div>
                <div>
                    <i className='bx bx-bookmark'></i>
                </div>
                </div>
                <div className='comment'>
                    <div className='comment-field'>
                        <img src="babe.jpg" alt="" />
                        <img src="couples.jpeg" alt="" />
                        <img src="usain.jpg" alt="" />
                        Liked by
                        <b>Emernent Archiver</b>
                        and
                        <b>2,3283 others</b> 
                    </div>
                    <div id='comment-field'>
                        <b>Lana Rose</b>
                        Loren Frej Baj dour proi hander thujnj mant through frown
                        <p className='text-muted'>View 272 comments</p>
                    </div>
                    
                </div> 
            </div> 
          
        </div>
    )
}

export default Story