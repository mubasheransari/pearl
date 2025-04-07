import React from 'react';
import Head from 'next/head';
import styles from './BuildingComplianceServices.module.scss';
import Link from 'next/link';

const BuildingComplianceServices = () => {
  return (
    <>
    
        <title>Building Compliance Services | PEPP UK | Safety & Regulatory Compliance</title>
        <meta 
          name="description" 
          content="Professional building compliance services ensuring your project meets all UK safety regulations. BSR, Building Control, structural inspections & full regulatory compliance." 
        />
        <link rel="canonical" href="https://www.pearlepp.co.uk/building-compliance-services" />
      

      <div className={styles.container}>
        <h1>Building Compliance Services</h1>
        <p>
          Building Compliance Services by Pearl Engineers, Planners, and Project Managers (PEPP)
        </p>

        <p>
          At Pearl Engineers, Planners, and Project Managers (PEPP), we specialize in delivering reliable and efficient <Link href='/building-compliance-services-by-pearl-engineers-planners-and-project-managers-(pepp)'>building compliance services</Link> to ensure that your project meets all legal, safety, and structural standards. From initial design to post-construction inspections, our building compliance services cover every aspect of the compliance process, safeguarding your project and ensuring peace of mind.
        </p>

        <p>
          With expertise that spans Building Safety Regulations (BSR), Building Control approvals, structural inspections, and surveys, our building compliance services are trusted by hundreds of happy clients for their accuracy, professionalism, and commitment to excellence.
        </p>

        {/* Rest of your existing content remains exactly the same */}
        <section className={styles.importance}>
          <h2>Why Building Compliance Services Are Essential</h2>
          {/* ... all other sections ... */}
        </section>

        <p className={styles.conclusion}>
          Contact PEPP today to discuss your requirements and discover how our building compliance services can safeguard your project.
        </p>
      </div>
    </>
  );
};

export default BuildingComplianceServices;