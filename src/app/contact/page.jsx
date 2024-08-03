import React from 'react'
import ContactUs from '@/shared/contactus/contactUs'
import NewContactUs from '@/shared/newContactUs/newContactUs'
import style from './contact.module.scss'

function Page(props) {
  return (
    <div className={style.contact_container}>
        <ContactUs />
        <NewContactUs />
    </div>
  )
}

export default Page
