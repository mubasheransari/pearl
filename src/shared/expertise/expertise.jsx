// 'use client'
// import React, { useState } from 'react'
// import style from './style.module.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
// import { Lora } from "next/font/google";

// const lora = Lora({ subsets: ["latin"] });
// const Expertise = () => {
//     const expertise = [
//         {
//             heading: 'Discovery Phase',
//             text: '"We start by listening. Understanding your vision, lifestyle, and desires for your dream home is paramount. We delve deep into what makes your dream unique."'
//         },
//         {
//             heading: 'Site Evaluation',
//             text: '"Every plot of land has its characteristics. We conduct a thorough assessment of your site, considering topography, orientation, and local regulations, to maximize its potential."'
//         },
//         {
//             heading: 'Conceptualization',
//             text: '"Creativity takes center stage. Our team of skilled architects crafts initial design concepts that capture the essence of your dream, blending innovation with functionality."'
//         },
//         {
//             heading: 'Design Presentation',
//             text: '"Collaboration is key. We present our conceptual designs with immersive 3D visualizations, ensuring your vision is brought to life. Your feedback guides us as we refine the designs."'
//         },
//         {
//             heading: 'Detailed Planning',
//             text: '"Precision is paramount. We dive into detailed planning and documentation, developing architectural plans and specifications that reflect your vision and values."'
//         },
//         {
//             heading: 'Construction Oversight',
//             text: '"Quality is non-negotiable. Throughout construction, we provide dedicated support and supervision to ensure the design is executed flawlessly, on time, and within budget."'
//         },
//         {
//             heading: 'Final Touches',
//             text: '"Perfection is our standard. As construction nears completion, we conduct meticulous inspections, overseeing the final touches to ensure every detail meets our high standards."'
//         },
//         {
//             heading: 'Post-Occupancy Support',
//             text: '"Your satisfaction is our priority. Even after project completion, we\&apos;\re here to address any questions, concerns, or maintenance needs, ensuring your dream home remains a source of joy for years to come."'
//         },
//     ]

//     const [collapse, setCollapse] = useState(0)

//     const handleCollapse = (index) => {
//         if (collapse == index) {
//             setCollapse(null)
//         } else {
//             setCollapse(index)
//         }
//     }

//     return (
//         <section className={`${style.expertise}`} id="expertise">
//             <div className={`${style.expertise_box} container`}>
//                 <div className={`${style.left}`}>
//                     <label>OUR APPROACH</label>
//                     <h3 className={`mt-3 ${lora.className}`}>
//                         @ PEPP, where we're dedicated to turning your dream home into a reality that surpasses your expectations. Here's how we approach each project
//                     </h3>
//                 </div>
//                 <div className={`${style.right}`}>
//                     <div className={`${style.list_box}`}>
//                         {expertise.map((item, index) => {
//                             return (
//                                 <div key={'expertise_'+index} className={`${style.list_item}`}>
//                                     <div className={`${style.list_header} ${lora.className}`} onClick={() => handleCollapse(index)}>
//                                         <label>
//                                             <small>{index + 1}</small>
//                                             <span>
//                                                 <h5>{item.heading}</h5>
//                                             </span>
//                                         </label>
//                                         <span className={`${collapse == index ? style.rotate : ''}`}><FontAwesomeIcon icon={faArrowDown} /></span>
//                                     </div>
//                                     <div className={`${style.list_collapse} ${collapse == index ? style.show : ''}`}>
//                                         <p>{item.text}</p>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Expertise



'use client'
import React, { useState } from 'react'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

const Expertise = () => {
  const expertise = [
    {
      heading: 'Discovery Phase',
      text: 'We start by listening. Understanding your vision, lifestyle, and desires for your dream home is paramount. We delve deep into what makes your dream unique.',
    },
    {
      heading: 'Site Evaluation',
      text: 'Every plot of land has its characteristics. We conduct a thorough assessment of your site, considering topography, orientation, and local regulations, to maximize its potential.',
    },
    {
      heading: 'Conceptualization',
      text: 'Creativity takes center stage. Our team of skilled architects crafts initial design concepts that capture the essence of your dream, blending innovation with functionality.',
    },
    {
      heading: 'Design Presentation',
      text: 'Collaboration is key. We present our conceptual designs with immersive 3D visualizations, ensuring your vision is brought to life. Your feedback guides us as we refine the designs.',
    },
    {
      heading: 'Detailed Planning',
      text: 'Precision is paramount. We dive into detailed planning and documentation, developing architectural plans and specifications that reflect your vision and values.',
    },
    {
      heading: 'Construction Oversight',
      text: 'Quality is non-negotiable. Throughout construction, we provide dedicated support and supervision to ensure the design is executed flawlessly, on time, and within budget.',
    },
    {
      heading: 'Final Touches',
      text: 'Perfection is our standard. As construction nears completion, we conduct meticulous inspections, overseeing the final touches to ensure every detail meets our high standards.',
    },
    {
      heading: 'Post-Occupancy Support',
      text: "Your satisfaction is our priority. Even after project completion, we’re here to address any questions, concerns, or maintenance needs, ensuring your dream home remains a source of joy for years to come.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className={styles.expertise} id="expertise">
      <div className={`${styles.wrap} container`}>
        {/* Left intro */}
        <div className={styles.left}>
          <div className={styles.kicker}>OUR APPROACH</div>

          <h2 className={`${styles.title} ${lora.className}`}>
            At PEPP, we turn your dream home into a reality that goes beyond expectations.
          </h2>

          <p className={styles.sub}>
            A clear, structured process — from early discovery to post-completion support — so you always
            know what’s next.
          </p>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <div className={styles.statNum}>8</div>
              <div className={styles.statLabel}>Project Stages</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>UK</div>
              <div className={styles.statLabel}>Nationwide Support</div>
            </div>
          </div>
        </div>

        {/* Right accordion */}
        <div className={styles.right}>
          <div className={styles.accordion}>
            {expertise.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={`expertise_${index}`} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                  <button
                    type="button"
                    className={`${styles.header} ${lora.className}`}
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`exp_panel_${index}`}
                  >
                    <span className={styles.step}>
                      <span className={styles.stepDot} />
                      <span className={styles.stepText}>Step {index + 1}</span>
                    </span>

                    <span className={styles.heading}>
                      <span className={styles.headingText}>{item.heading}</span>
                    </span>

                    <span className={`${styles.chev} ${isOpen ? styles.rotate : ''}`} aria-hidden="true">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </button>

                  <div
                    id={`exp_panel_${index}`}
                    className={`${styles.panel} ${isOpen ? styles.show : ''}`}
                  >
                    <div className={styles.panelInner}>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
