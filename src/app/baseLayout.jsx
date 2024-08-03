'use client'
import React, { useEffect, useState } from 'react'
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
            <main className={`${style.main_layout}`}>
                {props.children}
            </main>
        </main>
    )
}

export default BaseLayout
