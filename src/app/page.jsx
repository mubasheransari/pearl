'use client'
import React from 'react'
import style from './page.module.scss'
import BaseLayout from '@/baseLayout'

const Home = () => {

  return (
    <BaseLayout>
      <section className={style.home}>
        <div className={`${style.back_layer}`}></div>
        <div className={style.video_box}>
          {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2aLqVb22LGI?autoplay=1&mute=1&controls=0&loop=1&showinfo=0" ></iframe> */}
          <iframe src="https://player.vimeo.com/video/872427139??autoplay=1&muted=1&autopause=0&background=1" allow='autoplay; fullscreen'></iframe>
          <div className={`${style.video_label}`}>PEARL ENGINEERING, PLANNERS & PROJECT MANAGERS</div>
        </div>
      </section>
    </BaseLayout>
  )
}

export default Home
