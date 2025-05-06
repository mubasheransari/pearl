
'use client';
import React, { useEffect, useRef } from 'react';
import style from './video.module.scss';
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const Video = () => {
  const videoRef = useRef();

  useEffect(() => {
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const video = videoRef.current;

    if (video) {
      if (isSafari) {
        // ✅ Safari: autoplay with sound only
        video.muted = false;
        video.play().then(() => {
          console.log('Safari: autoplay with sound succeeded ✅');
        }).catch((err) => {
          console.error('Safari: autoplay with sound failed ❌', err);
        });
      } else if (isChrome) {
        // ✅ Chrome: autoplay muted
        video.muted = true;
        video.play().then(() => {
          console.log('Chrome: autoplay muted succeeded ✅');

          // ✅ Always show the button to enable sound
          const btn = document.createElement('button');
          btn.innerText = 'Click to enable sound';
          btn.style.position = 'fixed';
          btn.style.top = '20px';
          btn.style.right = '20px';
          btn.style.zIndex = '9999';
          btn.style.padding = '10px';
          btn.style.background = '#0070f3';
          btn.style.color = '#fff';
          btn.style.border = 'none';
          btn.style.borderRadius = '5px';
          btn.style.cursor = 'pointer';

          btn.onclick = () => {
            video.pause();
            video.muted = false;
            video.currentTime = 0;
            video.play().then(() => {
              btn.remove();
            }).catch((err) => {
              console.error('Chrome: manual sound enable failed:', err);
            });
          };

          document.body.appendChild(btn);
        }).catch(() => {
          console.warn('Chrome autoplay failed (rare)');

          // ✅ Still show the button even if autoplay fails
          const btn = document.createElement('button');
          btn.innerText = 'Click to enable sound';
          btn.style.position = 'fixed';
          btn.style.top = '20px';
          btn.style.right = '20px';
          btn.style.zIndex = '9999';
          btn.style.padding = '10px';
          btn.style.background = '#0070f3';
          btn.style.color = '#fff';
          btn.style.border = 'none';
          btn.style.borderRadius = '5px';
          btn.style.cursor = 'pointer';

          btn.onclick = () => {
            video.pause();
            video.muted = false;
            video.currentTime = 0;
            video.play().then(() => {
              btn.remove();
            }).catch((err) => {
              console.error('Chrome: manual sound enable failed:', err);
            });
          };

          document.body.appendChild(btn);
        });
      } else {
        // ✅ Other browsers: muted autoplay
        video.muted = true;
        video.play().catch((err) => {
          console.error('Other browser autoplay failed:', err);
        });
      }
    }
  }, []);

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
        >
          <source src='/pepp-video.mp4' type="video/mp4" />
        </video>
        <div className={`${style.video_label} ${lora.className}`}>
          PEARL ENGINEERS, PLANNERS & PROJECT MANAGERS
        </div>
      </div>
    </div>
  );
};

export default Video;

