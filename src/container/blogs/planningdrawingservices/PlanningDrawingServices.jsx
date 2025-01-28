import React from 'react';
import styles from './PlanningDrawing.module.scss'
import Link from 'next/link';

const PlanningDrawingServices = () => {
  return (
    <div className={styles.container}>
      <h1>Planning Drawings</h1>
      <p className={styles.intro}>
        How Planning Drawings Services Can Transform Your Architectural Vision into Reality
      </p>

      <p>
        At <Link href='/'>Pearl Engineers, Planners, and Project Managers (PEPP)</Link>, we specialize in creating exceptional planning drawings that are not only visually appealing but also technically sound and compliant with all relevant regulations. Our planning drawings cover every aspect of the design process, tailored to your project&#44;s specific requirements:
      </p>

      <section className={styles.services}>
        <h2>Our Planning Drawing Services</h2>
        <ul>
          <li>
            <h4>Floor Plans</h4>
            <p>
              We create precise floor plans detailing the layout of your project. These planning drawings include room dimensions, door and window placements, and circulation areas, ensuring they meet both functional and regulatory standards.
            </p>
          </li>
          <li>
            <h4>Elevations and Sections</h4>
            <p>
              Our elevation and section planning drawings illustrate the exterior and interior details of your project, highlighting materials, finishes, and structural components in line with RIBA and ARB guidelines.
            </p>
          </li>
          <li>
            <h4>Site Plans and Location Plans</h4>
            <p>
              We provide site and location planning drawings to depict your project in context. These planning drawings include boundaries, access points, and relationships to surrounding properties, ensuring compliance with local council requirements.
            </p>
          </li>
          <li>
            <h4>Detailed Planning Drawings for Extensions and Alterations</h4>
            <div>
              For residential or commercial extensions, our planning drawings include:
              <ul>
                <li>Proposed layouts and elevations.</li>
                <li>Roof plans, drainage, and external works.</li>
                <li>Integration with existing structures, ensuring aesthetic and structural harmony.</li>
              </ul>
            </div>
          </li>
          <li>
            <h4>3D Visualizations and Renders</h4>
            <p>
              To enhance your planning application, we provide 3D visualizations and renders alongside our planning drawings, offering a realistic representation of your project to stakeholders and planning authorities.
            </p>
          </li>
          <li>
            <h4>Supporting Documents and Statements</h4>
            <div>
              As part of our <Link href='/planning_and_building_control_services'>planning drawings</Link> service, we also prepare:
              <ul>
                <li>Design and Access Statements, detailing the project&#44;s compliance with planning policies.</li>
                <li>Sustainability and heritage impact assessments, where applicable.</li>
              </ul>
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.standards}>
        <h2>Guided by RIBA and ARB Standards</h2>
        <p>
          At PEPP, our planning drawings adhere to the highest professional standards:
        </p>
        <ul>
          <li>
            <p>RIBA Plan of Work: Ensuring a structured and efficient approach to every stage of the design and planning drawing process.</p>
          </li>
          <li>
            <p>ARB Standards: Guaranteeing ethical, compliant, and high-quality architectural work.</p>
          </li>
        </ul>
        <p>
          These frameworks ensure that our planning drawings are not only functional but also aligned with the broader principles of design excellence.
        </p>
      </section>

      <section className={styles.peppAdvantage}>
        <h2>The PEPP Advantage in Planning Drawings</h2>
        <ul>
          <li>
            <h4>Expertise Across All Project Types</h4>
            <p>
              Our planning drawings are suitable for residential, commercial, and industrial projects. Whether it&#44;s a small home extension or a multi-story commercial development, we tailor every drawing to your specific needs.
            </p>
          </li>

          <li>
            <h4>Compliance and Precision</h4>
            <p>
              Every planning drawing is prepared with a thorough understanding of Building Regulations, ensuring compliance with safety, accessibility, and sustainability standards.
            </p>
          </li>

          <li>
            <h4>Streamlined Approval Process</h4>
            <p>
              Our team&#44;s experience with local councils across London and the UK ensures that your planning drawings are optimized for swift and successful approvals
            </p>
          </li>

          <li>
            <h4>Comprehensive Support</h4>
            <p>
              From initial design concepts to final approval, we guide you through every step of the process, offering additional services such as structural engineering, MEP (mechanical, electrical, and plumbing) design, and technical drawings, all seamlessly integrated with your planning drawings.
            </p>
          </li>

          <li>
            <h4>Collaboration with Builders and Contractors</h4>
            <p>
              In addition to providing planning drawings, we collaborate with partner builders to ensure your vision is realized efficiently and to the highest standards of quality
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.peppAdvantage}>
        <h2>Why Hundreds of Happy Customers Trust PEPP for Planning Drawings</h2>
        <p>
        With hundreds of happy customers, PEPP has established itself as a leader in delivering planning drawings that achieve approvals and exceed expectations. Clients choose us for our:
        </p>
        <ul>
          <li>
            <h4>Client-Centric Approach</h4>
            <p>
            We prioritize your goals, tailoring our planning drawings to align with your vision and project objectives.
            </p>
          </li>
          <li>
            <h4>Affordable Pricing</h4>
            <p>
             Our cost-effective services make professional planning drawings accessible to a wide range of clients.
            </p>
          </li>
          <li>
            <h4>Technical Excellence</h4>
            <p>
              Our drawings are detailed, accurate, and compliant, ensuring smooth navigation through the planning process.
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.peppAdvantage}>
        <h2>Partnering with Local and National Authorities</h2>
        <p>
        Our experience spans councils across London and the UK, ensuring that our planning drawings meet the specific requirements of local authorities. This in-depth knowledge allows us to anticipate potential challenges and tailor our submissions to maximize approval success
        </p>
      </section>

      <section className={styles.peppAdvantage}>
        <h2>From Planning Drawings to Construction</h2>
        <p>
        At PEPP, we don&#44;t stop at planning drawings. Our integrated approach ensures that we support you through the entire project lifecycle, from design to build. With our trusted partner builders, we provide end-to-end solutions, maintaining control over quality, cost, and timelines
        </p>
      </section>

      <section className={styles.peppAdvantage}>
        <h2>Contact PEPP for Professional Planning Drawings</h2>
        <p>
        If you&#44;re looking for expert planning drawings that combine compliance, creativity, and cost-effectiveness, trust Pearl Engineers, Planners, and Project Managers (PEPP). Our team is dedicated to turning your vision into reality with precision and professionalism.
        </p>
      </section>

      <p className={styles.conclusion}>
        Contact PEPP today to discuss your project and experience the expertise of a team committed to delivering exceptional planning drawings.
      </p>
    </div>
  );
};

export default PlanningDrawingServices;