import React from 'react'
import style from './style.module.scss'
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

function ContactUs() {

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
                </div>
            </div>
        </section>
    )
}

export default ContactUs

