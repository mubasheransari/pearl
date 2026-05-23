import BaseLayout from '@/app/baseLayout';
import Expertise from '@/shared/expertise/expertise';
import Services from '@/shared/services/services';
import About from '@/shared/about/about';
import ContactUs from '@/shared/contactus/contactUs';
import NewContactUs from '@/shared/newContactUs/newContactUs';
import Video from '@/container/home/video';
import ReviewCard from '@/shared/review-section/review'; 
import Link from 'next/link';
import { genericBlogsMeta } from '@/container/blogs/blogData';
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
  const homepageBlogs = Object.entries(genericBlogsMeta);
 
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



          {/* Blogs */}
          <section className={`${styles.section} ${styles.sectionAlt}`} id="blogs">
            <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 20px' }}>
              <h2 style={{ marginBottom: '12px' }}>Latest Blogs</h2>
              <p style={{ marginBottom: '24px', color: '#555', lineHeight: 1.6 }}>
                Explore our structural engineering, planning, and construction consultancy guides.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                {homepageBlogs.map(([slug, meta]) => (
                  <article key={slug} style={{ border: '1px solid #e7e7e7', borderRadius: '16px', padding: '20px', background: '#fff' }}>
                    <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>
                      <Link href={`/${slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{meta.title}</Link>
                    </h3>
                    <p style={{ color: '#555', lineHeight: 1.6 }}>{meta.description}</p>
                    <Link href={`/${slug}`} style={{ display: 'inline-block', marginTop: '14px', fontWeight: 600 }}>Read blog</Link>
                  </article>
                ))}
              </div>
            </div>
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
