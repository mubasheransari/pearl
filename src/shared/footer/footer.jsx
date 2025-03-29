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
                                        <Link href="mailto:Info@pearlepp.co.uk" target='_blank'><label className='ms-2' style={{cursor:'pointer'}}>Info@pearlepp.co.uk</label></Link>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <Link href="https://wa.me/+447460140474" target='_blank'><label className='ms-2' style={{cursor:'pointer'}}>+44 7460 140474</label></Link>
                                    </li>
                                    <li className={`${style.wrap}`}>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <label className='ms-2'>Flat 02 Towerfieds, Westerham Road Bromley, BR2 6HF, London, United Kingdom</label>
                                    </li>
                                    <li>
        <Link href="https://apps.apple.com/us/app/pepp/id6503652490">
            <img 
                src="/apple2.png" 
                alt="About Me" 
                style={{cursor: 'pointer', width: '180px', height: '60px'}} 
            />
        </Link>
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
                                    <li>
                                    <Link href='#'>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href={'https://www.linkedin.com/company/pearl-engineers-planners-project-managers/'} target='_blank'><FontAwesomeIcon icon={faLinkedin} />
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href='#'>
                                    <FontAwesomeIcon icon={faX} />
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href='#'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href='#'>
                                    <FontAwesomeIcon icon={faYoutube} />
                                    </Link>
                                    </li>
                                    
                                </ul>
                            </span>
                            <span>
                                <label style={{cursor:'pointer'}} onClick={() => {setPrivacyModal(!privacyModal)}}>Privacy Policy</label>
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
