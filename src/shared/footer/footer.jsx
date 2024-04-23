'use client'
import React, { useState } from 'react'
import style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faLocationDot, faMapLocationDot, faMapMarked, faPhone, faX } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Lora } from "next/font/google";
import Privacy from '@/shared/popups/privacy'
import Link from 'next/link'

const lora = Lora({ subsets: ["latin"] });

const Footer = () => {

    const [year, setYear] = useState(new Date())
    const [privacyModal, setPrivacyModal] = useState(false)

    return (
        <footer className={`${style.footer}`}>
            <div className={`${style.container}`}>
                <div className={`${style.footer_top} container`}>
                    <div className={`${style.left}`}>
                        <div className={``}>
                            <span ><img src="/pearl.png" /></span>
                            {/* <label>Subscribe <br /> to our newsletter</label> */}
                        </div>
                    </div>
                    <div className={`${style.right}`}>
                        <div className={`d-flex justify-content-between`}>
                            <span>
                                <label className={lora.className}>Company</label>
                                <ul>
                                    <li><Link href={'/#home'}>Home</Link></li>
                                    <li><Link href={'/#about-us'}>About Us</Link></li>
                                    <li><Link href={'/#services'}>Our Vision</Link></li>
                                    <li><Link href={'/#expertise'}>Our Expertise</Link></li>
                                    <li><Link href={'/#contact-us'}>Contact Us</Link></li>
                                </ul>
                            </span>
                            <span>
                                <label className={lora.className}>Contact Us</label>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <label className='ms-2'>Info@pearlepp.co.uk</label>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <label className='ms-2'>+44 7460 140474</label>
                                    </li>
                                    <li className={`${style.wrap}`}>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <label className='ms-2'>Flat 02 Towerfieds, Westerham Road Bromley, BR2 6HF, London, United Kingdom</label>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`${style.footer_bottom}`}>
                    <div className={`container d-flex`}>
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
                                <label onClick={() => {setPrivacyModal(!privacyModal)}}>Privacy Policy</label>
                                {/* <a href="#">Terms of Services</a> */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Privacy isOpen={privacyModal} toggle={() => {setPrivacyModal(!privacyModal)}} />
        </footer>
    )
}

export default Footer
