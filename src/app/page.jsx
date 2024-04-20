'use client'
import React from 'react'
import style from './page.module.scss'
import BaseLayout from '@/app/baseLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartPie, faHandshake, faHeadset, faPersonDigging, faRankingStar, faRulerCombined, faVest, faVihara,
  faEnvelope, faLocationDot, faMobile, faPhone
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Expertise from '@/shared/expertise/expertise'
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const Home = () => {

  return (
    <BaseLayout>
      <section className={style.home}>
        <div className={`${style.back_layer}`}></div>
        <div className={style.video_box}>
          {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2aLqVb22LGI?autoplay=1&mute=1&controls=0&loop=1&showinfo=0" ></iframe> */}
          <iframe src="https://player.vimeo.com/video/872427139??autoplay=1&muted=1&autopause=0&background=1" allow='autoplay; fullscreen'></iframe>
          <div className={`${style.video_label} ${lora.className}`}>PEARL ENGINEERING, PLANNERS & PROJECT MANAGERS</div>
        </div>
      </section>
      <section className={`${style.about}`}>
        <div className={`${style.about_box} container py-5 d-flex`}>
          <div className={`${style.left}`}>
            <h6 className={lora.className}>About Us</h6>
            <div className={`${style.image_box}`}>
              <img src="/about.jpg" alt="about image" />
            </div>
            <div className={`${style.about_text}`}>
              <p>
                Pearl Engineers Planners and Project Managers, PEPP is an emerging engineering Consultancy firm dedicated to the residential and commercial construction sector in the United Kingdom. With a passion for excellence and a commitment to deliver exceptionalresults, we bring expertise, innovation, and reliability to every project we undertake.
              </p>
              <p>
                At PEPP, we understand the significance of robust and reliable structures in the residentialhousing sector. Our team of experienced civil and structural engineers possesses a deepunderstanding of the unique challenges and intricacies involved in designing, analyzing, andconstructing the projects with a keen eye for detail and a focus on quality, we strive to createstructures that not only meet the highest standards of safety and functionality but alsoenhance the overall aesthetics of the project.
              </p>
            </div>
          </div>
          <div className={`${style.right} ${lora.className}`}>
            <label className={`${style.strok}`}>Integrity</label>
            <label>Resilience</label>
            <label className={`${style.strok}`}>Intelligence</label>
          </div>
        </div>
      </section>
      <section className={`${style.services}`}>
        <div className={`${style.services_box} container`}>
          <div className={`${style.top_services}`}>
            <div className={`${style.intro}`}>
              <h3 className={lora.className}>BUILDING YOUR VISION</h3>
              <p>Welcome to PEPP, your partner in structural engineering excellence. We're here to transform your architectural vision into a structurally sound reality. Here's our approach</p>
              <p>Thank you for considering PEPP for your structural engineering needs. We're passionate about delivering innovative solutions that bring your architectural vision to life.
                Get in touch with us today to start your journey towards a structurally exceptional future.</p>
            </div>
            <div></div>
            <div className={`${style.card_box}`}>
              <span><FontAwesomeIcon icon={faVest} /></span>
              <h6 className={lora.className}>Understanding Your Needs</h6>
              <p>We begin by listening attentively to your project requirements, objectives, and aspirations. Understanding your vision allows us to tailor our engineering solutions to meet your specific needs.</p>
            </div>
            <div className={`${style.card_box}`}>
              <span><FontAwesomeIcon icon={faChartPie} /></span>
              <h6 className={lora.className}>Site Analysis</h6>
              <p>Every site comes with its unique set of challenges and opportunities. Our experienced team conducts comprehensive site evaluations, considering factors such as soil conditions, environmental impacts, and regulatory requirements to inform our structural design process.</p>
            </div>
          </div>
          <div className={`${style.service_cards}`}>
            <div className={`${style.card_box}`}>
              <span><FontAwesomeIcon icon={faVihara} /></span>
              <h6 className={lora.className}>Innovative Design Solutions</h6>
              <p>Leveraging our expertise and cutting-edge technologies, we develop innovative structural designs that prioritize safety, efficiency, and sustainability. Our goal is to deliver solutions that not only meet but exceed your expectations.</p>
            </div>
            <div className={`${style.card_box}`}>
              <span><FontAwesomeIcon icon={faHandshake} /></span>
              <h6 className={lora.className}>Transparent Collaboration</h6>
              <p>Collaboration is at the heart of our process. We believe in open communication and collaboration with all stakeholders, including architects, contractors, and clients, to ensure alignment and seamless project execution.</p>
            </div>
            <div className={`${style.card_box}`}>
              <span><FontAwesomeIcon icon={faRulerCombined} /></span>
              <h6 className={lora.className}>Detailed Engineering Plans</h6>
              <p> Precision is our hallmark. We provide detailed engineering plans and specifications that adhere to industry standards and regulatory requirements, guiding the construction process with clarity and accuracy.</p>
            </div>
            <div className={`${style.card_box}`}>
              <span><FontAwesomeIcon icon={faPersonDigging} /></span>
              <h6 className={lora.className}>Construction Oversight</h6>
              <p>Our commitment to quality extends to the construction phase. We provide comprehensive oversight and support to ensure that the structural elements are implemented according to design specifications, minimizing risks and maximizing efficiency.</p>
            </div>
            <div className={`${style.card_box}`}>
              <span><FontAwesomeIcon icon={faRankingStar} /></span>
              <h6 className={lora.className}>Quality Assurance</h6>
              <p>Rigorous quality assurance measures are implemented throughout the project lifecycle. From material selection to final inspections, we uphold the highest standards of quality and integrity to deliver exceptional results.</p>
            </div>
            <div className={`${style.card_box}`}>
              <span><FontAwesomeIcon icon={faHeadset} /></span>
              <h6 className={lora.className}>Post-Construction Support</h6>
              <p>Our dedication to your satisfaction doesn't end with project completion. We offer ongoing support and assistance to address any post-construction concerns or maintenance needs, ensuring the long-term performance and durability of your structure.</p>
            </div>
          </div>
        </div>
      </section>
      <Expertise />
      <section className={`${style.contactUs}`}>
        <div className={`${style.locationBox} `}>
          <div className={`${style.boxTitle} container`}>
            <span>
              <h1 className={lora.className}>Our Location</h1>
            </span>
            <span>
              <label className={`${style.active} ${lora.className}`}>United Kingdom</label>
            </span>
          </div>
          <div className={`${style.mapBox}`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2491.0280513620164!2d0.038921!3d51.365781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDIxJzU2LjgiTiAwwrAwMicyMC4xIkU!5e0!3m2!1sen!2s!4v1713013995125!5m2!1sen!2s" width="100%" height="500" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className={`${style.locationOverLay}`}>
              <h4>United Kingdom</h4>
              <ul>
                <li>
                  <span><FontAwesomeIcon icon={faLocationDot} /></span>
                  <label>Flat 02 Towerfieds, Westerham Road Bromley, BR2 6HF, London, United Kingdom</label>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faEnvelope} /></span>
                  <label>Info@pearlepp.co.uk</label>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faPhone} /></span>
                  <label>+44 2035763199</label>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faMobile} /></span>
                  <label>+44 7460 140474</label>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                  <label>+44 7460 140474</label>
                </li>
              </ul>
              <h5 className='mb-3'>Support</h5>
              <label className='mb-3'>We’re here to answer your technical questions whenever you need.</label>
              <ul>
                <li>
                  <span><FontAwesomeIcon icon={faPhone} /></span>
                  <label>+44 7391 569139</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${style.getInTouch} container`}>
          <h2 className={lora.className}>Get In touch with us</h2>
          <div className={`${style.formBody}`}>
            <div className={`${style.formBox}`}>
              <div className={`${style.formInput}`}>
                <input type='text' placeholder='Name' />
              </div>
              <div className={`${style.formInput}`}>
                <input type='text' placeholder='Company' />
              </div>
            </div>
            <div className={`${style.formBox}`}>
              <div className={`${style.formInput}`}>
                <input type='email' placeholder='Email' />
              </div>
              <div className={`${style.formInput}`}>
                <input type='text' placeholder='Enqiry On' />
              </div>
            </div>
            <div className={`${style.formBox} ${style.message}`}>
              <div className={`${style.formInput}`}>
                <textarea placeholder='Message' />
              </div>
            </div>
          </div>
          <div className={`${style.submitBox}`}>
            <button>Send Inquiry</button>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}

export default Home
