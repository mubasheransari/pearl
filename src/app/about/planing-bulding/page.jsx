import React from 'react';
import styles from './page.module.scss';

const PlanningBuildingControl = () => {
  return (
    <div className={styles.planningBuildingControl}>
      <header className={styles.header}>
        <h1 className={styles.title}>A Guide to Planning and Building Control in Bromley: What You Need to Know</h1>
        <p className={styles.intro}>
          Planning and building control are crucial aspects of any construction or renovation project in the UK. Whether you are planning a new build, an extension, or structural modifications, understanding these regulations ensures your project is legally compliant, safe, and structurally sound. This guide explains planning and building control, their differences, and how they impact homeowners in Bromley, London, UK.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>1. Understanding Planning Permission</h2>
        <p className={styles.text}>
          Planning permission refers to the legal approval required from local authorities before commencing certain types of construction. It ensures that the project aligns with local planning policies, environmental considerations, and community impact.
        </p>
        <h3 className={styles.subheading}>When Do You Need Planning Permission?</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>New builds and large extensions exceeding size limits.</li>
          <li className={styles.listItem}>Loft conversions or basement renovations that significantly alter the structure.</li>
          <li className={styles.listItem}>Changing building use, such as converting a residential property into a commercial space.</li>
          <li className={styles.listItem}>Properties in conservation areas where design restrictions apply.</li>
        </ul>
        <h3 className={styles.subheading}>What Happens If You Don’t Get Planning Permission?</h3>
        <p className={styles.text}>
          Failure to obtain planning approval can result in enforcement action, fines, or even demolition orders.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>2. What Is Building Control?</h2>
        <p className={styles.text}>
          Building control ensures that construction work complies with UK Building Regulations. Unlike planning permission, which focuses on the design and aesthetics, building control is concerned with safety, accessibility, and energy efficiency.
        </p>
        <h3 className={styles.subheading}>Key Aspects of Building Control:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Structural stability to prevent risks such as subsidence or collapse.</li>
          <li className={styles.listItem}>Fire safety regulations, including fire doors and escape routes.</li>
          <li className={styles.listItem}>Energy efficiency through proper insulation and ventilation.</li>
          <li className={styles.listItem}>Drainage, plumbing, and electrical compliance for a safe and functional home.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>3. How Planning and Building Control Work Together</h2>
        <p className={styles.text}>
          Both processes ensure that construction projects meet national and local standards. A project may require:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Planning permission only (for minor external changes).</li>
          <li className={styles.listItem}>Building control approval only (for internal structural modifications).</li>
          <li className={styles.listItem}>Both approvals (for major renovations, extensions, or new builds).</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>4. Do You Need a Structural Engineer for Planning and Building Control?</h2>
        <p className={styles.text}>
          A structural engineer is essential for projects requiring load-bearing calculations, foundation designs, and safety evaluations. Their expertise ensures that your plans meet regulatory requirements and pass inspections by building control officers.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>5. How PEPP Helps with Planning and Building Control Compliance</h2>
        <p className={styles.text}>
          At Pearl Engineers Planners and Project Managers (PEPP), we provide expert guidance to homeowners in Bromley, London, UK by offering:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Planning application assistance to secure approvals efficiently.</li>
          <li className={styles.listItem}>Structural calculations and drawings for building control submissions.</li>
          <li className={styles.listItem}>Compliance consulting to ensure UK Building Regulations are met.</li>
          <li className={styles.listItem}>Inspection and reporting services to address potential regulatory concerns.</li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <h2 className={styles.subtitle}>Contact Us Today!</h2>
        <p className={styles.text}>
          Need assistance with planning and building control for your project? Contact PEPP today! Call +44 7460140474 or email info@pearlepp.co.uk. Visit <a href="https://pearlepp.co.uk/" className={styles.link}>PearlEPP.co.uk</a> for expert consultation.
        </p>
      </footer>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Conclusion</h2>
        <p className={styles.text}>
          Understanding planning and building control is vital for ensuring safe, legal, and well-executed construction projects. Whether you need planning approval or building regulation compliance, working with professionals like PEPP guarantees a smooth, hassle-free process for your home improvement or construction project in Bromley, London, UK.
        </p>
      </section>
    </div>
  );
};

export default PlanningBuildingControl;