'use client'
import React, { useState } from 'react';
import styles from './faq.module.scss';

const structuralFaqData = [
  {
    question: 'What is a structural survey?',
    answer:
      'A structural survey is a detailed inspection of a property\'s structural integrity. It evaluates critical components like foundations, walls, roofs, and drainage systems to identify any defects or risks.',
  },
  {
    question: 'When do I need a structural survey?',
    answer: (
      <ul>
        <li>
          <strong>Buying or Selling a Property:</strong> To assess the property's
          condition and identify potential repair costs.
        </li>
        <li>
          <strong>Mortgage Approval:</strong> Lenders often request structural
          surveys for older properties or if there are visible signs of damage.
        </li>
        <li>
          <strong>Insurance Claims:</strong> To document structural issues caused by
          events like flooding, subsidence, or fire.
        </li>
        <li>
          <strong>Post-Construction:</strong> To ensure compliance with building
          standards and regulations.
        </li>
        <li>
          <strong>Renovations:</strong> Before making significant alterations or
          extensions to an existing structure.
        </li>
      </ul>
    ),
  },
  {
    question: 'What does a structural survey cover?',
    answer: (
      <ul>
        <li>
          <strong>Foundations:</strong> Assessment of subsidence, settlement, or
          heave.
        </li>
        <li>
          <strong>Walls:</strong> Identification of cracks, damp, or bulging.
        </li>
        <li>
          <strong>Roofs:</strong> Condition of trusses, beams, and coverings.
        </li>
        <li>
          <strong>Drainage:</strong> Inspection of pipes, manholes, and water
          drainage.
        </li>
        <li>
          <strong>Structural Additions:</strong> Evaluation of extensions, loft
          conversions, or modifications.
        </li>
      </ul>
    ),
  },
  {
    question: 'Do mortgage lenders require a structural survey?',
    answer:
      'Yes, many lenders require a structural survey, especially for older buildings, properties with visible damage, or unique structures like listed buildings.',
  },
  {
    question: 'How does a structural survey help in buying a property?',
    answer: (
      <ul>
        <li>
          <strong>Understand repair costs:</strong> The survey highlights any necessary
          repairs, giving you a clear picture of potential expenses.
        </li>
        <li>
          <strong>Negotiate the purchase price based on findings:</strong> You can
          use the survey results to negotiate a lower price, reflecting the cost
          of repairs.
        </li>
        <li>
          <strong>Avoid potential risks or liabilities:</strong> By identifying
          structural issues early, you can avoid buying a property with
          significant problems that could lead to future costs and stress.
        </li>
      </ul>
    ),
  },
  {
    question: 'Can I claim insurance for structural defects?',
    answer: (
      <ul>
        <li>
          <strong>Subsidence or heave:</strong> Soil movement can cause significant
          structural damage.
        </li>
        <li>
          <strong>Fire or flood damage:</strong> These events can severely compromise
          a building's structural integrity.
        </li>
        <li>
          <strong>Storm or impact damage:</strong> High winds, falling trees, or vehicle
          impacts can cause structural issues.
        </li>
        <li>
          <strong>Damage from faulty construction:</strong> If structural problems
          arise due to poor workmanship or materials, insurance might cover it.
        </li>
      </ul>
    ),
  },
  {
    question: 'How is a structural survey different from a homebuyer’s survey?',
    answer: (
      <>
        <p>
          A homebuyer’s survey provides a general overview of the property’s
          condition but does not include detailed structural analysis.
        </p>
        <p>
          A structural survey (or full building survey) is more detailed,
          focusing specifically on the integrity and safety of the structure.
        </p>
      </>
    ),
  },
  {
    question: 'What is a subsidence survey?',
    answer:
      'A subsidence survey identifies ground movement or instability affecting a property’s foundations. It includes monitoring cracks, assessing soil conditions, and evaluating the need for underpinning.',
  },
  {
    question: 'Are structural surveys required for listed buildings?',
    answer:
      'Yes, listed buildings often require structural surveys due to their age and unique construction methods. Surveys must consider heritage regulations and the materials used.',
  },
  {
    question: 'Can a structural survey help with disputes?',
    answer:
      'Yes, structural surveys are often used as evidence in legal or insurance disputes. They provide a professional and impartial report detailing structural issues and their potential causes.',
  },
  {
    question: 'How does a structural survey help with selling a property?',
    answer:
      'A pre-sale structural survey reassures potential buyers of the property’s condition, speeding up the sale process and avoiding last-minute negotiations or cancellations.',
  },
  {
    question: 'What are common structural issues identified during a survey?',
    answer: (
      <ul>
        <li>
          <strong>Cracks in walls or ceilings:</strong> These can indicate a range of
          problems, from minor settlement to more serious structural issues.
        </li>
        <li>
          <strong>Foundation movement (subsidence, heave):</strong> This is often
          caused by changes in the ground beneath the property.
        </li>
        <li>
          <strong>Roof sagging or leaks:</strong> These can be due to age, damage, or
          poor construction.
        </li>
        <li>
          <strong>Damp or water ingress:</strong> This can lead to rot, mold, and
          other structural problems.
        </li>
        <li>
          <strong>Timber decay or infestation (e.g., woodworm):</strong> These can
          weaken structural timbers.
        </li>
      </ul>
    ),
  },
  {
    question: 'Who conducts a structural survey?',
    answer:
      'A structural survey is conducted by a qualified structural engineer or chartered surveyor who specializes in evaluating buildings.',
  },
  {
    question: 'Can structural surveys be used for insurance purposes?',
    answer:
      'Yes, structural surveys provide documentation for filing insurance claims related to structural damage. They help insurers assess repair costs and validate claims.',
  },
  {
    question: 'How long does a structural survey take?',
    answer:
      'The duration depends on the property size and complexity. A typical survey can take between 3-5 hours, with a detailed report provided within 5-7 working days.',
  },
  {
    question: 'How much does a structural survey cost?',
    answer: (
      <>
        <p>Costs vary depending on property size, location, and complexity. Expect to pay:</p>
        <ul>
          <li><strong>Small properties:</strong> £500–£800.</li>
          <li><strong>Larger or listed properties:</strong> £1,000–£2,000+.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Can structural surveys identify hidden defects?',
    answer:
      'While structural surveys are thorough, they cannot always identify hidden defects without intrusive investigations. However, they can highlight areas of concern that may require further inspection.',
  },
  {
    question: 'What should I do after receiving a structural survey report?',
    answer: (
      <ul>
        <li>
          <strong>For buyers:</strong> Use the report to negotiate the price or plan
          repairs.
        </li>
        <li>
          <strong>For sellers:</strong> Address identified issues to avoid
          complications during the sale.
        </li>
        <li>
          <strong>For insurance claims:</strong> Submit the report to your insurer
          as evidence.
        </li>
      </ul>
    ),
  },
  {
    question: 'Are structural surveys a legal requirement?',
    answer:
      'No, they are not legally required but are highly recommended for peace of mind and to avoid unexpected costs.',
  },
  {
    question: 'Can you provide structural surveys for commercial properties?',
    answer:
      'Yes, we offer structural surveys for both residential and commercial properties, tailored to meet specific requirements such as lease agreements, mortgage approvals, or renovation plans.',
  },
];

const planningFaqData =[
    {
        question: 'How long does planning approval last?',
        answer:
          'Planning permission typically lasts for three years. If work has not commenced within this time, the approval will expire, and a new application will be required.',
      },
      {
        question: 'What is the difference between planning permission and permitted development?',
        answer:
          'Planning permission is required for most types of construction. However, permitted development rights allow certain works to proceed without applying for permission, provided they meet specific criteria set out by the government. Examples include certain extensions or loft conversions.',
      },
      {
        question: 'Can I start construction without planning permission?',
        answer:
          'No, unless your project qualifies under permitted development. Starting without proper permission could lead to enforcement action, including the requirement to remove or alter the construction.',
      },
      {
        question: 'What is a lawful development certificate?',
        answer:
          'A lawful development certificate confirms that your proposed project complies with permitted development rights. While not mandatory, it provides legal proof that your work does not require planning permission.',
      },
      {
        question: 'Are planning decisions influenced by objections from neighbours?',
        answer:
          'The local authority considers objections during the planning process, but decisions are based on material planning considerations such as impact on privacy, light, and local character, not personal grievances.',
      },
      {
        question: 'Can I appeal a planning decision?',
        answer:
          'Yes, if your application is refused, you can appeal to the Planning Inspectorate. Appeals must usually be submitted within 6 months of the decision.',
      },
      {
        question: 'Do I need planning permission for a conservatory?',
        answer:
          'In many cases, conservatories fall under permitted development. However, if they exceed certain size limits or are in a conservation area, planning permission may be required.',
      },

]

const buildingControlData =[
    {
        question: 'What does building control check?',
        answer:
          'Building control ensures that construction meets Building Regulations, covering structural stability, fire safety, ventilation, insulation, drainage, and accessibility.',
      },
      {
        question: 'Do I need building control approval for minor works?',
        answer:
          'Yes, even small works like installing windows, replacing roofs, or altering drainage systems require building control approval to ensure compliance with regulations.',
      },
      {
        question: 'Can I submit my own building control application?',
        answer:
          'Yes, homeowners can submit their own application, but it is often better to work with professionals to ensure all required documentation is complete and accurate.',
      },
      {
        question: 'Are building control inspections mandatory?',
        answer:
          'Yes, inspections at key stages of construction (e.g., foundation, damp-proofing, roof structure) are mandatory to ensure compliance. The inspector will issue a completion certificate after final approval.',
      },
      {
        question: 'Can I use a private building control company instead of the council?',
        answer:
          'Yes, private firms can handle building control. They provide the same certification as local authorities and may offer faster service and better availability.',
      },
      {
        question: 'What happens if I build without building control approval?',
        answer:
          'Work carried out without approval is illegal and may need to be altered or removed. A retrospective regularisation application can sometimes be submitted to bring the work into compliance.',
      },
      {
        question: 'What is the penalty for non-compliance with Building Regulations?',
        answer:
          'Fines can be issued for non-compliance, and in severe cases, legal action may be taken to ensure rectification of the work.',
      },
]

const partyWallDate =[
    {
        question: 'What is the Party Wall Act?',
        answer:
          'The Party Wall Act 1996 protects property owners when work is carried out near or on a shared wall, boundary, or structure. It requires notice to be served to affected neighbours.',
      },
      {
        question: 'When do I need to serve a Party Wall Notice?',
        answer: (
          <ul>
            <li>
              <strong>Building on a boundary line.</strong>
            </li>
            <li>
              <strong>Altering a shared (party) wall.</strong>
            </li>
            <li>
              <strong>Excavating within 3 or 6 metres of a neighbouring property, depending on depth.</strong>
            </li>
          </ul>
        ),
      },
      {
        question: 'How much notice do I need to give?',
        answer:
          'At least 2 months’ notice is required for work on a party wall, and 1 month for excavation or building near a boundary.',
      },
      {
        question: 'What happens if my neighbour refuses the notice?',
        answer:
          'If a neighbour objects, a Party Wall Surveyor is appointed to resolve disputes and ensure the work complies with the Act.',
      },
      {
        question: 'Do I need a Party Wall Agreement for fences or garden walls?',
        answer:
          'Yes, if the structure is built on a shared boundary or impacts a neighbour’s property, a Party Wall Agreement may be required.',
      },


]

const thamesWaterFAQs= [
    {
        question: 'What is a Thames Water Build Over Agreement?',
        answer:
          'This agreement is required when building near or over public sewers or drainage systems managed by Thames Water. It ensures the structural integrity of the sewer is maintained.',
      },
      {
        question: 'What are the regulations for building near a sewer?',
        answer:
          'Construction must not damage or block access to the sewer. Typically, no building is allowed within 3 meters of a sewer without Thames Water’s consent.',
      },
      {
        question: 'Can I move a manhole as part of my project?',
        answer:
          'Yes, but relocating a manhole requires a Build Over Agreement and drainage drawings showing how the sewer system will be rerouted.',
      },
      {
        question: 'What happens if I don’t apply for a Build Over Agreement?',
        answer:
          'Failure to obtain approval can lead to issues during future property sales or legal enforcement to rectify unauthorized work.',
      },
      {
        question: 'Does Thames Water inspect the site?',
        answer:
          'Yes, Thames Water may conduct inspections to ensure work complies with their requirements and does not compromise sewer access.',
      },
]

const structuralDesignCalculationsData =[
    {
        question: 'Why are structural calculations necessary?',
        answer:
          'Structural calculations ensure the safety and stability of a building. They confirm that the structure can handle expected loads, including weight, wind, and environmental factors.',
      },
      {
        question: 'What information is needed for structural calculations?',
        answer:
          'We require detailed architectural drawings, material specifications, and information about site conditions to prepare accurate calculations.',
      },
      {
        question: 'When are structural calculations required?',
        answer:
          'Calculations are needed for any load-bearing structures, such as walls, beams, foundations, and roofs, as well as for projects involving significant alterations.',
      },
      {
        question: 'Are structural calculations reviewed by building control?',
        answer:
          'Yes, building control reviews structural calculations to ensure compliance with Building Regulations.',
      },
]

const architecturalDrawingsData =[
    {
        question: 'What are the types of architectural drawings you provide?',
        answer: (
          <ul>
            <li>
              <strong>Planning Drawings:</strong> For submission to planning authorities.
            </li>
            <li>
              <strong>Building Regulation Drawings:</strong> Detailed technical drawings for construction.
            </li>
            <li>
              <strong>Concept Drawings:</strong> Initial designs for client review and feedback.
            </li>
          </ul>
        ),
      },
      {
        question: 'Can I use your architectural drawings for construction?',
        answer:
          'Yes, our building regulation drawings are specifically designed for construction use and comply with all legal requirements.',
      },
      {
        question: 'How are architectural drawings submitted to the council?',
        answer:
          'We handle the submission process electronically, ensuring all necessary documents are included.',
      },
      {
        question: 'Can I revise my architectural drawings after approval?',
        answer:
          'Yes, revisions can be made, but changes that affect structural or planning approvals may require resubmission and additional costs.',
      },
]

const Faq = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setExpandedQuestion(expandedQuestion === question ? null : question);
  };

  return (
    <div className={styles.mainContainer}>
    <div className={styles.faqContainer}>
      <h2>Structural Surveys FAQs</h2>
      {structuralFaqData.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.faqQuestion}
            onClick={() => toggleQuestion(faq.question)}
          >
            {faq.question}
            <span className={styles.faqIcon}>
              {expandedQuestion === faq.question ? '-' : '+'}
            </span>
          </div>
          {expandedQuestion === faq.question && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    <div className={styles.faqContainer}>
      <h2>Planning FAQs</h2>
      {planningFaqData.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.faqQuestion}
            onClick={() => toggleQuestion(faq.question)}
          >
            {faq.question}
            <span className={styles.faqIcon}>
              {expandedQuestion === faq.question ? '-' : '+'}
            </span>
          </div>
          {expandedQuestion === faq.question && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    <div className={styles.faqContainer}>
      <h2>Building Control FAQs</h2>
      {buildingControlData.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.faqQuestion}
            onClick={() => toggleQuestion(faq.question)}
          >
            {faq.question}
            <span className={styles.faqIcon}>
              {expandedQuestion === faq.question ? '-' : '+'}
            </span>
          </div>
          {expandedQuestion === faq.question && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    <div className={styles.faqContainer}>
      <h2>Party Wall FAQs</h2>
      {partyWallDate.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.faqQuestion}
            onClick={() => toggleQuestion(faq.question)}
          >
            {faq.question}
            <span className={styles.faqIcon}>
              {expandedQuestion === faq.question ? '-' : '+'}
            </span>
          </div>
          {expandedQuestion === faq.question && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    <div className={styles.faqContainer}>
      <h2>Thames Water FAQs</h2>
      {thamesWaterFAQs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.faqQuestion}
            onClick={() => toggleQuestion(faq.question)}
          >
            {faq.question}
            <span className={styles.faqIcon}>
              {expandedQuestion === faq.question ? '-' : '+'}
            </span>
          </div>
          {expandedQuestion === faq.question && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    <div className={styles.faqContainer}>
      <h2>Structural Design Calculations FAQs</h2>
      {structuralDesignCalculationsData.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.faqQuestion}
            onClick={() => toggleQuestion(faq.question)}
          >
            {faq.question}
            <span className={styles.faqIcon}>
              {expandedQuestion === faq.question ? '-' : '+'}
            </span>
          </div>
          {expandedQuestion === faq.question && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    <div className={styles.faqContainer}>
      <h2>Architectural Drawings FAQs</h2>
      {architecturalDrawingsData.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.faqQuestion}
            onClick={() => toggleQuestion(faq.question)}
          >
            {faq.question}
            <span className={styles.faqIcon}>
              {expandedQuestion === faq.question ? '-' : '+'}
            </span>
          </div>
          {expandedQuestion === faq.question && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Faq;