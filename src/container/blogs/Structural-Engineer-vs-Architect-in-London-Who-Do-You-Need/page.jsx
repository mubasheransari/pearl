import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';

const EngineerVsArchitect = () => {
  return (
    <div className={styles.container}>
    
      <meta name="title" content="Structural Engineer vs. Architect in London: Who Do You Need" />
      <meta name="description" content="Experienced structural engineer offering expert design, analysis, and compliance solutions for residential & commercial projects. Contact us today!" />
      <link rel="canonical" href="https://www.pearlepp.co.uk/structural-engineer-vs-architect-london" />
    
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>Structural Engineer vs. Architect in London: Who Do You Need?</h1>
          <p className={styles.intro}>
            When planning a  <Link href="/project_management" className={styles.link}>construction project in London</Link>, it's essential to understand the difference between a structural engineer and an architect. 
            While both professionals play critical roles in the design and construction process, their responsibilities and expertise vary significantly.
          </p>
        </header>

        <section className={styles.comparisonSection}>
          <div className={styles.comparisonGrid}>
            {/* Structural Engineer */}
            <div className={styles.professionalCard}>
              <div className={styles.professionalHeader}>
                <div className={`${styles.professionalIcon} ${styles.engineerIcon}`}>🏗️</div>
                <h2 className={styles.professionalTitle}>Structural Engineer</h2>
              </div>
              <div className={styles.professionalContent}>
                <h3 className={styles.subtitle}>Key Responsibilities:</h3>
                <ul className={styles.responsibilitiesList}>
                  <li className={styles.responsibilityItem}>Structural calculations to ensure buildings can withstand loads</li>
                  <li className={styles.responsibilityItem}>Foundation and beam assessments</li>
                  <li className={styles.responsibilityItem}>Load-bearing wall modifications</li>
                  <li className={styles.responsibilityItem}>Subsidence and foundation inspections</li>
                  <li className={styles.responsibilityItem}>Ensuring compliance with UK Building Regulations</li>
                </ul>

                <h3 className={styles.subtitle}>When You Need One:</h3>
                <ul className={styles.useCasesList}>
                  <li className={styles.useCaseItem}>Removing/modifying load-bearing walls</li>
                  <li className={styles.useCaseItem}>Building extensions or loft conversions</li>
                  <li className={styles.useCaseItem}>Assessing structural damage</li>
                  <li className={styles.useCaseItem}>Safety evaluations for older buildings</li>
                  <li className={styles.useCaseItem}>Structural calculations for planning</li>
                </ul>
              </div>
            </div>

            {/* Architect */}
            <div className={styles.professionalCard}>
              <div className={styles.professionalHeader}>
                <div className={`${styles.professionalIcon} ${styles.architectIcon}`}>📐</div>
                <h2 className={styles.professionalTitle}>Architect</h2>
              </div>
              <div className={styles.professionalContent}>
                <h3 className={styles.subtitle}>Key Responsibilities:</h3>
                <ul className={styles.responsibilitiesList}>
                  <li className={styles.responsibilityItem}>Creating architectural drawings</li>
                  <li className={styles.responsibilityItem}>Optimizing space and layout</li>
                  <li className={styles.responsibilityItem}>Planning permissions compliance</li>
                  <li className={styles.responsibilityItem}>Material selection for sustainability</li>
                  <li className={styles.responsibilityItem}>Overseeing design execution</li>
                </ul>

                <h3 className={styles.subtitle}>When You Need One:</h3>
                <ul className={styles.useCasesList}>
                  <li className={styles.useCaseItem}>Designing new buildings</li>
                  <li className={styles.useCaseItem}>Major renovation projects</li>
                  <li className={styles.useCaseItem}>Optimizing space utilization</li>
                  <li className={styles.useCaseItem}>Preparing planning applications</li>
                  <li className={styles.useCaseItem}>Enhancing aesthetic appeal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.collaborationSection}>
          <h2 className={styles.sectionTitle}>5. Do You Need Both an Architect and a Structural Engineer?</h2>
          <p className={styles.sectionText}>
            For large-scale projects, you often need both professionals. An architect will focus on the design and planning, 
            while a structural engineer ensures that the design is structurally viable and safe. Working together, they ensure 
            a seamless, compliant, and efficient building process.
          </p>
        </section>

        <section className={styles.peppSection}>
          <h2 className={styles.sectionTitle}>How PEPP Provides Structural Engineering Expertise in London</h2>
          <p className={styles.sectionText}>
            At Pearl Engineers Planners and Project Managers (PEPP), we specialize in structural analysis, safety inspections, 
            and compliance consulting.
          </p>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Structural Calculations</h3>
              <p>For renovations and new builds</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Structural Surveys</h3>
              <p>Detailed inspections for all property types</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Collaborative Approach</h3>
              <p>Working with architects and contractors</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Regulation Compliance</h3>
              <p>Ensuring UK Building Regulations are met</p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Contact Us Today!</h2>
            <p className={styles.ctaText}>Need a  <Link href="/project_management" className={styles.link}>construction project in London</Link>? Contact Pepp today!</p>
            <div className={styles.contactMethods}>
              <a href="tel:+447460140474" className={styles.contactLink}>
                <span className={styles.contactIcon}>📞</span> +44 7460140474
              </a>
              <a href="mailto:info@pearlepp.co.uk" className={styles.contactLink}>
                <span className={styles.contactIcon}>✉️</span> info@pearlepp.co.uk
              </a>
              <a href="https://pearlepp.co.uk/" className={styles.websiteButton}>
                <span className={styles.contactIcon}>🌐</span> PearlEPP.co.uk
              </a>
            </div>
          </div>
        </section>

        <footer className={styles.conclusion}>
          <p className={styles.conclusionText}>
            Understanding the difference between a  <Link href="https://www.google.com/search?sca_esv=3cbb991dc4cf362e&sxsrf=AHTn8zqYVTDAvYgLHNbI45-A8estxxz9eg:1741802763717&kgmid=/g/11y4c5th_1&q=PEARL+ENGINEERS+PLANNERS+AND+PROJECT+MANAGERS&shndl=30&shem=lcuae,uaasie,xcxes&source=sh/x/loc/uni/m1/1&kgs=28c06422f341eb9e" className={styles.link1}>structural engineer</Link>  and an architect is crucial when planning a construction 
            project in London. While architects focus on design, structural engineers ensure stability and safety. For seamless 
            project execution, consider hiring both professionals to achieve the best results. Trust PEPP for all your architectural 
            and structural engineering needs in London.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default EngineerVsArchitect;