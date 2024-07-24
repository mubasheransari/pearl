'use client'
import { useRef, useEffect } from 'react';
import style from './page.module.scss'
import BaseLayout from '@/app/baseLayout'
import Expertise from '@/shared/expertise/expertise'
import { Lora } from "next/font/google";
import Services from '@/shared/services/services'
import About from '@/shared/about/about'
import ContactUs from '@/shared/contactus/contactUs'
import NewContactUs from '@/shared/newContactUs/newContactUs'


const lora = Lora({ subsets: ["latin"] });

const Home = () => {

  const videoRef = useRef();
  // const event = ({ action, category, label, value }) => {
  //   (window).gtag('event', action, {
  //     event_category: category,
  //     event_label: label,
  //     value: value,
  //   });
  // };

  // useEffect(()=>{
  //   const AddToCart =()=>{
  //     event(
  //       {
  //       action: 'add_to_cart',
  //       category: 'ecommerce',
  //       label: 'Item added to cart',
  //       value: 'Tesla',}
  //     )

  //   }
  //   AddToCart()
    
  // },[])

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
    <BaseLayout>
      <section className={style.home} id="home">
        <div className={`${style.back_layer}`}></div>
        <div className={style.video_box}>
          <video ref={videoRef} className={`${style.video_div}`} preload="auto" playsInline autoplay loop muted>
            <source src='/PEPP_video.mp4' type="video/mp4" />
          </video>
          <div className={`${style.video_label} ${lora.className}`}>PEARL ENGINEERS, PLANNERS & PROJECT MANAGERS</div>
        </div>
      </section>
      <About />
      <Services />
      <Expertise />
      <ContactUs />
      <NewContactUs />
    </BaseLayout>
  )
}

export default Home
