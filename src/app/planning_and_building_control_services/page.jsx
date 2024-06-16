'use client'
import React, {useState} from 'react'
import style from '../style.module.scss'
import { Lora } from "next/font/google";
import Header from '@/shared/header/header';
const lora = Lora({ subsets: ["latin"] });

const building_control_point =[
    {
        heading:'Building Regulations',
        point:`Building Regulations: The Act empowers the relevant authorities to establish building regulations that govern various aspects of 
            construction, such as structural design, fire safety, accessibility, and sanitation.`
    },
    {
        heading:'Building Control Authority',
        point:`Building Control Authority: The Act establishes a Building Control Authority responsible for administering and enforcing the provisions of 
            the Act. This authority is often a government agency tasked with overseeing building construction and maintenance.`
    },
    {
        heading:'Building Permits',
        point:`Building Control Authority: The Act establishes a Building Control Authority responsible for administering and enforcing the provisions of the Act. 
        This authority is often a government agency tasked with overseeing building construction and maintenance.`
    },
    {
        heading:'Inspections and Enforcement',
        point:`The Act authorizes the Building Control Authority to conduct inspections of building sites to ensure compliance with regulations. It also provides for
         enforcement measures against violations, including the issuance of stop-work orders, fines, and prosecution.`
    },
    {
        heading:'Appeals and Dispute Resolution',
        point:`The Act may include provisions for appealing decisions made by the Building Control Authority and mechanisms for resolving disputes related to building 
        construction and regulation.`
    },
    {
        heading:'Penalties',
        point:`The Act typically outlines penalties for non-compliance with its provisions, which may include fines, imprisonment, or both.`
    }
]

const signoff_points =[
    {
        heading:'Legal Compliance',
        point:`: Building control regulations are put in place to ensure the 
                 safety and well-being of occupants and the public. Obtaining a sign-off demonstrates 
                that the building has been constructed in accordance with these regulations, reducing the risk of accidents or hazards.`
    },
    {
        heading:'Insurance and Liability',
        point:`: Having a completion certificate may be necessary for obtaining insurance coverage for the building. It also helps protect
                 the property owner and stakeholders from potential legal liabilities associated with non-compliance or construction defects.`
    },
    {
        heading:'Resale and Financing',
        point:`When selling or refinancing a property, prospective buyers or lenders may require evidence of compliance with building regulations, 
                which can be provided through the building control sign-off.`
    },{
        heading:'Peace of Mind',
        point:`For property owners, having a completion certificate provides assurance that the construction work has been carried out to the required 
                standards and that the building is safe for occupancy.`
    },
]

function planning_and_building_control_services() {

    return (
        <>
        <Header />
        <section className={`${style.category}`} id="planning_and_building_control_services">
                <div className={`${style.category_box} container py-5 d-flex`}>
                    <div className={`${style.left}`}>
                        <h4 className={lora.className}>Planning and Building Control Services</h4>
                        <h5 className={`${lora.className} mt-4`}>What is building control act 1986?</h5>
                        <div className={`${style.category_text}`}>
                        <p>The Building Control Act 1986 is a piece of legislation enacted in Singapore. It provides the legal framework 
                            for regulating the construction and maintenance of buildings in Singapore. The Act aims to ensure the safety, 
                            structural integrity, and quality of buildings, as well as to safeguard public health, safety, and welfare.</p>
                            <div>
                                {building_control_point.map((item,index)=>{
                                    return (
                                        <p key={'point_'+index}><span className='me-2' style={{fontWeight:600}}>{item.heading}:</span>{item.point}</p>
                                    )
                                })}
                            </div>
                            <p>
                            The Building Control Act 1986 is periodically amended to address evolving concerns, technological advancements, and 
                            changes in building practices. It plays a crucial role in maintaining standards of safety, quality, and sustainability 
                            in the built environment of Singapore.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${style.category_box} container py-5 d-flex`}>
                    <div className={`${style.left}`}>
                        <h4 className={lora.className}>What is a building control sign off and is it must?</h4>
                        <div className={`${style.category_text}`}>
                        <p>
                            A building control sign-off, also known as a completion certificate or final inspection certificate, 
                            is a document issued by the relevant building control authority or inspectorate upon the satisfactory completion of a 
                            construction project. It signifies that the building work has been carried out in compliance with the applicable building
                            regulations, codes, and approved plans.
                        </p>
                        <p>
                        The building control sign-off typically involves a final inspection of the completed construction to ensure that it meets the required 
                        standards for structural integrity, safety, fire protection, accessibility, and other relevant criteria. Once the inspection is completed
                        and the building is deemed compliant, the authority issues the sign-off certificate.
                        </p>
                        <p>Is it a must?</p>
                        <p>
                        In many jurisdictions, obtaining a building control sign-off is mandatory before the building can be occupied or put to its intended use. 
                        This requirement serves several important purposes:
                        </p>
                            <div>
                                {signoff_points.map((item,index)=>{
                                    return (
                                        <p key={'sign_point_'+index}><span className='me-2' style={{fontWeight:600}}>{item.heading}:</span>{item.point}</p>
                                    )
                                })}
                            </div>
                            <p>
                            Failure to obtain a building control sign-off when required may result in penalties, enforcement actions, or difficulties in using or transferring the property. 
                            Therefore, it is essential to ensure compliance with building control regulations and obtain the necessary approvals and certificates before occupying or using a newly constructed or renovated building
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default planning_and_building_control_services
