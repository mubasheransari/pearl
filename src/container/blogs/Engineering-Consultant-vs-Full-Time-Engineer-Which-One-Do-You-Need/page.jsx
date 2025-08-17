import Head from 'next/head';
import styles from './page.module.scss';
import Link from 'next/link';

const EngineeringConsultantVsFullTimeEngineer = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Consultant vs. Full-Time Engineer: Which One Do You Need</title>
        <meta
          name="description"
          content="Expert engineering consultancy at Pearlepp. Providing innovative solutions and professional advice for all your engineering needs. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://pearlepp.co.uk/Engineering-Consultant-vs-Full-Time-Engineer-Which-One-Do-You-Need"
        />
      </Head>

      <main className={styles.main}>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1>Engineering Consultant vs. Full-Time Engineer: Which One Do You Need?</h1>
          </header>

          <section className={styles.introSection}>
            <p>
              When starting a construction or renovation project in <strong>Bromley</strong> or anywhere in <strong>Greater London</strong>, you’ll often hear two terms thrown around: <Link href="/structure-engineers">engineering consultant</Link> and <strong>full-time engineer</strong>. While both are trained professionals, understanding their roles and differences can help you make the right decision for your project — saving time, money, and unnecessary stress.
            </p>
            <p>
              At <strong>PEPP</strong>, we provide consultancy-based engineering services designed for homeowners, developers, and architects looking for expert guidance on a project-by-project basis.
            </p>
          </section>

          <section className={styles.section}>
            <h2>🧠 What’s the Difference?</h2>
            <h3><strong>Engineering Consultant:</strong></h3>
            <p>
              An independent or agency-based specialist who is brought in on a per-project basis. They analyse your project needs, perform calculations, and provide expert recommendations and reports. Consultants do not work on-site daily but offer high-level structural advice and design validation.
            </p>

            <h3><strong>Full-Time Engineer:</strong></h3>
            <p>
              Typically hired as part of a permanent team, often working in construction companies or large architectural firms. They handle ongoing internal engineering needs, often across multiple projects for the same company.
            </p>
          </section>

          <section className={styles.section}>
            <h2>🏗️ Which One Do You Need?</h2>
            <ul>
              <li>
                <strong>Home Renovation or Extension in Bromley?</strong><br />
                ➤ You need a consultant. PEPP provides structural calculations, beam specifications, and planning support tailored to small and mid-sized builds.
              </li>
              <li>
                <strong>Multiple Ongoing Construction Projects?</strong><br />
                ➤ A full-time engineer may be more cost-effective if you manage continuous in-house construction work.
              </li>
              <li>
                <strong>One-Off Projects or Loft Conversions?</strong><br />
                ➤ A consultant like PEPP offers more flexibility and faster turnaround without the cost of full-time employment.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>👷 Why PEPP?</h2>
            <ul>
              <li>Certified structural reports and CAD drawings</li>
              <li>Fixed-fee packages with no ongoing employment costs</li>
              <li>Local knowledge of Bromley’s planning & building regulations</li>
              <li>Expert support for homeowners, developers, and architects</li>
            </ul>
          </section>

          <section className={styles.conclusion}>
            <h2>🔚 Conclusion</h2>
            <p>
              If you're managing a one-time build, extension, or home upgrade, hiring an <Link href="/Why-Hiring-a-Local-Structural-Engineer-Near-Me-Matters">engineering consultant</Link> like PEPP gives you expert support without long-term commitment. We help you make structurally sound decisions that comply with local regulations — while staying on budget.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default EngineeringConsultantVsFullTimeEngineer;
