'use client'
import React, { useRef, useState, useEffect } from 'react';
import style from './video.module.scss'
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const Video = () => {
    const videoRef = useRef();
    const [isMuted, setIsMuted] = useState(true); // Track if the video is muted

    useEffect(() => {
      const video = videoRef.current;
      
      if (video) {
        // Detect browser to determine if it is Safari or Chrome
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if (isSafari) {
          // If Safari, do not mute the video (autoplay with sound)
          video.muted = false;
        } else {
          // If not Safari (assume Chrome or other browser), mute the video for autoplay
          video.muted = true;
        }

        // Start playing the video after setting the muted state
        video.play().catch((error) => console.error("Autoplay prevented:", error));
      }
    }, []);

    // Handle unmuting the video (if needed)
    const handleUnmute = () => {
      const video = videoRef.current;
      if (video && isMuted) {
        video.muted = false;
        setIsMuted(false);
      }
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
            onClick={handleUnmute} // Allow unmuting on user click
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


// 'use client';
// import React, { useRef } from 'react';
// import style from './video.module.scss';
// import { Lora } from "next/font/google";

// const lora = Lora({ subsets: ["latin"] });

// const Video = () => {
//   const videoRef = useRef();

//   return (
//     <div className={style.home} id="home">
//       <div className={style.back_layer}></div>
//       <div className={style.video_box}>
//         <video
//           ref={videoRef}
//           className={style.video_div}
//           preload="auto"
//           playsInline
//           autoPlay
//           loop
//           muted={false} // Ensure the video plays with sound
//         >
//           <source src='/pepp-video.mp4' type="video/mp4" />
//         </video>
//         <div className={`${style.video_label} ${lora.className}`}>
//           PEARL ENGINEERS, PLANNERS & PROJECT MANAGERS
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Video;
