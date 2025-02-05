'use client'
import React from 'react'
import { useRef, useEffect } from 'react';
import style from './video.module.scss'
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const Video = () => {
    const videoRef = useRef();

    // useEffect(() => {
    //   const video = videoRef.current;
    //   if (video) {
    //     video.muted = true;
    //     video.play().catch(error => {
    //       console.error('Autoplay was prevented:', error);
    //     });
    //     setTimeout(() => {
    //       video.muted = false;
    //     }, 3000); // Unmute after 3 seconds
    //   }
    // }, []);

    useEffect(() => {
      const video = videoRef.current;
      if (video) {
        video.muted = true;
        video.play()
          .then(() => {
            setTimeout(() => {
              video.muted = false;
              video.currentTime = 0; // Restart to ensure playback
              video.play(); // Restart playback after unmuting
            }, 3000);
          })
          .catch((error) => console.error("Autoplay prevented:", error));
      }
    }, []);
    
  return (
    <div className={style.home} id="home">
        <div className={`${style.back_layer}`}></div>
        <div className={style.video_box}>
          <video ref={videoRef} className={`${style.video_div}`} preload="auto" playsInline autoplay loop>
            <source src='/pepp-video.mp4' type="video/mp4" />
          </video>
          <div className={`${style.video_label} ${lora.className}`}>PEARL ENGINEERS, PLANNERS & PROJECT MANAGERS</div>
        </div>
      </div>
  )
}

export default Video