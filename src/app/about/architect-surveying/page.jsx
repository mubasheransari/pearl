import React from 'react';
import styles from './page.module.scss';

const ArchitectSurveyingGuide = () => {
  return (
    <div className={styles.architectSurveyingGuide}>
      <h1 className={styles.title}>What Is Architect Surveying? A Comprehensive Guide</h1>
      <p className={styles.intro}>
        Architect surveying is a crucial aspect of construction, renovation, and land development projects. It involves assessing and mapping land, buildings, and infrastructure to ensure projects are designed and executed with precision, safety, and compliance. Whether you are planning a new build, an extension, or property renovations, understanding architect surveying helps you make informed decisions.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Understanding Architect Surveying</h2>
        <p className={styles.sectionContent}>
          Architect surveying involves the measurement, analysis, and mapping of physical spaces to guide architectural designs and structural integrity. This process ensures that a project is feasible, structurally sound, and adheres to UK regulations.
        </p>
        <h3 className={styles.subSectionTitle}>Types of Architect Surveying:</h3>
        <ul className={styles.list}>
          <li>Topographical Surveys – Mapping the natural and man-made features of land.</li>
          <li>Measured Building Surveys – Recording the dimensions and details of existing structures.</li>
          <li>Site Analysis Surveys – Assessing environmental factors like drainage, soil stability, and access.</li>
          <li>Structural Condition Surveys – Evaluating the integrity of buildings before renovation or construction.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Why Is Architect Surveying Important?</h2>
        <p className={styles.sectionContent}>
          Architect surveying provides critical data that helps:
        </p>
        <ul className={styles.list}>
          <li>Ensure structural safety and prevent design flaws.</li>
          <li>Optimize spatial planning and land usage.</li>
          <li>Identify potential risks such as land instability or drainage issues.</li>
          <li>Comply with UK Building Regulations and planning permissions.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. How Architect Surveying Works in Construction Projects</h2>
        <p className={styles.sectionContent}>
          Before construction begins, an architectural surveyor assesses the project site using specialized tools and software to collect precise data. The process includes:
        </p>
        <ol className={styles.orderedList}>
          <li>Initial Site Assessment – Understanding the landscape and existing structures.</li>
          <li>Surveying and Data Collection – Using laser scanners, GPS, and drones for accuracy.</li>
          <li>Creating Detailed Drawings – Producing 3D models, blueprints, and topographic maps.</li>
          <li>Regulatory Compliance Checks – Ensuring designs align with local planning policies and building codes.</li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Do You Need an Architect Surveyor?</h2>
        <p className={styles.sectionContent}>
          You should hire an architect surveyor if you are:
        </p>
        <ul className={styles.list}>
          <li>Planning a new construction project and need accurate site measurements.</li>
          <li>Renovating or extending a property and require compliance with structural safety standards.</li>
          <li>Purchasing land or property and need an assessment of its condition.</li>
          <li>Seeking planning permission and require topographical and site analysis reports.</li>
        </ul>
      </section>

      <section className={styles.whyChoosePEPP}>
        <h2 className={styles.sectionTitle}>5. How PEPP Provides Expert Architect Surveying Services</h2>
        <p className={styles.sectionContent}>
          At Pearl Engineers Planners and Project Managers (PEPP), we specialize in architect surveying to ensure that projects in Bromley, London, UK are executed with accuracy and compliance. Our services include:
        </p>
        <ul className={styles.list}>
          <li>Topographical and land surveys for site planning.</li>
          <li>Measured building surveys to support renovations and extensions.</li>
          <li>Structural condition assessments to prevent safety risks.</li>
          <li>Digital 3D modeling and blueprint creation for architects and builders.</li>
        </ul>
      </section>

      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Contact Us Today!</h2>
        <p className={styles.contactContent}>
          Looking for professional architect surveying services in Bromley, London, UK? Contact PEPP today! Call <a href="tel:+447460140474" className={styles.contactLink}>+44 7460140474</a> or email <a href="mailto:info@pearlepp.co.uk" className={styles.contactLink}>info@pearlepp.co.uk</a>. Visit <a href="https://pearlepp.co.uk/" className={styles.contactLink}>PearlEPP.co.uk</a> for expert guidance.
        </p>
      </section>

      <section className={styles.conclusion}>
        <p className={styles.conclusionContent}>
          Architect surveying plays a vital role in construction, renovation, and land development by providing accurate data, structural assessments, and regulatory compliance support. Whether you are a homeowner, developer, or architect, hiring expert surveyors like PEPP ensures that your project is designed and built with precision, efficiency, and safety.
        </p>
      </section>
    </div>
  );
};

export default ArchitectSurveyingGuide;