import BaseLayout from '@/app/baseLayout';
import Expertise from '@/shared/expertise/expertise';
import Services from '@/shared/services/services';
import About from '@/shared/about/about';
import ContactUs from '@/shared/contactus/contactUs';
import NewContactUs from '@/shared/newContactUs/newContactUs';
import Video from '@/container/home/video';
import ReviewCard from '@/shared/review-section/review'; 
import Barkreview from '@/shared/barkReviews/bark';
import CheckReview from '@/shared/checkReviews/check';
import styles from './home.module.scss';

export const metadata = {
  title: 'Pearl Engineers, Planners & Project Managers | Pearlepp',
  description: 'Pearl Engineers, Planners & Project Managers offer expert solutions in engineering, planning, and project management for seamless, innovative project execution.',
  alternates: {
    canonical: "https://pearlepp.co.uk/"
  }
};

const Home = () => {
 
  return (
    <>
      <BaseLayout>
        <main className={styles.home}>
          {/* Hero */}
          <section className={styles.hero}>
            <Video />
          </section>

          {/* About + Values */}
          <section className={styles.section} id="about">
            <About isMain={true} />
          </section>

          {/* Services */}
          <section className={`${styles.section} ${styles.sectionAlt}`} id="services">
            <Services />
          </section>

          {/* Reviews */}
          <section className={styles.section} id="reviews">
            <ReviewCard />
          </section>
          <section className={`${styles.section} ${styles.sectionAlt}`}>
            <Barkreview />
          </section>
          <section className={styles.section}>
            <CheckReview />
          </section>

          {/* Expertise */}
          <section className={`${styles.section} ${styles.sectionAlt}`} id="expertise">
            <Expertise />
          </section>

          {/* Contact */}
          <section className={styles.section} id="contact">
            {/* Keep both components as-is; only layout/spacing is unified by wrappers */}
            <ContactUs />
            <div className={styles.spacer} />
            <NewContactUs />
          </section>
        </main>
      </BaseLayout>
    </>
  );
};

export default Home;
