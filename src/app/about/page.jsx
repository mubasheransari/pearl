import React from 'react'
import About from '@/shared/about/about'
import style from './about.module.scss'

function Page() {
  return (
    <div className={style.about_container}>
        <About isMain={false} />
    </div>
  )
}

export default Page