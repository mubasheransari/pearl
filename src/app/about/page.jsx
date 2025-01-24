import React from 'react'
import About from '@/shared/about/about'
import style from './about.module.scss'
import Head from 'next/head'

export const metadata = {
  title: 'About | Pearlepp',
  description: 'Learn about us! We are dedicated to delivering excellence with innovative solutions, expert services, and a customer-first approach to meet your unique needs',
}

function Page() {
  return (
    <>
      <Head>
      <link  rel="canonical" href="https://pearlepp.co.uk/about" />
      </Head>

    <div className={style.about_container}>
        <About isMain={false} />
    </div>
    </>
  )
}

export default Page