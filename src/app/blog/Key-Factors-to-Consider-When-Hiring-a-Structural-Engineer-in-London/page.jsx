import React from 'react';
import Head from 'next/head';
import styles from './page.module.scss';

const HiringGuide = () => {
  return (
    <>
      <Head>
        <title>Key Factors to Consider When Hiring a Structural Engineer in London | PEPP</title>
        <meta name="description" content="Reliable structural engineer in London offering expert design, analysis, and compliance solutions for residential & commercial projects. Get in touch today!" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Key Factors to Consider When Hiring a Structural Engineer in London</h1>
          <p className={styles.intro}>
            Selecting the right structural engineer is crucial for your project's safety, efficiency, and compliance. 
            This guide outlines the essential considerations for making an informed decision.
          </p>
        </header>

        <main className={styles.contentSection}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionNumber}>1</div>
              <h2>Qualifications and Industry Accreditations</h2>
            </div>
            <p>
              Ensure your engineer holds relevant qualifications from recognized institutions:
            </p>
            <div className={styles.accreditationGrid}>
              <div className={styles.accreditationCard}>
                <h3>IStructE</h3>
                <p>Institution of Structural Engineers</p>
              </div>
              <div className={styles.accreditationCard}>
                <h3>ICE</h3>
                <p>Institution of Civil Engineers</p>
              </div>
              <div className={styles.accreditationCard}>
                <h3>CEng</h3>
                <p>Chartered Engineer Status</p>
              </div>
              <div className={styles.accreditationCard}>
                <h3>CIOB</h3>
                <p>Chartered Institute of Building</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionNumber}>2</div>
              <h2>Experience and Expertise</h2>
            </div>
            <p>
              Look for experience relevant to your project type:
            </p>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseCard}>
                <h3>Residential</h3>
                <ul>
                  <li>Loft conversions</li>
                  <li>Extensions</li>
                  <li>Basement developments</li>
                </ul>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Commercial</h3>
                <ul>
                  <li>Office buildings</li>
                  <li>Retail spaces</li>
                  <li>Mixed-use developments</li>
                </ul>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Specialist</h3>
                <ul>
                  <li>Historical buildings</li>
                  <li>Structural repairs</li>
                  <li>Seismic retrofitting</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionNumber}>3</div>
              <h2>Regulatory Knowledge and Compliance</h2>
            </div>
            <div className={styles.complianceGrid}>
              <div className={styles.complianceItem}>
                <h3>Building Regulations</h3>
                <p>Part A (Structure), Part B (Fire Safety), etc.</p>
              </div>
              <div className={styles.complianceItem}>
                <h3>Planning Permissions</h3>
                <p>Local authority requirements</p>
              </div>
              <div className={styles.complianceItem}>
                <h3>Safety Standards</h3>
                <p>CDM regulations, health & safety</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionNumber}>4</div>
              <h2>Reputation and Client Reviews</h2>
            </div>
            <div className={styles.reviewGrid}>
              <div className={styles.reviewSource}>
                <h3>Review Sources</h3>
                <ul>
                  <li>Google Business Profile</li>
                  <li>Trustpilot</li>
                  <li>Checkatrade</li>
                  <li>Professional directories</li>
                </ul>
              </div>
              <div className={styles.reviewMetrics}>
                <h3>What to Check</h3>
                <ul>
                  <li>Overall rating (4.5+ stars)</li>
                  <li>Response rate to queries</li>
                  <li>Consistency across projects</li>
                  <li>Handling of issues</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionNumber}>5</div>
              <h2>Communication and Transparency</h2>
            </div>
            <div className={styles.communicationGrid}>
              <div className={styles.communicationItem}>
                <h3>Initial Consultation</h3>
                <p>Clear explanation of process and requirements</p>
              </div>
              <div className={styles.communicationItem}>
                <h3>Project Updates</h3>
                <p>Regular progress reports</p>
              </div>
              <div className={styles.communicationItem}>
                <h3>Technical Clarity</h3>
                <p>Ability to explain complex concepts simply</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionNumber}>6</div>
              <h2>Cost and Budget Considerations</h2>
            </div>
            <div className={styles.costTable}>
              <div className={styles.costRow}>
                <div className={styles.costFactor}>Service</div>
                <div className={styles.costRange}>Typical Price Range</div>
              </div>
              <div className={styles.costRow}>
                <div className={styles.costFactor}>Structural Calculations</div>
                <div className={styles.costRange}>£500 - £2,500</div>
              </div>
              <div className={styles.costRow}>
                <div className={styles.costFactor}>Site Inspection</div>
                <div className={styles.costRange}>£300 - £800</div>
              </div>
              <div className={styles.costRow}>
                <div className={styles.costFactor}>Full Design Package</div>
                <div className={styles.costRange}>£1,500 - £10,000+</div>
              </div>
            </div>
            <p className={styles.costNote}>
              Prices vary based on project complexity and location within London
            </p>
          </section>

          <div className={styles.peppHighlight}>
            <h2>Why Choose PEPP for Structural Engineering in London?</h2>
            <div className={styles.peppBenefits}>
              <div className={styles.peppBenefit}>
                <h3>Chartered Engineers</h3>
                <p>IStructE and ICE accredited professionals</p>
              </div>
              <div className={styles.peppBenefit}>
                <h3>Comprehensive Expertise</h3>
                <p>Residential, commercial, and specialist projects</p>
              </div>
              <div className={styles.peppBenefit}>
                <h3>Regulatory Assurance</h3>
                <p>Full compliance with London building regulations</p>
              </div>
              <div className={styles.peppBenefit}>
                <h3>Transparent Pricing</h3>
                <p>Clear quotes with no hidden costs</p>
              </div>
            </div>
          </div>

          <section className={styles.ctaSection}>
            <h2>Ready to Hire a Structural Engineer?</h2>
            <p>Contact PEPP for professional, reliable engineering services in London:</p>
            <div className={styles.contactOptions}>
              <a href="tel:+447460140474" className={styles.phoneLink}>Call +44 7460140474</a>
              <a href="mailto:info@pearlepp.co.uk" className={styles.emailLink}>Email info@pearlepp.co.uk</a>
              <a href="https://pearlepp.co.uk/" className={styles.websiteButton}>Visit Our Website</a>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Making the Right Choice</h2>
            <p>
              Selecting the right structural engineer requires careful evaluation of their qualifications, 
              experience, regulatory knowledge, and reputation. By considering these key factors, you can 
              ensure your project meets the highest standards of safety and compliance. PEPP combines all 
              these qualities with transparent communication and competitive pricing, making us the ideal 
              partner for your structural engineering needs in London.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default HiringGuide;