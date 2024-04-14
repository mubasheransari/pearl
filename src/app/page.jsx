'use client'
import React from 'react'
import style from './page.module.scss'
import BaseLayout from '@/app/baseLayout'

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
      <section className={`${style.about}`}>
        <div className={`${style.about_box} container py-5 d-flex`}>
          <div className={`${style.left}`}>
            <h6>About Us</h6>
            <div className={`${style.image_box}`}>
              <img src="/about.jpg" alt="about image" />
            </div>
            <div className={`${style.about_text}`}>
              <p>
                Pearl Engineers Planners and Project Managers, PEPP is an emerging civil and structuralengineering firm dedicated to the residential and commercial construction sector in theUnited Kingdom.
                With a passion for excellence and a commitment to deliver exceptionalresults, we bring expertise, innovation, and reliability to every project we undertake.
              </p>
            </div>
          </div>
          <div className={`${style.right}`}>
            <label className={`${style.strok}`}>Integrity</label>
            <label>Resilience</label>
            <label className={`${style.strok}`}>Intelligence</label>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}

export default Home
