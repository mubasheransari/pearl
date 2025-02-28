import styles from './energy.module.scss';

const EnergyRetrofitting = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Energy Retrofitting in the UK: Challenges, Policies, and the Way Forward</h1>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Introduction</h2>
        <p>
          The UK has set ambitious climate targets to reduce carbon emissions by 80% by 2050 and 68% by 2030. 
          However, achieving this goal requires significant improvements in the energy efficiency of existing buildings, 
          which contribute over 40% of the country’s energy use. This blog explores energy retrofitting—why it’s needed, 
          the challenges it faces, and how policies and innovations can drive the transformation toward sustainable homes.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Why Energy Retrofitting?</h2>
        <ul className={styles.list}>
            <p>Buildings are major contributors to the UK’s carbon footprint. Retrofitting—modifying existing structures to improve energy efficiency—helps to:</p>
          <li>✔ Reduce energy consumption</li>
          <li>✔ Lower carbon emissions</li>
          <li>✔ Enhance indoor living conditions</li>
          <li>✔ Reduce fuel poverty</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Challenges in Energy Retrofitting</h2>
        <h3 className={styles.subheadingSmall}>1️⃣ Economic Barriers</h3>
        <ul className={styles.list}>
          <li>High upfront costs: Deep retrofits are expensive, and many homeowners lack the funds.</li>
          <li>Long payback periods: Energy savings take years to recover the investment.</li>
          <li>Limited financial incentives: Government programs like the Green Deal have limitations.</li>
        </ul>

        <h3 className={styles.subheadingSmall}>2️⃣ Technical Challenges</h3>
        <ul className={styles.list}>
          <li>Diverse building stock: The UK has old buildings with different structures, making a one-size-fits-all retrofit approach impractical.</li>
          <li>Poor installation quality: Many retrofits fail due to poor workmanship.</li>
          <li>Lack of monitoring: Limited data tracking for post-retrofit energy savings.</li>
        </ul>

        <h3 className={styles.subheadingSmall}>3️⃣ Environmental & Social Concerns</h3>
        <ul className={styles.list}>
          <li>Indoor air quality risks: Poor ventilation in retrofitted homes can lead to mold and increased radon levels.</li>
          <li>Disruption to occupants: Retrofitting often requires tenants to vacate, making it less appealing.</li>
          <li>Low public awareness: Many people don’t understand the benefits of retrofitting.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Retrofitting Approaches</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Shallow Retrofit</th>
              <th>Deep Retrofit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cost</td>
              <td>Lower</td>
              <td>Higher</td>
            </tr>
            <tr>
              <td>Energy Savings</td>
              <td>10-30%</td>
              <td>50-90%</td>
            </tr>
            <tr>
              <td>Measures</td>
              <td>Window replacement, insulation</td>
              <td>Whole-house upgrade, solar panels, heat pumps</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Key Policies and Standards in the UK</h2>
        <ul className={styles.list}>
          <li>📜 PAS 2035 Standard: The UK’s primary framework for domestic energy retrofits, ensuring high-quality installations.</li>
          <li>🏗 EnerPHit Standard: A Passivhaus approach to deep retrofits, offering maximum energy efficiency.</li>
          <li>🌱 AECB Retrofit Standard: A cost-effective, performance-based guideline for sustainable retrofits.</li>
          <li>🏡 Green Deal & ECO Scheme: Government-backed initiatives aimed at funding retrofit projects, though with limitations.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Innovations in Retrofitting</h2>
        <ul className={styles.list}>
          <li>🚀 Smart Home Integration: AI-driven home automation helps optimize energy use.</li>
          <li>💡 New Insulation Materials: Aerogel insulation provides high efficiency with minimal thickness.</li>
          <li>🌞 Renewable Energy: Solar panels and heat pumps reduce reliance on fossil fuels.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Conclusion: The Road Ahead</h2>
        <ul className={styles.list}>
          <li>1️⃣ Expand government subsidies to make deep retrofitting financially viable.</li>
          <li>2️⃣ Educate homeowners on the long-term benefits of energy-efficient homes.</li>
          <li>3️⃣ Improve data collection and monitoring for post-retrofit energy savings.</li>
          <li>4️⃣ Invest in sustainable materials and smart technology for the future.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>🔗 Further Reading</h2>
        <p>
          📖 Read the full research paper: 
          <a href="https://doi.org/10.1016/j.rser.2022.112161" className={styles.link}>
            ALABID et al. (2022) – Energy Retrofit Review
          </a>
        </p>
      </section>
    </div>
  );
};

export default EnergyRetrofitting;
