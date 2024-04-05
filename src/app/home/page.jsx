'use client'
import React, { useState } from 'react'
import style from './home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'



const Home = () => {

    const [year, setYear] = useState(new Date())

    return (
        <>
            <header className={style.header}>
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div class={`container-fluid ${style.header_container}`}>
                        <div className={`${style.logo_box}`}>
                            <span><img src="/pearl.png" /></span>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class={`collapse navbar-collapse ${style.header_links}`} id="navbarCollapse">
                            <ul class="navbar-nav mb-2 mb-md-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Our Capabilities</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className={style.home}>
                <div className={style.video_box}>
                    {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2aLqVb22LGI?autoplay=1&mute=1&controls=0&loop=1&showinfo=0" ></iframe> */}
                    <iframe width="100%" height="100%" src="https://player.vimeo.com/video/872427139??autoplay=1&muted=1&autopause=0&background=1" ></iframe>
                    <div className={`${style.video_label}`}>PEARL ENGINEERING, PLANNERS & PROJECT MANAGERS</div>
                </div>
            </div>
            <footer className={`${style.footer}`}>
                <div className={`${style.footer_top}`}></div>
                <div className={`${style.footer_bottom}`}>
                    <div className={`${style.copy_right}`}>© Copyright {year.getFullYear()} PERAL.</div>
                    <div className={`${style.social_terms}`}>
                        <span>
                            <ul>
                                <li><FontAwesomeIcon icon={faFacebookF} /></li>
                                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                                <li><FontAwesomeIcon icon={faX} /></li>
                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                <li><FontAwesomeIcon icon={faYoutube} /></li>
                            </ul>
                        </span>
                        <span>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Services</a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home
