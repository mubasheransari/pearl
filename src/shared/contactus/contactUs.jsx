import React from 'react'
import style from './style.module.scss'
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChartPie, faHandshake, faHeadset, faPersonDigging, faRankingStar, faRulerCombined, faVest, faVihara,
    faEnvelope, faLocationDot, faMobile, faPhone
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function ContactUs() {

    const handleForm = (event) => {
        event.preventDefault();
        let name = event.target[0].value
        let email = event.target[2].value
        let company = event.target[1].value
        let contact = event.target[3].value
        let message = event.target[4].value
        console.warn(event)
        window.open(`mailto:Info@pearlepp.co.uk?subject=Inquiry&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0AContact: ${contact}%0D%0AMessage: ${message}`);
        event.target.reset(); 
    }

    return (
        <section className={`${style.contactUs}`} id="contact-us">
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
                                <label>+44 7460 140474</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`${style.getInTouch} container`}>
                <h2 className={lora.className}>Get In touch with us</h2>
                <form onSubmit={handleForm}>
                    <div className={`${style.formBody}`}>
                        <div className={`${style.formBox}`}>
                            <div className={`${style.formInput}`}>
                                <input type='text' placeholder='Name' required tabIndex={1} />
                            </div>
                            <div className={`${style.formInput}`}>
                                <input type='text' placeholder='Company' required tabIndex={3} />
                            </div>
                        </div>
                        <div className={`${style.formBox}`}>
                            <div className={`${style.formInput}`}>
                                <input type='email' placeholder='Email' required tabIndex={2} />
                            </div>
                            <div className={`${style.formInput}`}>
                                <input type='text' placeholder='Contact Number' required tabIndex={4} />
                            </div>
                        </div>
                        <div className={`${style.formBox} ${style.message}`}>
                            <div className={`${style.formInput}`}>
                                <textarea placeholder='Message' tabIndex={5} />
                            </div>
                        </div>
                    </div>
                    <div className={`${style.submitBox}`}>
                        <button type='submit'>Send Inquiry</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactUs
