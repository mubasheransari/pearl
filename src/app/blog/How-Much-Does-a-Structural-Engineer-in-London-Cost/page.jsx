import React from 'react';
import Head from 'next/head';
import styles from './page.module.scss';

const StructuralEngineerCost = () => {
  return (
    <>
      <Head>
        <title>How Much Does a Structural Engineer in London Cost | PEPP</title>
        <meta name="description" content="Expert structural engineer in London providing safe, innovative, and compliant solutions for residential & commercial projects. Contact us for consultations!" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>How Much Does a Structural Engineer in London Cost?</h1>
          <p className={styles.intro}>
            When planning a construction project, renovation, or structural assessment, understanding the cost of hiring a structural engineer in London is essential. 
            This guide outlines the key factors influencing costs and what you can expect to pay.
          </p>
        </header>

        <main className={styles.contentSection}>
          <section className={styles.section}>
            <h2>1. Factors Affecting the Cost of a Structural Engineer</h2>
            <p>Several elements impact the cost of hiring a structural engineer in London:</p>
            
            <ul className={styles.benefitsList}>
              <li><strong>Project Complexity:</strong> More intricate projects like loft conversions or basement extensions require detailed calculations</li>
              <li><strong>Property Type:</strong> Fees differ for residential, commercial, and industrial properties</li>
              <li><strong>Site Inspections:</strong> Structural surveys and reports affect pricing</li>
              <li><strong>Planning & Compliance:</strong> Building Control approval and UK regulations may increase costs</li>
              <li><strong>Urgency:</strong> Fast-track or emergency assessments may incur additional charges</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. Average Cost Breakdown for Structural Engineering Services</h2>
            <p>While prices vary, here's an approximate breakdown in London:</p>
            
            <div className={styles.priceTable}>
              <div className={styles.priceRow}>
                <div className={styles.service}>Structural Inspections & Reports</div>
                <div className={styles.price}>£300 – £800</div>
              </div>
              <div className={styles.priceRow}>
                <div className={styles.service}>Load-Bearing Wall Removal Calculations</div>
                <div className={styles.price}>£200 – £500</div>
              </div>
              <div className={styles.priceRow}>
                <div className={styles.service}>Loft Conversion Structural Calculations</div>
                <div className={styles.price}>£500 – £1,500</div>
              </div>
              <div className={styles.priceRow}>
                <div className={styles.service}>Basement Structural Design & Assessment</div>
                <div className={styles.price}>£1,000 – £5,000</div>
              </div>
              <div className={styles.priceRow}>
                <div className={styles.service}>New Build Structural Design</div>
                <div className={styles.price}>£2,500 – £10,000+</div>
              </div>
              <div className={styles.priceRow}>
                <div className={styles.service}>Retrospective Structural Reports</div>
                <div className={styles.price}>£400 – £1,000</div>
              </div>
            </div>
            
            <p className={styles.note}>Prices may increase for complex projects requiring detailed calculations or multiple site visits.</p>
          </section>

          <section className={styles.section}>
            <h2>3. Why Hiring a Structural Engineer is Worth the Investment</h2>
            
            <div className={styles.valueGrid}>
              <div className={styles.valueCard}>
                <h3>Preventing Structural Failures</h3>
                <p>Avoid costly mistakes that could lead to property damage or safety hazards.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Ensuring Compliance</h3>
                <p>Secure Building Control approval and planning permissions.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Long-Term Cost Savings</h3>
                <p>Proper design reduces the risk of expensive future repairs.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Enhanced Property Value</h3>
                <p>Structural assessments confirm safety and increase property value.</p>
              </div>
            </div>
          </section>

          <div className={styles.highlightBox}>
            <h2>4. How PEPP Provides Cost-Effective Structural Engineering Solutions</h2>
            <p>At PEPP, we offer transparent pricing and tailored services:</p>
            
            <ul className={styles.servicesList}>
              <li><strong>Fixed Pricing:</strong> Clear upfront costs for standard services</li>
              <li><strong>Customized Quotes:</strong> Detailed proposals for complex projects</li>
              <li><strong>Cost-Effective Solutions:</strong> Stay within budget while meeting safety standards</li>
            </ul>
          </div>

          <section className={styles.ctaSection}>
            <h2>Contact Us Today!</h2>
            <p>Looking for an affordable structural engineer in London?</p>
            <div className={styles.contactMethods}>
              <a href="tel:+447460140474" className={styles.ctaLink}>Call +44 7460140474</a>
              <a href="mailto:info@pearlepp.co.uk" className={styles.ctaLink}>Email info@pearlepp.co.uk</a>
              <a href="https://pearlepp.co.uk/" className={styles.ctaButton}>Visit PearlEPP.co.uk</a>
            </div>
          </section>

          <section className={styles.conclusion}>
            <h2>Conclusion</h2>
            <p>
              The cost of hiring a structural engineer in London depends on project scope and complexity. 
              Investing in professional services ensures safety, efficiency, and long-term savings. 
              Trust PEPP for affordable, high-quality structural engineering solutions tailored to your needs.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default StructuralEngineerCost;