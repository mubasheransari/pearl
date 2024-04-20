import React from 'react'
import style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChartPie, faHandshake, faHeadset, faPersonDigging, faRankingStar, faRulerCombined, faVest, faVihara
} from '@fortawesome/free-solid-svg-icons'
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

function Services() {
    return (
        <section className={`${style.services}`} id="services">
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
    )
}

export default Services
