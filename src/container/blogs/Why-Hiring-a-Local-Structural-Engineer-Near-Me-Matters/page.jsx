import React from 'react';
import styles from './page.module.scss';

const LocalEngineer = () => {
  return (
    <div className={styles.container}>
    
      <meta name="title" content="Why Hiring a Local Structural Engineer Near Me Matters" />
      <meta name="description" content="Find a trusted structural engineer near me for expert design, analysis, and compliance solutions for residential & commercial projects. Get a consultation today!" />
      <link rel="canonical" href="https://www.pearlepp.co.uk/why-hiring-local-structural-engineer-near-me-matters" />
 
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>Why Hiring a Local Structural Engineer Near Me Matters</h1>
          <p className={styles.intro}>
            Choosing a local structural engineer offers significant advantages for your construction or renovation project. 
            Local expertise, regulatory knowledge, and accessibility make them the ideal choice for your structural needs.
          </p>
        </header>

        <section className={styles.benefitsSection}>
          {/* Benefit 1 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🏛️</div>
            <div className={styles.benefitContent}>
              <h2 className={styles.benefitTitle}>Expertise in Local Building Regulations</h2>
              <ul className={styles.benefitList}>
                <li>Knowledge of area-specific building codes and planning permissions</li>
                <li>Assistance with plan submissions and approvals</li>
                <li>Prevention of costly fines and project delays</li>
              </ul>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🌍</div>
            <div className={styles.benefitContent}>
              <h2 className={styles.benefitTitle}>Knowledge of Regional Environmental Conditions</h2>
              <ul className={styles.benefitList}>
                <li>Understanding of local soil types and ground stability</li>
                <li>Solutions tailored to climate and weather patterns</li>
                <li>Protection against flood risks and other environmental factors</li>
              </ul>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>⏱️</div>
            <div className={styles.benefitContent}>
              <h2 className={styles.benefitTitle}>Faster Response and On-Site Availability</h2>
              <ul className={styles.benefitList}>
                <li>Quick site visits and assessments</li>
                <li>Immediate problem-solving for urgent issues</li>
                <li>In-person evaluations and real-time adjustments</li>
              </ul>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🤝</div>
            <div className={styles.benefitContent}>
              <h2 className={styles.benefitTitle}>Strong Local Relationships</h2>
              <ul className={styles.benefitList}>
                <li>Connections with planning authorities and building control</li>
                <li>Network of reliable contractors and suppliers</li>
                <li>Streamlined permit approvals and construction processes</li>
              </ul>
            </div>
          </div>

          {/* Benefit 5 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>💰</div>
            <div className={styles.benefitContent}>
              <h2 className={styles.benefitTitle}>Cost-Effective Services</h2>
              <ul className={styles.benefitList}>
                <li>Reduced travel and logistical expenses</li>
                <li>Access to competitive local material prices</li>
                <li>Energy-efficient and sustainable building suggestions</li>
              </ul>
            </div>
          </div>

          {/* Benefit 6 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>⭐</div>
            <div className={styles.benefitContent}>
              <h2 className={styles.benefitTitle}>Personalized Service and Accountability</h2>
              <ul className={styles.benefitList}>
                <li>Community-focused with strong local reputation</li>
                <li>Clear communication and customer satisfaction focus</li>
                <li>Tailored solutions for your specific project needs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.peppSection}>
          <h2 className={styles.sectionTitle}>Why Choose PEPP for Structural Engineering Near You?</h2>
          <p className={styles.sectionText}>
            At Pearl Engineers Planners and Project Managers (PEPP), we provide expert structural engineering services with:
          </p>
          
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseCard}>
              <h3 className={styles.expertiseTitle}>Local Compliance</h3>
              <p>Deep knowledge of regional regulations and requirements</p>
            </div>
            <div className={styles.expertiseCard}>
              <h3 className={styles.expertiseTitle}>Safety Assurance</h3>
              <p>Thorough structural assessments for your peace of mind</p>
            </div>
            <div className={styles.expertiseCard}>
              <h3 className={styles.expertiseTitle}>Cost Efficiency</h3>
              <p>Innovative solutions that optimize your budget</p>
            </div>
            <div className={styles.expertiseCard}>
              <h3 className={styles.expertiseTitle}>Project Success</h3>
              <p>Seamless execution from planning to completion</p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Contact Us Today!</h2>
            <p className={styles.ctaText}>Looking for a trusted local structural engineer near me?</p>
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
            Hiring a local structural engineer near me ensures compliance, efficiency, and cost savings for your project. 
            With PEPP, you gain a partner who understands local regulations, environmental conditions, and construction 
            practices. Our commitment to quality and community ensures your project's success from foundation to completion.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default LocalEngineer;