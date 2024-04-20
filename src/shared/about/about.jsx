import React from 'react'
import style from './style.module.scss'
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

function About() {
    return (
        <section className={`${style.about}`} id="about-us">
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
    )
}

export default About
