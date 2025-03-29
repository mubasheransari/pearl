import React from 'react';
import styles from './page.module.scss';

const ConsultantEngineer = () => {
  return (
    <div className={styles.container}>
      <meta name="title" content="Why You Should Hire a Consultant Engineer in Bromley for Your Project" />
      <meta name="description" content="Expert consultant engineer in Bromley offering innovative design, planning, and structural solutions for residential & commercial projects. Contact us today!" />

      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>Why You Should Hire a Consultant Engineer in Bromley for Your Project</h1>
          <p className={styles.intro}>
            Hiring a consultant engineer in Bromley is critical for ensuring your project is structurally sound, 
            cost-efficient, and fully compliant with UK regulations. Here's why you need one for your residential, 
            commercial, or industrial project.
          </p>
        </header>

        <section className={styles.benefitsSection}>
          {/* Benefit 1 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitHeader}>
              <div className={styles.benefitNumber}>1</div>
              <h2 className={styles.benefitTitle}>Expert Structural and Technical Guidance</h2>
            </div>
            <div className={styles.benefitContent}>
              <ul className={styles.benefitList}>
                <li>Accurate structural calculations for stability and safety</li>
                <li>Innovative engineering solutions that optimize resources</li>
                <li>Technical assessments to prevent future failures</li>
              </ul>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitHeader}>
              <div className={styles.benefitNumber}>2</div>
              <h2 className={styles.benefitTitle}>Ensuring Compliance with UK Building Regulations</h2>
            </div>
            <div className={styles.benefitContent}>
              <ul className={styles.benefitList}>
                <li>Regulatory approval for structural components</li>
                <li>Risk assessments and environmental considerations</li>
                <li>Compliance with local planning policies</li>
              </ul>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitHeader}>
              <div className={styles.benefitNumber}>3</div>
              <h2 className={styles.benefitTitle}>Cost Optimization and Risk Mitigation</h2>
            </div>
            <div className={styles.benefitContent}>
              <ul className={styles.benefitList}>
                <li>Reducing material wastage through precise calculations</li>
                <li>Identifying potential structural issues early</li>
                <li>Developing budget-friendly engineering solutions</li>
              </ul>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitHeader}>
              <div className={styles.benefitNumber}>4</div>
              <h2 className={styles.benefitTitle}>Project Efficiency and Quality Assurance</h2>
            </div>
            <div className={styles.benefitContent}>
              <ul className={styles.benefitList}>
                <li>Managing timelines and resource allocation</li>
                <li>Ensuring high-quality materials and workmanship</li>
                <li>Coordinating with architects and builders</li>
              </ul>
            </div>
          </div>

          {/* Benefit 5 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitHeader}>
              <div className={styles.benefitNumber}>5</div>
              <h2 className={styles.benefitTitle}>Structural Assessments for Renovations</h2>
            </div>
            <div className={styles.benefitContent}>
              <ul className={styles.benefitList}>
                <li>Safe modifications to load-bearing structures</li>
                <li>Structural reinforcements for stability</li>
                <li>Compliance with heritage building requirements</li>
              </ul>
            </div>
          </div>

          {/* Benefit 6 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitHeader}>
              <div className={styles.benefitNumber}>6</div>
              <h2 className={styles.benefitTitle}>Sustainable and Future-Proof Designs</h2>
            </div>
            <div className={styles.benefitContent}>
              <ul className={styles.benefitList}>
                <li>Energy-efficient building techniques</li>
                <li>Eco-friendly materials for sustainability</li>
                <li>Smart engineering for enhanced durability</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.peppSection}>
          <h2 className={styles.sectionTitle}>How PEPP Provides Expert Consultant Engineering Services in Bromley</h2>
          <p className={styles.sectionText}>
            At PEPP, we specialize in engineering consultancy that meets structural integrity, safety, and sustainability standards.
          </p>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Structural Feasibility Studies</h3>
              <p>Ensuring projects are viable and structurally sound</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Compliance Consulting</h3>
              <p>Assisting with UK Building Regulations approval</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Cost-Effective Solutions</h3>
              <p>Optimizing material usage and reducing costs</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Risk Analysis</h3>
              <p>Identifying potential hazards early</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Sustainable Construction</h3>
              <p>Incorporating eco-friendly materials and designs</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Project Management</h3>
              <p>Ensuring seamless collaboration between teams</p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Contact Us Today!</h2>
            <p className={styles.ctaText}>Looking for a trusted consultant engineer in Bromley?</p>
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
            A consultant engineer in Bromley is essential for structural safety, cost efficiency, and regulatory compliance. 
            Whether you're planning a new build, renovation, or commercial development, PEPP guarantees expert precision 
            and long-term reliability for your project in Bromley, London, UK.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default ConsultantEngineer;