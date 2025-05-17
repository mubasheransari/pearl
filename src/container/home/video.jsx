'use client';
import React, { useEffect, useRef, useState } from 'react';
import style from './video.module.scss';
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const Video = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Start muted to satisfy autoplay policies
      videoRef.current.play().catch(err => {
        console.log("Autoplay error:", err);
      });
    }
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;

    const newMutedState = !muted;
    videoRef.current.muted = newMutedState;
    setMuted(newMutedState);
  };

  return (
    <div className={style.home} id="home">
      <div className={style.back_layer}></div>
      <div className={style.video_box}>
        <video
          ref={videoRef}
          className={style.video_div}
          preload="auto"
          playsInline
          autoPlay
          loop
          muted={muted}
        >
          <source src='/pepp-video.mp4' type="video/mp4" />
        </video>

        <button
          className={style.mute_button}
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? '🔇 Muted' : '🔊 Unmuted'}
        </button>

        <div className={`${style.video_label} ${lora.className}`}>
          PEARL ENGINEERS, PLANNERS & PROJECT MANAGERS
        </div>
      </div>
    </div>
  );
};

export default Video;
