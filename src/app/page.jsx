'use client'
import React from 'react'
import style from './page.module.scss'
import BaseLayout from '@/app/baseLayout'
import Expertise from '@/shared/expertise/expertise'
import { Lora } from "next/font/google";
import Services from '@/shared/services/services'
import About from '@/shared/about/about'
import ContactUs from '@/shared/contactus/contactUs'

const lora = Lora({ subsets: ["latin"] });

const Home = () => {

  return (
    <BaseLayout>
      <section className={style.home} id="home">
        <div className={`${style.back_layer}`}></div>
        <div className={style.video_box}>
          {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2aLqVb22LGI?autoplay=1&mute=1&controls=0&loop=1&showinfo=0" ></iframe> */}
          <iframe src="https://player.vimeo.com/video/872427139??autoplay=1&muted=1&autopause=0&background=1" allow='autoplay; fullscreen'></iframe>
          <div className={`${style.video_label} ${lora.className}`}>PEARL ENGINEERING, PLANNERS & PROJECT MANAGERS</div>
        </div>
      </section>
      <About />
      <Services />
      <Expertise />
      <ContactUs />
    </BaseLayout>
  )
}

export default Home
