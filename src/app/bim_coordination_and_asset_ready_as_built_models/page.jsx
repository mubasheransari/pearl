import React from 'react'
import style from '../style.module.scss'
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: 'BIM Coordination & Asset-Ready As-Built Models | Pearlepp',
  description:
    'End-to-end BIM coordination and COBie-compliant, asset-ready as-built models integrating architectural, structural, and MEP disciplines for seamless handover to facility management.',
  alternates: {
    canonical: 'https://pearlepp.co.uk/bim_coordination_and_asset_ready_as_built_models',
  },
};

function bim_coordination_and_asset_ready_as_built_models() {
  return (
    <>
      <section className={`${style.category}`} id="bim_coordination_and_asset_ready_as_built_models">
        <div className={`${style.category_box} container py-5 d-flex`}>
          <div className={`${style.left}`}>
            <h4 className={lora.className}>BIM Coordination and Asset-Ready As-Built Models</h4>

            <div className={`${style.category_text}`}>
              <p>
                Our team was responsible for the end-to-end delivery of BIM models that integrated architectural,
                structural, and MEP disciplines. By applying international standards and advanced coordination
                processes, we ensured a seamless transition from design to facility management.
              </p>

              <h5 className={lora.className} style={{ marginTop: 22 }}>Scope of Services</h5>
              <ul>
                <li>Managed and coordinated multi-discipline BIM models using Revit and Navisworks.</li>
                <li>Led BIM Execution Planning (BEP), Level of Detail (LOD) development, and model QA/QC.</li>
                <li>Conducted clash detection, model federation, and design coordination workshops.</li>
                <li>Defined project-specific BIM protocols, workflows, and parameter standards.</li>
                <li>Reviewed and validated shop drawings and digital submittals to align with construction schedules.</li>
                <li>Delivered COBie-compliant as-built models for facility management integration.</li>
              </ul>

              <h5 className={lora.className} style={{ marginTop: 22 }}>Outcomes Delivered</h5>
              <ul>
                <li>
                  Produced fully COBie-compliant BIM deliverables enabling smooth integration into client FM systems.
                </li>
                <li>
                  Standardised Revit families and shared parameters for consistent asset tagging and lifecycle tracking.
                </li>
                <li>
                  Implemented QA/QC protocols aligned with ISO 19650, ensuring high-quality asset data.
                </li>
                <li>
                  Reduced errors and documentation time by integrating data-rich BIM outputs into O&amp;M workflows.
                </li>
              </ul>

              {/* Images */}
              <h5 className={lora.className} style={{ marginTop: 22 }}>Sample Coordination Views</h5>
              <div className="row g-3" style={{ marginTop: 8 }}>
                <div className="col-12 col-md-6">
                  <img
                    src="/bim-1.png"
                    alt="BIM Coordination view 1"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <img
                    src="/bim-2.png"
                    alt="BIM Coordination view 2"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <img
                    src="/bim-3.png"
                    alt="BIM Coordination view 3"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <img
                    src="/bim-4.png"
                    alt="BIM Coordination view 4"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default bim_coordination_and_asset_ready_as_built_models
