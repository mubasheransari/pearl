import React from 'react';
import styles from './page.module.scss';

const StructuralEngineerNeartop = () => {
  return (
    <div className={styles.container}>
      <meta name="title" content="Top Reasons You Need a Structural Engineer Near Me for Your Project" />
      <meta name="description" content="Looking for a trusted structural engineer near me? Get expert design, analysis, and compliance solutions for residential & commercial projects. Contact us now!" />

      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>Top Reasons You Need a Structural Engineer Near Me for Your Project</h1>
          <p className={styles.intro}>
            Hiring a structural engineer near me is a crucial step in ensuring the safety, stability, and longevity of any construction or renovation project. 
            Whether you're working on a new building, an extension, or a structural modification, a professional structural engineer will provide expert guidance 
            to ensure compliance with regulations and avoid costly mistakes.
          </p>
        </header>

        <section className={styles.reasonsSection}>
          {/* Reason 1 */}
          <div className={styles.reasonCard}>
            <div className={styles.reasonHeader}>
              <div className={styles.reasonNumber}>1</div>
              <h2 className={styles.reasonTitle}>Ensuring Structural Safety and Stability</h2>
            </div>
            <div className={styles.reasonContent}>
              <p className={styles.reasonDescription}>
                A structural engineer assesses and designs buildings to ensure they can withstand load-bearing requirements, 
                environmental factors, and long-term wear and tear.
              </p>
              <div className={styles.reasonDetails}>
                <ul className={styles.benefitList}>
                  <li>Prevents foundation issues and structural failures</li>
                  <li>Identifies potential hazards that could compromise safety</li>
                  <li>Ensures long-term durability of the structure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reason 2 */}
          <div className={styles.reasonCard}>
            <div className={styles.reasonHeader}>
              <div className={styles.reasonNumber}>2</div>
              <h2 className={styles.reasonTitle}>Compliance with Local Building Regulations</h2>
            </div>
            <div className={styles.reasonContent}>
              <p className={styles.reasonDescription}>
                Every region has specific building regulations and planning requirements.
              </p>
              <div className={styles.reasonDetails}>
                <ul className={styles.benefitList}>
                  <li>Expert knowledge of local laws and zoning restrictions</li>
                  <li>Ensures projects meet construction codes</li>
                  <li>Helps pass inspections without delays</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reason 3 */}
          <div className={styles.reasonCard}>
            <div className={styles.reasonHeader}>
              <div className={styles.reasonNumber}>3</div>
              <h2 className={styles.reasonTitle}>Expert Assessment for Renovations and Extensions</h2>
            </div>
            <div className={styles.reasonContent}>
              <p className={styles.reasonDescription}>
                If you're planning to modify an existing structure, a structural engineer can evaluate the current foundation and load-bearing elements.
              </p>
              <div className={styles.reasonDetails}>
                <ul className={styles.benefitList}>
                  <li>Identifies necessary reinforcements</li>
                  <li>Recommends design changes for structural integrity</li>
                  <li>Prevents costly mistakes during renovations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reason 4 */}
          <div className={styles.reasonCard}>
            <div className={styles.reasonHeader}>
              <div className={styles.reasonNumber}>4</div>
              <h2 className={styles.reasonTitle}>Cost-Effective Engineering Solutions</h2>
            </div>
            <div className={styles.reasonContent}>
              <p className={styles.reasonDescription}>
                Hiring a local structural engineer can save you money in the long run.
              </p>
              <div className={styles.reasonDetails}>
                <ul className={styles.benefitList}>
                  <li>Identifies potential issues early</li>
                  <li>Optimizes material usage</li>
                  <li>Recommends energy-efficient designs</li>
                  <li>Prevents expensive rework</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reason 5 */}
          <div className={styles.reasonCard}>
            <div className={styles.reasonHeader}>
              <div className={styles.reasonNumber}>5</div>
              <h2 className={styles.reasonTitle}>Risk Mitigation for Complex Projects</h2>
            </div>
            <div className={styles.reasonContent}>
              <p className={styles.reasonDescription}>
                For complex construction projects, a structural engineer performs comprehensive assessments.
              </p>
              <div className={styles.reasonDetails}>
                <ul className={styles.benefitList}>
                  <li>Conducts soil evaluations</li>
                  <li>Performs load calculations</li>
                  <li>Ensures designs withstand environmental conditions</li>
                  <li>Addresses wind and seismic activity concerns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reason 6 */}
          <div className={styles.reasonCard}>
            <div className={styles.reasonHeader}>
              <div className={styles.reasonNumber}>6</div>
              <h2 className={styles.reasonTitle}>Assistance with Planning Permission and Approvals</h2>
            </div>
            <div className={styles.reasonContent}>
              <p className={styles.reasonDescription}>
                Structural engineers prepare technical documentation required for approvals.
              </p>
              <div className={styles.reasonDetails}>
                <ul className={styles.benefitList}>
                  <li>Prepares technical reports and calculations</li>
                  <li>Ensures compliance with safety regulations</li>
                  <li>Speeds up approval processes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reason 7 */}
          <div className={styles.reasonCard}>
            <div className={styles.reasonHeader}>
              <div className={styles.reasonNumber}>7</div>
              <h2 className={styles.reasonTitle}>Structural Inspections for Property Buyers</h2>
            </div>
            <div className={styles.reasonContent}>
              <p className={styles.reasonDescription}>
                If you're purchasing a property, a structural engineer can conduct a thorough assessment.
              </p>
              <div className={styles.reasonDetails}>
                <ul className={styles.benefitList}>
                  <li>Checks for foundation problems and cracks</li>
                  <li>Identifies structural weaknesses</li>
                  <li>Helps buyers make informed decisions</li>
                  <li>Provides leverage for repair negotiations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.peppSection}>
          <h2 className={styles.sectionTitle}>Why Choose PEPP for Structural Engineering Near You?</h2>
          <p className={styles.sectionText}>
            At Pearl Engineers Planners and Project Managers (PEPP), we provide top-quality structural engineering services 
            to ensure safe, compliant, and efficient designs for your project. Our local expertise, innovative solutions, 
            and commitment to excellence make us the preferred choice for structural engineering.
          </p>
          
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseCard}>
              <h3 className={styles.expertiseTitle}>Safety Assurance</h3>
              <ul className={styles.expertiseList}>
                <li>Structural integrity assessments</li>
                <li>Load-bearing analysis</li>
                <li>Risk mitigation strategies</li>
              </ul>
            </div>
            
            <div className={styles.expertiseCard}>
              <h3 className={styles.expertiseTitle}>Regulatory Compliance</h3>
              <ul className={styles.expertiseList}>
                <li>Local building code expertise</li>
                <li>Planning permission assistance</li>
                <li>Inspection coordination</li>
              </ul>
            </div>
            
            <div className={styles.expertiseCard}>
              <h3 className={styles.expertiseTitle}>Cost Optimization</h3>
              <ul className={styles.expertiseList}>
                <li>Material efficiency</li>
                <li>Design optimization</li>
                <li>Prevention of costly errors</li>
              </ul>
            </div>
            
            <div className={styles.expertiseCard}>
              <h3 className={styles.expertiseTitle}>Property Assessments</h3>
              <ul className={styles.expertiseList}>
                <li>Pre-purchase inspections</li>
                <li>Structural surveys</li>
                <li>Renovation feasibility studies</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Contact Us Today!</h2>
            <p className={styles.ctaText}>Looking for a structural engineer near me?</p>
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
            A structural engineer near me plays a vital role in ensuring that your construction or renovation project is safe, 
            compliant, and cost-efficient. From design assessments and risk evaluations to regulatory approvals and inspections, 
            a professional structural engineer is indispensable. Trust PEPP for expert guidance and reliable structural solutions 
            tailored to your needs.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default StructuralEngineerNeartop;