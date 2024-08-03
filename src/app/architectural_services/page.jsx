'use client'
import React, {useState} from 'react'
import style from '../style.module.scss'
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

function architectural_services() {

    return (
        <>
        <section className={`${style.category}`} id="architectural_services">
                <div className={`${style.category_box} container py-5 d-flex`}>
                    <div className={`${style.left}`}>
                        <h4 className={lora.className}>Architectural Services</h4>
                        <div className={`${style.category_text}`}>
                            <p>Welcome to Pepp, a pioneering startup revolutionizing the field of structural engineering for small residential houses in the UK. With our 
                            unwavering commitment to excellence and innovation, we are poised to become the go-to partner for homeowners, architects, and builders seeking
                            top-notch engineering solutions.</p>
                            <p>At Pepp, we recognize the unique challenges faced by small residential projects. From renovations and 
                            extensions to new constructions, we understand that every decision and detail matter. That’s why we have assembled a team of highly skilled 
                            and experienced structural engineers who specialize in small-scale residential projects. With their expertise and meticulous attention to 
                            detail, we can ensure that your project is delivered with the highest level of precision and efficiency.</p>
                            <p>Our mission at Pepp is to create
                            structurally sound, functional, and aesthetically pleasing homes that stand the test of time. We believe that the foundation of a successful 
                            project lies in the strength and stability of its structure. That’s why we leave no stone unturned when it comes to delivering superior 
                            engineering services. Our team works closely with you, taking the time to understand your unique requirements, aspirations, and budgetary 
                            constraints.</p>
                            <p>With a deep understanding of UK building regulations and standards, we ensure that your project complies with all necessary 
                            requirements. Our engineers are well-versed in the latest industry practices and employ cutting-edge technologies to analyze, design, and 
                            optimize the structural integrity of your residential property. From the initial concept phase to the final implementation, we are with you 
                            every step of the way, providing expert guidance and unwavering support.</p>
                            <p>At Pepp, we pride ourselves on our ability to combine technical expertise with creative problem-solving. We approach each project as a 
                            unique opportunity to innovate and push the boundaries of what’s possible. Our engineers leverage their extensive knowledge and experience to 
                            deliver tailored solutions that meet your specific needs.We strive to find the perfect balance between functionality, aesthetics, and 
                            cost-effectiveness, ensuring that your small residential house exceeds your expectations.</p>
                            <p>Collaboration and clear communication are at the core of our work ethos. We understand the importance of a 
                            seamless integration between homeowners, architects, and builders to deliver a successful project. That’s why we foster an open and 
                            collaborative environment, where all stakeholders can actively contribute and exchange ideas. We believe that by working together, we can 
                            achieve remarkable results and create homes that inspire and delight.</p>
                            <p>Choosing Pepp means choosing a dedicated partner who is invested in 
                            your project’s success. We are passionate about delivering exceptional engineering services that not only meet but surpass industry standards.
                            Our team’s unwavering commitment to quality, reliability, and client satisfaction sets us apart in the market.</p>
                            <p>Embark on your journey to a structurally superior and aesthetically pleasing home with Pepp. Contact us today and let our expertise 
                            transform your vision into a reality. Together, let’s build the foundations for a brighter future.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default architectural_services
