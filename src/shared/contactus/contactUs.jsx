import React,  { useRef, useState } from 'react'
import style from './style.module.scss'
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emailjs from '@emailjs/browser';

import {
    faChartPie, faHandshake, faHeadset, faPersonDigging, faRankingStar, faRulerCombined, faVest, faVihara,
    faEnvelope, faLocationDot, faMobile, faPhone
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function ContactUs() {
    const form = useRef();
    const [err,setErr] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
      
            if(!e.target[0].value || !e.target[1].value || !e.target[2].value || !e.target[3].value || !e.target[4].value  ){
                
                setErr('Please fill all  required fields.')
                setTimeout(()=>setErr(''),2000)

                return;

            }
    
        emailjs
          .sendForm( 'service_lbvt72k', 'template_i1bu4iz', form.current, {
            publicKey:  'YvcL1-VJjm_J4uKFv',
          })
          .then(
            () => {
              console.log('SUCCESS!');setErr('Form sumbitted successfully'); setTimeout(()=>setErr(''),2000);e.target.reset(); 

            },
            (error) => {
              console.log('FAILED...', );setErr('Form submission failed'); setTimeout(()=>setErr(''),2000); 

            },
          );
      };

    // const handleForm = (event) => {
    //     event.preventDefault();
    //     let name = event.target[0].value
    //     let email = event.target[2].value
    //     let company = event.target[1].value
    //     let contact = event.target[3].value
    //     let message = event.target[4].value
    //     console.warn(event)
    //     window.open(`mailto:Info@pearlepp.co.uk?subject=Inquiry&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0AContact: ${contact}%0D%0AMessage: ${message}`);
    //     event.target.reset(); 
    // }

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
                    {/* <div className={`${style.locationOverLay}`}>
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
                    </div> */}
                </div>
            </div>
            {/* <div className={`${style.getInTouch} container`}>
                <h2 className={lora.className}>Get In touch with us</h2>
                 <form ref={form} onSubmit={sendEmail}>
                    <div className={`${style.formBody}`}>
                        <div className={`${style.formBox}`}>
                            <div className={`${style.formInput}`}>
                                <input type="text"  placeholder='Name' name="user_name" />
                            </div>
                            <div className={`${style.formInput}`}>
                                <input type="text"  placeholder='Company' name="company_name" />
                            </div>
                        </div>
                        <div className={`${style.formBox}`}>
                            <div className={`${style.formInput}`}>
                                <input type="email"  placeholder='Email' name="user_email" required />
                            </div>
                            <div className={`${style.formInput}`}>
                                <input type="text"  placeholder='Contact Number' name="contact_number" required />
                            </div>
                        </div>
                        <div className={`${style.formBox} ${style.message}`}>
                            <div className={`${style.formInput}`}>
                                <textarea placeholder='Message' name="message" />
                            </div>
                        </div>
                    </div>
                    <div className={`${style.submitBox}`}>
                        <input type="submit" value="Send Inquiry" />
                    </div>
                    <p className='text-danger mt-3 d-flex justify-content-center font-large'>{err}</p>
                </form> 
            </div> */}
        </section>
    )
}

export default ContactUs
