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
import Head from 'next/head';

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
        <Video />
        <About isMain={true} />
        <Services />
        
 <ReviewCard/>
 <Barkreview />
 <CheckReview/>

        <Expertise />

        <ContactUs />
        <NewContactUs />
      </BaseLayout>
    </>
  );
};

export default Home;
