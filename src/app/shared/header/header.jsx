'use client'
import React, { useEffect, useRef } from 'react'
import style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Header = () => {

  const headerRef = useRef()

  useEffect(() => {
    if(window.scrollY > 50) {
      headerRef?.current?.classList.add(`${style.scroll}`)  
    }
    document.addEventListener('scroll', scrollFunction)
    return () => {
      document.removeEventListener('scroll', scrollFunction)
    }
  }, [])

  const scrollFunction = () => {
    if (window.scrollY > 50) {
      headerRef?.current?.classList.add(`${style.scroll}`)
    } else {
      headerRef?.current?.classList.remove(`${style.scroll}`)
    }
  }

  return (
    <header className={style.header}>
      <nav ref={headerRef} class={`navbar navbar-expand-md navbar-dark fixed-top bg-dark`}>
        <div class={`container-fluid ${style.header_container}`}>
          <div className={`${style.logo_box}`}>
            <span><img src="/pearl.png" /></span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBarsStaggered} />
            </button>
          </div>
          <div class={`collapse navbar-collapse ${style.header_links}`} id="navbarCollapse">
            <ul class="navbar-nav mb-2 mb-md-0">
              <li class="nav-item">
                <Link class="nav-link" href="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">Our Capabilities</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">Projects</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/contactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
