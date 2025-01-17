import React from 'react'
import ContactUs from '@/shared/contactus/contactUs'
import NewContactUs from '@/shared/newContactUs/newContactUs'
import style from './contact.module.scss'
import Head from 'next/head'

export const metadata = {
  title: 'Contact | Pearlepp',
  description: 'Get in touch with us for inquiries, support, or collaboration. We re here to assist you—contact us today and let us help you achieve your goals.',
}

function Page(props) {
  return (
    <div className={style.contact_container}>
            <Head>
            <link  rel="canonical" href="https://pearlepp.co.uk/career" />                                                                                    
            </Head>
        <ContactUs />
        <NewContactUs />
    </div>
  )
}

export default Page
