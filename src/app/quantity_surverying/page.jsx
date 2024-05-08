'use client'
import React, {useState} from 'react'
import style from '../style.module.scss'
import { Lora } from "next/font/google";
import Header from '@/shared/header/header';
const lora = Lora({ subsets: ["latin"] });

function quantity_surverying() {

    return (
        <>
        <Header />
        <section className={`${style.category}`} id="quantity_surverying">
                <div className={`${style.category_box} container py-5 d-flex`}>
                    <div className={`${style.left}`}>
                        <h6 className={lora.className}>Quantity Surverying</h6>
                        <div className={`${style.category_text}`}>
                            <p>
                                Greetings and a warm welcome to PEPP, an exciting new startup revolutionizing the realm of quantity surveying services in the United Kingdom. With a touch of quintessential English charm, we bring a fresh perspective and innovative approach to meet the diverse needs of our clients. <br />
                                At PEPP, we are proud to be at the forefront of the industry, offering comprehensive and cutting-edge quantity surveying solutions. As a dynamic startup, we combine our passion for civil engineering with a commitment to excellence, providing accurate cost estimation, meticulous cost control, and value engineering services that are tailor-made for your project. <br className='my-2' />
                                Our team of talented and forward-thinking quantity surveyors embodies the entrepreneurial spirit that defines us as a startup. We bring a wealth of knowledge and expertise to the table, leveraging the latest technology and methodologies to deliver precise and reliable results. With a strong focus on efficiency and attention to detail, we ensure that your project is managed with utmost care and professionalism. <br />
                                PEPP is driven by a deep understanding of the unique challenges faced by startups and small businesses in the construction industry. We recognize the importance of providing cost-effective solutions without compromising on quality. Our agile approach enables us to adapt swiftly to your evolving requirements, ensuring that we deliver timely and cost-efficient services that align with your business objectives. <br />
                                What truly sets PEPP apart is our dedication to exceptional customer experience. We believe in building lasting relationships with our clients, fostering open communication, and placing your satisfaction at the core of everything we do. Our friendly and approachable team is always on hand to address your queries and provide expert guidance throughout the project lifecycle. <br />
                                As a new startup, we are enthusiastic about embracing sustainability and environmentally conscious practices. We integrate eco-friendly solutions into our quantity surveying services, offering recommendations for sustainable materials, energy-efficient designs, and cost-effective green initiatives. Together, we can contribute to a greener future while delivering outstanding value to your project. <br />
                                PEPP invites you to embark on an exciting journey with us. Experience the innovative spirit, personalized attention, and unmatched expertise of our startup team. Contact us today to discuss your quantity surveying needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default quantity_surverying
