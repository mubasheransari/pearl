import React from 'react'
import Header from './app/shared/header/header'
import Head from 'next/head'
import Footer from './app/shared/footer/footer'

const BaseLayout = (props) => {
    return (
        <main>
            <Header />
            {props.children}
            <Footer />
        </main>
    )
}

export default BaseLayout
