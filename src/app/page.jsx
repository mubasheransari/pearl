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
              <p>
                Pearl Engineers Planners and Project Managers, PEPP is an emerging engineering Consultancy firm dedicated to the residential and commercial construction sector in the United Kingdom.
                With a passion for excellence and a commitment to deliver exceptionalresults, we bring expertise, innovation, and reliability to every project we undertake.
                At PEPP, we understand the significance of robust and reliable structures in the residentialhousing sector. Our team of experienced civil and structural engineers possesses a deepunderstanding
                of the unique challenges and intricacies involved in designing, analyzing, andconstructing the projects with a keen eye for detail and a focus on quality,
                we strive to createstructures that not only meet the highest standards of safety and functionality but alsoenhance the overall aesthetics of the project.
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
      <section className={`${style.services}`}>
        <div className={`${style.services_box} container`}>
          <div className={`${style.service_cards}`}>
            <div className={`${style.card_box}`}>
              <span><img /></span>
              <h6>Understanding Your Needs</h6>
              <p>We begin by listening attentively to your project requirements, objectives, and aspirations. Understanding your vision allows us to tailor our engineering solutions to meet your specific needs.</p>
            </div>
            <div className={`${style.card_box}`}>
              <span><img /></span>
              <h6>Site Analysis</h6>
              <p>Every site comes with its unique set of challenges and opportunities. Our experienced team conducts comprehensive site evaluations, considering factors such as soil conditions, environmental impacts, and regulatory requirements to inform our structural design process.</p>
            </div>
            <div className={`${style.card_box}`}>
              <span><img /></span>
              <h6>Innovative Design Solutions</h6>
              <p>Leveraging our expertise and cutting-edge technologies, we develop innovative structural designs that prioritize safety, efficiency, and sustainability. Our goal is to deliver solutions that not only meet but exceed your expectations.</p>
            </div>
            <div className={`${style.card_box}`}>
              <span><img /></span>
              <h6>Transparent Collaboration</h6>
              <p>Collaboration is at the heart of our process. We believe in open communication and collaboration with all stakeholders, including architects, contractors, and clients, to ensure alignment and seamless project execution.</p>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}

export default Home
