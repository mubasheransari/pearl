import React from 'react';
import styles from './CommercialConstructionPlanning.module.scss';

const CommercialConstructionPlanning = () => {
  return (
    <div className={styles.container}>
      <h1>Commercial Construction Planning Services</h1>
      <p className={styles.intro}>
        Delivering Expertise, Precision, and Efficiency in Commercial Construction
      </p>

      <p>
        At Pearl Engineers, Planners, and Project Managers (PEPP), we understand that commercial construction projects demand meticulous planning, innovative solutions, and seamless execution. Our commercial construction planning services are designed to deliver exactly that—combining technical expertise with creative problem-solving to ensure every project is completed to the highest standards.
      </p>

      <p>
        With years of experience and a proven track record, we specialize in crafting bespoke plans that align with business goals, comply with all relevant regulations, and optimize time and resources. Our work adheres to the principles set out by RIBA (Royal Institute of British Architects), ARB (Architects Registration Board), CIOB (Chartered Institute of Building), and CABE (Chartered Association of Building Engineers), guaranteeing professionalism and precision at every stage.
      </p>

      <section className={styles.importance}>
        <h2>The Importance of Commercial Construction Planning</h2>
        <p>
          Effective commercial construction planning is the cornerstone of a successful project. It ensures that every element of the process is thoughtfully designed, efficiently coordinated, and thoroughly executed. At PEPP, we provide tailored commercial construction planning services that:
        </p>
        <ul>
          <li>
            <h4>Optimize Resource Allocation</h4>
            <p>Maximizing efficiency to reduce costs without compromising quality.</p>
          </li>
          <li>
            <h4>Ensure Compliance</h4>
            <p>
              Adhering to Building Regulations, CDM (Construction Design and Management) Regulations, and industry standards like BS EN 1990 (Structural Design).
            </p>
          </li>
          <li>
            <h4>Streamline Approvals</h4>
            <p>
              Crafting planning submissions that meet local authority requirements, expediting the approval process.
            </p>
          </li>
          <li>
            <h4>Enhance Design and Functionality</h4>
            <p>
              Creating spaces that are not only practical but also visually appealing and future-ready.
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.services}>
        <h2>Comprehensive Services for Commercial Construction Planning</h2>
        <p>
          Our commercial construction planning services encompass every aspect of project development, ensuring no detail is overlooked:
        </p>
        <ol>
          <li>
            <h3>Feasibility Studies</h3>
            <div>
              Understanding the viability of a project is crucial. Our feasibility studies include:
              <ul>
                <li>Site assessments to determine potential opportunities and constraints.</li>
                <li>Budget analysis to align with financial goals.</li>
                <li>Evaluations of zoning, infrastructure, and environmental considerations.</li>
              </ul>
            </div>
          </li>
          {/* ... other service sections ... */}
        </ol>
      </section>

      <section className={styles.peppAdvantage}>
        <h2>Why Choose PEPP for Commercial Construction Planning?</h2>
        <ul>
          <li>
            <h4>Expertise Across Sectors</h4>
            <p>
              From office buildings to retail spaces and industrial facilities, our team has extensive experience in commercial construction planning.
            </p>
          </li>
          {/* ... other advantages ... */}
        </ul>
      </section>

      {/* ... rest of the content sections ... */}

      <p className={styles.conclusion}>
        Contact PEPP today to discuss your project and discover how our commercial construction planning expertise can make all the difference.
      </p>
    </div>
  );
};

export default CommercialConstructionPlanning;