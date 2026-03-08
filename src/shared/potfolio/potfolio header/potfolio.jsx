// import Image from 'next/image';
// import style from './potfolio.module.scss';

// const Portfolio = () => {
//   return (
//     <div className={style.container}>
//       {/* Background Image Section */}
//       <div className={style.background}>
//         <h1 className={style.heading}>PORTFOLIO</h1>
//       </div>

//       {/* Text Content */}
//       <div className={style.content}>
//         <p>
//         Pearl Engineers Planners and Project Managers (PEPP) is dedicated to providing expert planning and architectural design services, guiding clients through every stage of the planning process with precision and care. Our team brings a wealth of experience in delivering tailored solutions for a wide range of projects, from residential extensions and conversions to complex commercial developments.
//         </p>
      
//         <p>
//         With a focus on innovation, functionality, and aesthetics, we ensure that every design not only meets regulatory standards but also enhances the built environment. Our commitment to excellence is reflected in our collaborative approach, working closely with clients and partners to turn visions into reality. At PEPP, we offer comprehensive support to help navigate the planning process smoothly, delivering high-quality outcomes that stand the test of time.
//         </p>
//       </div>

//       {/* Image Below Content */}

//     </div>
//   );
// };

// export default Portfolio;


'use client';

import Image from 'next/image';
import Link from 'next/link';
import style from './potfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={style.page}>
      {/* HERO */}
      <section className={style.hero}>
        {/* Background image (replace src if you have a portfolio banner) */}
        <div className={style.heroMedia}>
          <Image
            src="/portfolio-hero.jpg"
            alt="PEPP Portfolio"
            fill
            priority
            className={style.heroImg}
          />
          <div className={style.heroOverlay} />
          <div className={style.heroGrid} />
        </div>

        <div className={style.heroInner}>
          <div className={style.breadcrumbs}>
            <Link href="/" className={style.crumbLink}>Home</Link>
            <span className={style.crumbSep}>/</span>
            <span className={style.crumbCurrent}>Portfolio</span>
          </div>

          <h1 className={style.title}>Portfolio</h1>
          <p className={style.subtitle}>
            A glimpse into the projects we plan, design, and deliver — with precision, clarity, and build-ready outcomes.
          </p>

          <div className={style.heroCtas}>
            <Link href="/form" className={style.primaryBtn}>
              Get Instant Quote →
            </Link>
            <Link href="/contact" className={style.ghostBtn}>
              Talk to an Expert
            </Link>
          </div>

          <div className={style.trustRow}>
            <div className={style.trustItem}>
              <span className={style.trustDot} />
              <div>
                <div className={style.trustTop}>Fast turnaround</div>
                <div className={style.trustSub}>Clear, build-ready deliverables</div>
              </div>
            </div>

            <div className={style.trustItem}>
              <span className={style.trustDot} />
              <div>
                <div className={style.trustTop}>Fixed-fee quotes</div>
                <div className={style.trustSub}>Transparent pricing</div>
              </div>
            </div>

            <div className={style.trustItem}>
              <span className={style.trustDot} />
              <div>
                <div className={style.trustTop}>UK-wide service</div>
                <div className={style.trustSub}>Residential & commercial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={style.section}>
        <div className={style.wrap}>
          <div className={style.card}>
            <div className={style.cardHeader}>
              <h2 className={style.cardTitle}>Pearl Engineers, Planners & Project Managers (PEPP)</h2>
              <p className={style.cardLead}>
                We guide clients through every stage of the planning process with precision and care.
              </p>
            </div>

            <div className={style.cardBody}>
              <div className={style.copy}>
                <p>
                  Pearl Engineers Planners and Project Managers (PEPP) is dedicated to providing expert planning and
                  architectural design services, guiding clients through every stage of the planning process with
                  precision and care. Our team brings a wealth of experience in delivering tailored solutions for a wide
                  range of projects, from residential extensions and conversions to complex commercial developments.
                </p>

                <p>
                  With a focus on innovation, functionality, and aesthetics, we ensure that every design not only meets
                  regulatory standards but also enhances the built environment. Our commitment to excellence is
                  reflected in our collaborative approach, working closely with clients and partners to turn visions
                  into reality. At PEPP, we offer comprehensive support to help navigate the planning process smoothly,
                  delivering high-quality outcomes that stand the test of time.
                </p>
              </div>

              <div className={style.side}>
                <div className={style.stats}>
                  <div className={style.stat}>
                    <div className={style.statNum}>100+</div>
                    <div className={style.statLabel}>Projects supported</div>
                  </div>
                  <div className={style.stat}>
                    <div className={style.statNum}>48h</div>
                    <div className={style.statLabel}>Typical response</div>
                  </div>
                  <div className={style.stat}>
                    <div className={style.statNum}>UK</div>
                    <div className={style.statLabel}>Nationwide service</div>
                  </div>
                </div>

                <div className={style.featureBox}>
                  <div className={style.featureTitle}>What you get</div>
                  <ul className={style.featureList}>
                    <li>Planning guidance + compliance-ready drawings</li>
                    <li>Clear structural direction for build teams</li>
                    <li>Professional communication & fast revisions</li>
                    <li>End-to-end support for approvals</li>
                  </ul>
                </div>

                <div className={style.smallCtas}>
                  <Link href="/form" className={style.smallPrimary}>
                    Start your quote →
                  </Link>
                  <a href="tel:+447000000000" className={style.smallGhost}>
                    Call now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* OPTIONAL: Gallery placeholder (no logic, just UI) */}
          <div className={style.galleryCard}>
            <div className={style.galleryTop}>
              <h3 className={style.galleryTitle}>Featured work</h3>
              <p className={style.gallerySub}>
                Add your project images here (extensions, lofts, commercial, etc.).
              </p>
            </div>

            <div className={style.galleryGrid}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={style.thumb}>
                  <div className={style.thumbInner}>
                    <span className={style.thumbLabel}>Project {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={style.bottomCta}>
            <div>
              <div className={style.bottomTitle}>Ready to plan your project?</div>
              <div className={style.bottomSub}>
                Tell us what you’re building — we’ll guide you from concept to compliance.
              </div>
            </div>
            <Link href="/form" className={style.bottomBtn}>
              Get Instant Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
