'use client'
import React, { useEffect, useState } from 'react'
import Header from '../shared/header/header'
import Head from 'next/head'
import Footer from '../shared/footer/footer'
import style from './layout.module.scss'

const BaseLayout = (props) => {

    const [isHome, setIsHome] = useState(true)

    useEffect(() => {
        if(location.pathname != '/') {
            setIsHome(false)
        }
    }, [])

    return (
        <main>
            <Header />
            <main className={`${style.main_layout}`}>
                {props.children}
            </main>
            <Footer />
        </main>
    )
}

export default BaseLayout
