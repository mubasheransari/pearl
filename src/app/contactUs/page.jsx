'use client'
import BaseLayout from '@/app/baseLayout'
import React from 'react'
import style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Navigation from '@/app/shared/navigation/navigation'

const ContantUs = () => {
    return (
        <BaseLayout>
            <div className={`${style.contactUs}`}>
                <Navigation />
                <div className={`${style.locationBox} `}>
                    <div className={`${style.boxTitle} container`}>
                        <span>
                            <h1>Our Location</h1>
                        </span>
                        <span>
                            <label className={`${style.active}`}>United Kingdom</label>
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
                    <h2>Get In touch with us</h2>
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
            </div>
        </BaseLayout>
    )
}

export default ContantUs
