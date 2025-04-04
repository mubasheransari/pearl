import React from 'react';
import Head from 'next/head';
import styles from './page.module.scss';

const StructuralSafety = () => {
  return (
    <>
      <Head>
        <title>How Structural Engineers in London Ensure Safe and Sustainable Buildings | PEPP</title>
        <meta name="description" content="Experienced structural engineers in London providing reliable design, analysis, and compliance solutions for residential & commercial projects. Contact us now!" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>How Structural Engineers in London Ensure Safe and Sustainable Buildings</h1>
          <p className={styles.intro}>
            Structural engineers play a key role in designing buildings that meet modern safety and sustainability standards. 
            Discover how they enhance building longevity, energy efficiency, and environmental sustainability in London.
          </p>
        </header>

        <main className={styles.contentSection}>
          <section className={styles.section}>
            <h2>1. Compliance with Building Regulations and Safety Standards</h2>
            <p>
              London's strict building codes require structural engineers to ensure compliance with UK Building Regulations, including:
            </p>
            <ul className={styles.complianceList}>
              <li>Fire safety engineering</li>
              <li>Precise load-bearing calculations</li>
              <li>Earthquake resistance measures</li>
              <li>Comprehensive risk assessments</li>
              <li>Structural safety audits</li>
            </ul>
            <p>
              These measures prevent potential hazards and structural failures in both new and existing buildings.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Sustainable Material Selection</h2>
            <p>
              Structural engineers reduce environmental impact through eco-conscious material choices:
            </p>
            <div className={styles.materialGrid}>
              <div className={styles.materialCard}>
                <div className={styles.materialIcon}>♻️</div>
                <h3>Recycled Materials</h3>
                <p>Steel, concrete and other materials with high recycled content</p>
              </div>
              <div className={styles.materialCard}>
                <div className={styles.materialIcon}>🎋</div>
                <h3>Sustainable Timber</h3>
                <p>Bamboo and FSC-certified wood products</p>
              </div>
              <div className={styles.materialCard}>
                <div className={styles.materialIcon}>🏗️</div>
                <h3>Low-Carbon Alternatives</h3>
                <p>Innovative low-carbon cement formulations</p>
              </div>
              <div className={styles.materialCard}>
                <div className={styles.materialIcon}>❄️</div>
                <h3>Efficient Insulation</h3>
                <p>Advanced thermal and acoustic insulation materials</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>3. Energy-Efficient Structural Designs</h2>
            <div className={styles.designFeatures}>
              <div className={styles.designCard}>
                <h3>Passive Solar Design</h3>
                <p>Optimizing building orientation and window placement for natural heating and lighting</p>
              </div>
              <div className={styles.designCard}>
                <h3>Green Infrastructure</h3>
                <p>Incorporating living roofs and walls for improved insulation and air quality</p>
              </div>
              <div className={styles.designCard}>
                <h3>Smart Building Systems</h3>
                <p>Automated shading and ventilation to reduce energy consumption</p>
              </div>
              <div className={styles.designCard}>
                <h3>High-Performance Glazing</h3>
                <p>Advanced windows that minimize thermal transfer</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>4. Climate Resilience Strategies</h2>
            <div className={styles.resilienceGrid}>
              <div className={styles.resilienceItem}>
                <h3>Flood Protection</h3>
                <p>Elevated foundations and advanced drainage systems</p>
              </div>
              <div className={styles.resilienceItem}>
                <h3>Wind Resistance</h3>
                <p>Aerodynamic designs and reinforced structures</p>
              </div>
              <div className={styles.resilienceItem}>
                <h3>Fire Safety</h3>
                <p>Non-combustible materials and compartmentalization</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>5. Advanced Load Management</h2>
            <p>
              Structural engineers use sophisticated analysis to ensure buildings can withstand:
            </p>
            <div className={styles.loadGrid}>
              <div className={styles.loadCard}>
                <h3>Static Loads</h3>
                <p>Permanent structural weight and fixed installations</p>
              </div>
              <div className={styles.loadCard}>
                <h3>Dynamic Loads</h3>
                <p>Occupants, furniture, and movable equipment</p>
              </div>
              <div className={styles.loadCard}>
                <h3>Environmental Forces</h3>
                <p>Wind, snow, seismic activity, and temperature changes</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>6. Sustainable Retrofitting</h2>
            <p>
              Rather than demolition, structural engineers focus on upgrading existing buildings through:
            </p>
            <ul className={styles.retrofitList}>
              <li>Energy efficiency improvements (insulation, glazing, HVAC)</li>
              <li>Structural strengthening to extend service life</li>
              <li>Adaptive reuse of existing structures</li>
              <li>Material recycling during renovations</li>
            </ul>
            <p>
              This approach preserves architectural heritage while meeting modern standards.
            </p>
          </section>

          <div className={styles.peppHighlight}>
            <h2>Why Choose PEPP for Structural Engineering in London?</h2>
            <p>
              At PEPP, we combine safety expertise with sustainable design principles to deliver:
            </p>
            <ul className={styles.peppBenefits}>
              <li>Fully compliant structural solutions</li>
              <li>Innovative low-carbon designs</li>
              <li>Climate-resilient building strategies</li>
              <li>Cost-effective retrofitting options</li>
            </ul>
          </div>

          <section className={styles.ctaSection}>
            <h2>Contact PEPP Today</h2>
            <p>Need a structural engineer committed to safety and sustainability?</p>
            <div className={styles.contactOptions}>
              <a href="tel:+447460140474" className={styles.phoneLink}>Call +44 7460140474</a>
              <a href="mailto:info@pearlepp.co.uk" className={styles.emailLink}>Email info@pearlepp.co.uk</a>
              <a href="https://pearlepp.co.uk/" className={styles.buttonLink}>Visit Our Website</a>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Building London's Sustainable Future</h2>
            <p>
              Structural engineers are essential in creating safer, more sustainable buildings for London. 
              Through innovative design, responsible material selection, and climate-adaptive strategies, 
              they ensure structures meet today's needs while preserving resources for future generations. 
              Trust PEPP for structural engineering solutions that prioritize both safety and environmental responsibility.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default StructuralSafety;