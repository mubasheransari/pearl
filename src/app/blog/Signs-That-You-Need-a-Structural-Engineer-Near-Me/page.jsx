import React from 'react';
import styles from './page.module.scss';

const StructuralEngineerSigns = () => {
  return (
    <div className={styles.container}>
      <meta name="title" content="Signs That You Need a Structural Engineer Near Me" />
      <meta name="description" content="Find a trusted structural engineer near me for expert design, analysis, and compliance solutions for residential & commercial projects. Get a consultation today!" />

      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>Signs That You Need a Structural Engineer Near Me</h1>
          <p className={styles.intro}>
            A structural engineer near me plays a vital role in assessing the integrity, safety, and stability of buildings. 
            Whether you are planning a construction project or facing structural concerns in your property, recognizing the signs 
            that you need professional assistance can help you avoid costly damages and ensure safety.
          </p>
        </header>

        <section className={styles.signsSection}>
          <h2 className={styles.sectionSubtitle}>Here are the key signs that indicate when to hire a structural engineer near me:</h2>
          
          <div className={styles.signsGrid}>
            {/* Sign 1 */}
            <div className={styles.signCard}>
              <div className={styles.signNumber}>1</div>
              <div className={styles.signContent}>
                <h3 className={styles.signTitle}>Cracks in Walls, Ceilings, or Foundations</h3>
                <p className={styles.signDescription}>
                  If you notice large or widening cracks in walls, ceilings, or foundations, it could indicate structural movement 
                  or foundation settlement. A structural engineer can assess the severity and recommend the necessary repairs or reinforcements.
                </p>
              </div>
            </div>

            {/* Sign 2 */}
            <div className={styles.signCard}>
              <div className={styles.signNumber}>2</div>
              <div className={styles.signContent}>
                <h3 className={styles.signTitle}>Uneven or Sagging Floors</h3>
                <p className={styles.signDescription}>
                  Uneven or sagging floors could be a result of foundation issues, rotting support beams, or structural instability. 
                  A professional evaluation by a structural engineer near me will help determine the cause and suggest corrective actions.
                </p>
              </div>
            </div>

            {/* Sign 3 */}
            <div className={styles.signCard}>
              <div className={styles.signNumber}>3</div>
              <div className={styles.signContent}>
                <h3 className={styles.signTitle}>Doors and Windows Not Closing Properly</h3>
                <p className={styles.signDescription}>
                  If doors and windows stick, jam, or do not close properly, it might be due to foundation shifts, warping, or settling. 
                  A structural engineer can inspect whether this is a normal occurrence or a sign of a deeper structural issue.
                </p>
              </div>
            </div>

            {/* Sign 4 */}
            <div className={styles.signCard}>
              <div className={styles.signNumber}>4</div>
              <div className={styles.signContent}>
                <h3 className={styles.signTitle}>Visible Structural Damage After a Natural Disaster</h3>
                <p className={styles.signDescription}>
                  Following storms, earthquakes, or floods, buildings may suffer hidden or visible damage. A structural engineer can assess 
                  load-bearing walls, roofing, and foundations to ensure the structure remains safe.
                </p>
              </div>
            </div>

            {/* Sign 5 */}
            <div className={styles.signCard}>
              <div className={styles.signNumber}>5</div>
              <div className={styles.signContent}>
                <h3 className={styles.signTitle}>Planning a Major Renovation or Extension</h3>
                <p className={styles.signDescription}>
                  If you are considering removing load-bearing walls, adding a new floor, or expanding your home, hiring a structural 
                  engineer ensures that the modifications comply with building codes and safety standards.
                </p>
              </div>
            </div>

            {/* Sign 6 */}
            <div className={styles.signCard}>
              <div className={styles.signNumber}>6</div>
              <div className={styles.signContent}>
                <h3 className={styles.signTitle}>Signs of Foundation Movement</h3>
                <p className={styles.signDescription}>
                  Indicators of foundation movement include gaps between walls and floors, sloping floors, and exterior cracks. 
                  A structural engineer can determine whether the foundation needs reinforcement or repair.
                </p>
              </div>
            </div>

            {/* Sign 7 */}
            <div className={styles.signCard}>
              <div className={styles.signNumber}>7</div>
              <div className={styles.signContent}>
                <h3 className={styles.signTitle}>Leaning or Bowing Walls</h3>
                <p className={styles.signDescription}>
                  Walls that lean, bow, or bulge may be experiencing excessive pressure from soil movement, moisture intrusion, 
                  or structural failure. A structural engineer near me will provide the necessary assessment and solutions.
                </p>
              </div>
            </div>

            {/* Sign 8 */}
            <div className={styles.signCard}>
              <div className={styles.signNumber}>8</div>
              <div className={styles.signContent}>
                <h3 className={styles.signTitle}>Preparing to Buy or Sell a Property</h3>
                <p className={styles.signDescription}>
                  A structural inspection before purchasing or selling a property helps identify potential issues and provides 
                  assurance to buyers regarding the property's stability and integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.peppSection}>
          <h2 className={styles.sectionTitle}>Why Choose PEPP for Structural Engineering Near You?</h2>
          <p className={styles.sectionText}>
            At Pearl Engineers Planners and Project Managers (PEPP), we specialize in structural assessments, repairs, and engineering solutions. 
            Our expertise ensures that your home or commercial property remains safe and structurally sound.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Contact Us Today!</h2>
            <p className={styles.ctaText}>Not sure if you need a structural engineer near me?</p>
            <div className={styles.contactButtons}>
              <a href="tel:+447460140474" className={styles.ctaButton}>
                <span className={styles.buttonIcon}>📞</span> Call +44 7460140474
              </a>
              <a href="mailto:info@pearlepp.co.uk" className={styles.ctaButton}>
                <span className={styles.buttonIcon}>✉️</span> Email info@pearlepp.co.uk
              </a>
              <a href="https://pearlepp.co.uk/" className={styles.ctaButtonPrimary}>
                <span className={styles.buttonIcon}>🌐</span> Visit PearlEPP.co.uk
              </a>
            </div>
          </div>
        </section>

        <footer className={styles.conclusion}>
          <p className={styles.conclusionText}>
            Recognizing the signs that you need a structural engineer near me can help prevent major issues, maintain property value, 
            and ensure safety. From foundation problems and structural cracks to renovation planning and disaster damage assessment, 
            a structural engineer provides the expertise needed for safe and long-lasting buildings. Choose PEPP for professional, 
            reliable, and expert engineering services.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default StructuralEngineerSigns;