import React from 'react';
import Head from 'next/head';
import styles from './page.module.scss';

const FindStructuralEngineer = () => {
  return (
    <>
      <Head>
        <title>How to Find the Best Structural Engineer Near Me: A Complete Guide | PEPP</title>
        <meta name="description" content="Find a professional structural engineer near you for expert design, analysis, and compliance solutions for residential & commercial projects. Contact us today!" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>How to Find the Best Structural Engineer Near Me: A Complete Guide</h1>
          <p className={styles.intro}>
            Finding the right structural engineer is crucial for ensuring the safety, stability, and success of your construction project. 
            This guide helps you choose a qualified professional with the right expertise.
          </p>
        </header>

        <main className={styles.contentSection}>
          <section className={styles.section}>
            <div className={styles.sectionNumber}>1</div>
            <div className={styles.sectionContent}>
              <h2>Search for Locally Experienced Structural Engineers</h2>
              <p>
                Prioritize engineers with experience in your area's building regulations, planning laws, and environmental conditions. 
                Local experts can:
              </p>
              <ul className={styles.benefitsList}>
                <li>Navigate approval processes efficiently</li>
                <li>Recommend suitable construction materials</li>
                <li>Anticipate area-specific structural challenges</li>
                <li>Coordinate with local authorities effectively</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionNumber}>2</div>
            <div className={styles.sectionContent}>
              <h2>Verify Qualifications and Certifications</h2>
              <p>
                Ensure your engineer holds credentials from recognized institutions:
              </p>
              <div className={styles.qualificationsGrid}>
                <div className={styles.qualificationCard}>
                  <div className={styles.qualificationIcon}>🏛️</div>
                  <h3>IStructE</h3>
                  <p>Institution of Structural Engineers</p>
                </div>
                <div className={styles.qualificationCard}>
                  <div className={styles.qualificationIcon}>🏗️</div>
                  <h3>ICE</h3>
                  <p>Institution of Civil Engineers</p>
                </div>
                <div className={styles.qualificationCard}>
                  <div className={styles.qualificationIcon}>📜</div>
                  <h3>CEng</h3>
                  <p>Chartered Engineer Status</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionNumber}>3</div>
            <div className={styles.sectionContent}>
              <h2>Review Their Portfolio and Client Feedback</h2>
              <p>
                Assess potential engineers by examining:
              </p>
              <div className={styles.reviewGrid}>
                <div className={styles.reviewCard}>
                  <h3>Project Portfolio</h3>
                  <p>Look for experience in projects similar to yours (residential, commercial, industrial)</p>
                </div>
                <div className={styles.reviewCard}>
                  <h3>Client Testimonials</h3>
                  <p>Read reviews on Google, Trustpilot, or professional directories</p>
                </div>
                <div className={styles.reviewCard}>
                  <h3>Case Studies</h3>
                  <p>Request detailed examples of completed projects</p>
                </div>
                <div className={styles.reviewCard}>
                  <h3>References</h3>
                  <p>Ask to speak with previous clients about their experience</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionNumber}>4</div>
            <div className={styles.sectionContent}>
              <h2>Compare Cost and Service Packages</h2>
              <p>
                Evaluate engineers based on more than just price:
              </p>
              <div className={styles.comparisonTable}>
                <div className={styles.comparisonHeader}>
                  <div className={styles.comparisonFactor}>Factor</div>
                  <div className={styles.comparisonImportance}>Why It Matters</div>
                </div>
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFactor}>Expertise Level</div>
                  <div className={styles.comparisonImportance}>Higher expertise often means better problem-solving</div>
                </div>
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFactor}>Project Timeline</div>
                  <div className={styles.comparisonImportance}>Can prevent costly construction delays</div>
                </div>
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFactor}>Included Services</div>
                  <div className={styles.comparisonImportance}>Some packages include planning permission assistance</div>
                </div>
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFactor}>Aftercare Support</div>
                  <div className={styles.comparisonImportance}>Important for addressing post-construction issues</div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionNumber}>5</div>
            <div className={styles.sectionContent}>
              <h2>Ensure Effective Communication and Transparency</h2>
              <p>
                A good structural engineer should:
              </p>
              <ul className={styles.communicationList}>
                <li>
                  <strong>Explain technical concepts</strong> in clear, understandable terms
                </li>
                <li>
                  <strong>Provide regular updates</strong> throughout the project
                </li>
                <li>
                  <strong>Be responsive</strong> to questions and concerns
                </li>
                <li>
                  <strong>Offer transparent pricing</strong> with no hidden fees
                </li>
                <li>
                  <strong>Document all recommendations</strong> in writing
                </li>
              </ul>
            </div>
          </section>

          <div className={styles.peppHighlight}>
            <h2>Why Choose PEPP for Structural Engineering Services Near You?</h2>
            <p>
              At PEPP, we combine local expertise with national standards to deliver:
            </p>
            <div className={styles.peppBenefits}>
              <div className={styles.peppBenefit}>
                <div className={styles.checkIcon}>✓</div>
                <p>Comprehensive structural assessments and reports</p>
              </div>
              <div className={styles.peppBenefit}>
                <div className={styles.checkIcon}>✓</div>
                <p>Custom solutions for residential and commercial projects</p>
              </div>
              <div className={styles.peppBenefit}>
                <div className={styles.checkIcon}>✓</div>
                <p>Full compliance with UK building regulations</p>
              </div>
              <div className={styles.peppBenefit}>
                <div className={styles.checkIcon}>✓</div>
                <p>Transparent pricing and clear communication</p>
              </div>
            </div>
          </div>

          <section className={styles.ctaSection}>
            <h2>Ready to Find Your Structural Engineer?</h2>
            <p>Contact PEPP today for expert engineering services:</p>
            <div className={styles.contactMethods}>
              <a href="tel:+447460140474" className={styles.contactLink}>
                <span className={styles.contactIcon}>📞</span>
                +44 7460140474
              </a>
              <a href="mailto:info@pearlepp.co.uk" className={styles.contactLink}>
                <span className={styles.contactIcon}>✉️</span>
                info@pearlepp.co.uk
              </a>
              <a href="https://pearlepp.co.uk/" className={styles.websiteButton}>
                Visit PearlEPP.co.uk
              </a>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Making the Right Choice</h2>
            <p>
              Selecting the best structural engineer requires careful consideration of their local experience, 
              qualifications, portfolio, pricing structure, and communication style. By following this guide, 
              you'll be equipped to choose a professional who can ensure your project's success while maintaining 
              safety and compliance standards. PEPP offers all these qualities and more, making us the ideal 
              partner for your structural engineering needs.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default FindStructuralEngineer;