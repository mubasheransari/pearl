import React from 'react'
import Career from '../../container/career'
import Head from 'next/head'

export const metadata = {
  title: 'Career | Pearlepp',
  description: 'Explore exciting career opportunities to grow your skills and achieve your goals. Join a dynamic team and take the next step in your professional journey.',
  alternates:{
    canonical: "https://pearlepp.co.uk/career"
  }
}

const Page = () => {
  return (
    <div>
      <Career />
    </div>
  )
}

export default Page