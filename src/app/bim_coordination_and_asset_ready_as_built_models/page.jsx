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
  const scope = [
    "Managed and coordinated multi-discipline BIM models using Revit and Navisworks.",
    "Led BIM Execution Planning (BEP), Level of Detail (LOD) development, and model QA/QC.",
    "Conducted clash detection, model federation, and design coordination workshops.",
    "Defined project-specific BIM protocols, workflows, and parameter standards.",
    "Reviewed and validated shop drawings and digital submittals to align with construction schedules.",
    "Delivered COBie-compliant as-built models for facility management integration.",
  ];

  const outcomes = [
    "Produced fully COBie-compliant BIM deliverables enabling smooth integration into client FM systems.",
    "Standardised Revit families and shared parameters for consistent asset tagging and lifecycle tracking.",
    "Implemented QA/QC protocols aligned with ISO 19650, ensuring high-quality asset data.",
    "Reduced errors and documentation time by integrating data-rich BIM outputs into O&M workflows.",
  ];

  const images = [
    { src: "/bim-1.png", alt: "BIM Coordination view 1" },
    { src: "/bim-2.png", alt: "BIM Coordination view 2" },
    { src: "/bim-3.png", alt: "BIM Coordination view 3" },
    { src: "/bim-4.png", alt: "BIM Coordination view 4" },
  ];

  return (
    <section
      className={`${style.bimWrap}`}
      id="bim_coordination_and_asset_ready_as_built_models"
    >
      {/* HERO */}
      <div className={`${style.bimHero}`}>
        <div className="container py-5">
          <div className={`${style.bimHeroInner}`}>
            <div className={`${style.bimBadge}`}>BIM Services</div>

            <h1 className={`${style.bimTitle} ${lora.className}`}>
              BIM Coordination &amp; Asset-Ready As-Built Models
            </h1>

            <p className={`${style.bimSubtitle}`}>
              End-to-end multi-discipline BIM delivery aligned with international standards — from design coordination
              to facility management integration.
            </p>

            <div className={`${style.bimMetaRow}`}>
              <div className={`${style.bimMeta}`}>
                <span className={style.bimMetaLabel}>Standards</span>
                <span className={style.bimMetaValue}>ISO 19650 · COBie</span>
              </div>
              <div className={`${style.bimMeta}`}>
                <span className={style.bimMetaLabel}>Tools</span>
                <span className={style.bimMetaValue}>Revit · Navisworks</span>
              </div>
              <div className={`${style.bimMeta}`}>
                <span className={style.bimMetaLabel}>Delivery</span>
                <span className={style.bimMetaValue}>LOD · QA/QC · As-Built</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          {/* LEFT: narrative */}
          <div className="col-12 col-lg-7">
            <div className={style.bimCard}>
              <h3 className={`${style.bimSectionTitle} ${lora.className}`}>Overview</h3>
              <p className={style.bimText}>
                Our team was responsible for the end-to-end delivery of BIM models that integrated architectural,
                structural, and MEP disciplines. By applying international standards and advanced coordination
                processes, we ensured a seamless transition from design to facility management.
              </p>
            </div>

            <div className={style.bimCard}>
              <h3 className={`${style.bimSectionTitle} ${lora.className}`}>Scope of Services</h3>
              <ul className={style.bimList}>
                {scope.map((t, i) => (
                  <li key={i} className={style.bimListItem}>
                    <span className={style.bimCheck}>✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={style.bimCard}>
              <h3 className={`${style.bimSectionTitle} ${lora.className}`}>Outcomes Delivered</h3>
              <ul className={style.bimList}>
                {outcomes.map((t, i) => (
                  <li key={i} className={style.bimListItem}>
                    <span className={style.bimCheck}>✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: highlights */}
          <div className="col-12 col-lg-5">
            <div className={style.bimSticky}>
              <div className={`${style.bimMiniCard}`}>
                <h4 className={`${style.bimMiniTitle} ${lora.className}`}>What you get</h4>
                <div className={style.bimKpiGrid}>
                  <div className={style.bimKpi}>
                    <div className={style.bimKpiTop}>COBie</div>
                    <div className={style.bimKpiBottom}>Compliant deliverables</div>
                  </div>
                  <div className={style.bimKpi}>
                    <div className={style.bimKpiTop}>QA/QC</div>
                    <div className={style.bimKpiBottom}>ISO 19650 aligned</div>
                  </div>
                  <div className={style.bimKpi}>
                    <div className={style.bimKpiTop}>LOD</div>
                    <div className={style.bimKpiBottom}>Asset-ready models</div>
                  </div>
                  <div className={style.bimKpi}>
                    <div className={style.bimKpiTop}>FM</div>
                    <div className={style.bimKpiBottom}>Smooth integration</div>
                  </div>
                </div>
              </div>

              <div className={`${style.bimMiniCard}`}>
                <h4 className={`${style.bimMiniTitle} ${lora.className}`}>Sample Coordination Views</h4>
                <div className="row g-3">
                  {images.map((im, idx) => (
                    <div key={idx} className="col-12 col-sm-6">
                      <div className={style.bimImgWrap}>
                        <img
                          src={im.src}
                          alt={im.alt}
                          className={style.bimImg}
                          loading="lazy"
                        />
                        <div className={style.bimImgOverlay}>
                          <span>View</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={style.bimHint}>
                  Tip: click behavior can be added later (lightbox) without changing layout.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={style.bimCta}>
        <div className="container py-5">
          <div className={style.bimCtaInner}>
            <div>
              <h3 className={`${style.bimCtaTitle} ${lora.className}`}>Need BIM coordination support?</h3>
              <p className={style.bimCtaText}>
                Share your project details and we’ll respond with the best approach for coordination, standards,
                and asset-ready delivery.
              </p>
            </div>
            <a href="/contact" className={style.bimCtaBtn}>
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default bim_coordination_and_asset_ready_as_built_models;

