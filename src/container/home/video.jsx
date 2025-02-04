'use client'
import React from 'react'
import { useRef, useEffect } from 'react';
import style from './video.module.scss'
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const Video = () => {
    const videoRef = useRef();

    useEffect(() => {
      const video = videoRef.current;
      if (video) {
        video.muted = true;
        video.play().catch(error => {
          console.error('Autoplay was prevented:', error);
        });
      }
    }, [videoRef]);
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