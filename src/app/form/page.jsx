import React from 'react'
import Form from '@/container/form/form'
import Head from 'next/head'

export const metadata = {
    title: 'Form | Pearlepp',
    description: 'Complete our easy-to-use form to get in touch, request information, or provide feedback. Your input helps us serve you better—connect with us today!',
    alternates:{
        canonical: "https://pearlepp.co.uk/Form"
      }    
}

const page = () => {

    return (
        <>
            <Head>
                <link  rel="canonical" href="https://pearlepp.co.uk/Form" />                                                                                    
            </Head>
            <Form />
        </>
    )
}

export default page