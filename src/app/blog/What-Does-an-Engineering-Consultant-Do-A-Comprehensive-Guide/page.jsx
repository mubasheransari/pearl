import React from 'react';
import styles from './page.module.scss';

const EngineeringConsultant = () => {
  return (
    <div className={styles.container}>
      <meta name="title" content="What Does an Engineering Consultant Do? A Comprehensive Guide" />
      <meta name="description" content="Experienced engineering consultant providing expert solutions in design, analysis, and project management for residential & commercial developments. Contact us!" />

      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>What Does an Engineering Consultant Do? A Comprehensive Guide</h1>
          <p className={styles.intro}>
            Engineering consultants play a crucial role in construction, infrastructure development, and industrial projects. 
            Their expertise ensures that projects are technically sound, efficient, and compliant with regulations. 
            This guide explains what an engineering consultant does and why their role is essential.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Understanding the Role of an Engineering Consultant</h2>
          <p className={styles.sectionText}>
            An engineering consultant is a highly skilled professional who provides expert advice, design solutions, 
            and project management across various industries, including construction, manufacturing, energy, and transportation.
          </p>
          
          <div className={styles.responsibilities}>
            <h3 className={styles.subtitle}>Key responsibilities include:</h3>
            <ul className={styles.responsibilityList}>
              <li>Assessing project feasibility and technical requirements</li>
              <li>Designing engineering solutions to optimize performance and cost-effectiveness</li>
              <li>Ensuring compliance with UK Building Regulations and industry standards</li>
              <li>Risk assessment and mitigation for construction and structural projects</li>
              <li>Overseeing quality control and providing recommendations for project improvements</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Key Responsibilities of an Engineering Consultant</h2>
          <p className={styles.sectionText}>
            The role of an engineering consultant varies depending on the industry and project requirements.
          </p>
          
          <div className={styles.responsibilityCards}>
            {/* Responsibility 1 */}
            <div className={styles.responsibilityCard}>
              <h3 className={styles.cardTitle}>Structural Engineering Consultation</h3>
              <ul className={styles.cardList}>
                <li>Designing load-bearing structures, foundations, and support systems</li>
                <li>Evaluating existing buildings for safety and compliance</li>
                <li>Providing reinforcement solutions for aging infrastructure</li>
              </ul>
            </div>
            
            {/* Responsibility 2 */}
            <div className={styles.responsibilityCard}>
              <h3 className={styles.cardTitle}>Project Management and Coordination</h3>
              <ul className={styles.cardList}>
                <li>Overseeing the planning, execution, and completion of engineering projects</li>
                <li>Coordinating between architects, contractors, and regulatory bodies</li>
                <li>Managing project budgets and resource allocation</li>
              </ul>
            </div>
            
            {/* Responsibility 3 */}
            <div className={styles.responsibilityCard}>
              <h3 className={styles.cardTitle}>Compliance and Safety Assurance</h3>
              <ul className={styles.cardList}>
                <li>Ensuring regulatory compliance with UK Building Codes and environmental laws</li>
                <li>Conducting structural inspections and risk assessments</li>
                <li>Recommending safety enhancements and sustainable building solutions</li>
              </ul>
            </div>
            
            {/* Responsibility 4 */}
            <div className={styles.responsibilityCard}>
              <h3 className={styles.cardTitle}>Environmental and Sustainable Engineering Solutions</h3>
              <ul className={styles.cardList}>
                <li>Assessing the environmental impact of construction projects</li>
                <li>Implementing energy-efficient designs to minimize waste and costs</li>
                <li>Advising on the use of sustainable materials and green technologies</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Benefits of Hiring an Engineering Consultant</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <h3 className={styles.benefitTitle}>Cost-efficient designs</h3>
              <p>Optimizing material use and labor costs</p>
            </div>
            <div className={styles.benefitItem}>
              <h3 className={styles.benefitTitle}>Enhanced safety</h3>
              <p>Ensuring regulatory compliance to avoid legal issues</p>
            </div>
            <div className={styles.benefitItem}>
              <h3 className={styles.benefitTitle}>Time-saving execution</h3>
              <p>Professional planning and management</p>
            </div>
            <div className={styles.benefitItem}>
              <h3 className={styles.benefitTitle}>Innovative solutions</h3>
              <p>Integrating modern engineering trends</p>
            </div>
          </div>
        </section>

        <section className={styles.peppSection}>
          <h2 className={styles.sectionTitle}>4. How PEPP Provides Expert Engineering Consultancy in London</h2>
          <p className={styles.sectionText}>
            At Pearl Engineers Planners and Project Managers (PEPP), we specialize in providing engineering consultancy services 
            for residential, commercial, and industrial projects.
          </p>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Structural Analysis</h3>
              <p>Comprehensive feasibility assessments and design solutions</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Project Planning</h3>
              <p>Regulatory compliance consulting and coordination</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Sustainable Design</h3>
              <p>Energy-efficient and environmentally conscious solutions</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Risk Assessment</h3>
              <p>Safety evaluations and mitigation strategies</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Innovation</h3>
              <p>Tailored construction solutions for unique needs</p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Contact Us Today!</h2>
            <p className={styles.ctaText}>Looking for a trusted engineering consultant in London?</p>
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
            An engineering consultant is a key player in ensuring efficient, safe, and sustainable construction projects. 
            Their expertise in structural integrity, project management, and compliance makes them invaluable in various industries. 
            Trust PEPP for expert engineering consultancy services that drive project success and innovation.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default EngineeringConsultant;