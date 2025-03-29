import React from 'react';
import Head from 'next/head';
import styles from './page.module.scss';

const PlanningBuildingControl = () => {
  const metaTitle = "A Guide to Planning and Building Control in Bromley: What You Need to Know";
  const metaDescription = "Expert planning and building control services ensuring compliance, safety, and efficiency for residential & commercial projects. Get professional guidance today!";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
      </Head>

      <div className={styles.planningBuildingControl}>
        <header className={styles.header}>
          <h1>{metaTitle}</h1>
          <p className={styles.intro}>
            Planning and building control are crucial aspects of any construction or renovation project in the UK. 
            Whether you're planning a new build, extension, or structural modifications, understanding these regulations 
            ensures your project is legally compliant, safe, and structurally sound.
          </p>
        </header>

        <Section 
          title="1. Understanding Planning Permission"
          content="Planning permission refers to the legal approval required from local authorities before commencing certain types of construction. It ensures that the project aligns with local planning policies, environmental considerations, and community impact."
        >
          <Subsection 
            title="When Do You Need Planning Permission?"
            items={[
              "New builds and large extensions exceeding size limits",
              "Loft conversions or basement renovations that significantly alter the structure",
              "Changing building use, such as converting a residential property into a commercial space",
              "Properties in conservation areas where design restrictions apply"
            ]}
          />
          <Subsection 
            title="What Happens If You Don't Get Planning Permission?"
            content="Failure to obtain planning approval can result in enforcement action, fines, or even demolition orders."
          />
        </Section>

        <Section 
          title="2. What Is Building Control?"
          content="Building control ensures that construction work complies with UK Building Regulations. Unlike planning permission, which focuses on the design and aesthetics, building control is concerned with safety, accessibility, and energy efficiency."
        >
          <Subsection 
            title="Key Aspects of Building Control:"
            items={[
              "Structural stability to prevent risks such as subsidence or collapse",
              "Fire safety regulations, including fire doors and escape routes",
              "Energy efficiency through proper insulation and ventilation",
              "Drainage, plumbing, and electrical compliance for a safe and functional home"
            ]}
          />
        </Section>

        <Section 
          title="3. How Planning and Building Control Work Together"
          content="Both processes ensure that construction projects meet national and local standards. A project may require:"
        >
          <ul className={styles.list}>
            <li>Planning permission only (for minor external changes)</li>
            <li>Building control approval only (for internal structural modifications)</li>
            <li>Both approvals (for major renovations, extensions, or new builds)</li>
          </ul>
        </Section>

        <Section 
          title="4. Do You Need a Structural Engineer for Planning and Building Control?"
          content="A structural engineer is essential for projects requiring load-bearing calculations, foundation designs, and safety evaluations. Their expertise ensures that your plans meet regulatory requirements and pass inspections by building control officers."
        />

        <Section 
          title="5. How PEPP Helps with Planning and Building Control Compliance"
          content="At Pearl Engineers Planners and Project Managers (PEPP), we provide expert guidance to homeowners in Bromley, London, UK by offering:"
        >
          <ul className={styles.list}>
            <li>Planning application assistance to secure approvals efficiently</li>
            <li>Structural calculations and drawings for building control submissions</li>
            <li>Compliance consulting to ensure UK Building Regulations are met</li>
            <li>Inspection and reporting services to address potential regulatory concerns</li>
          </ul>
        </Section>

        <footer className={styles.footer}>
          <h2>Contact Us Today!</h2>
          <p>
            Need assistance with planning and building control for your project? Contact PEPP today! 
            Call +44 7460140474 or email info@pearlepp.co.uk. Visit{' '}
            <a href="https://pearlepp.co.uk/" className={styles.link}>PearlEPP.co.uk</a> for expert consultation.
          </p>
        </footer>

        <Section 
          title="Conclusion"
          content="Understanding planning and building control is vital for ensuring safe, legal, and well-executed construction projects. Whether you need planning approval or building regulation compliance, working with professionals like PEPP guarantees a smooth, hassle-free process for your home improvement or construction project in Bromley, London, UK."
        />
      </div>
    </>
  );
};

// Reusable Section component
const Section = ({ title, content, children }) => (
  <section className={styles.section}>
    <h2 className={styles.subtitle}>{title}</h2>
    {content && <p className={styles.text}>{content}</p>}
    {children}
  </section>
);

// Reusable Subsection component
const Subsection = ({ title, content, items }) => (
  <>
    <h3 className={styles.subheading}>{title}</h3>
    {content && <p className={styles.text}>{content}</p>}
    {items && (
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.listItem}>{item}</li>
        ))}
      </ul>
    )}
  </>
);

export default PlanningBuildingControl;