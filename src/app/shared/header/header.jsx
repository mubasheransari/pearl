'use client'
import React, { useEffect, useRef, useState } from 'react'
import style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Header = () => {

  const headerRef = useRef()

  const [path, setPath] = useState(null)

  useEffect(() => {
    setPath(location.pathname)
  }, [location.pathname])

  const navLinks = [
    { link: '/', class: 'nav-link', text: 'Home' },
    { link: '/b', class: 'nav-link', text: 'About Us' },
    { link: '/c', class: 'nav-link', text: 'Our Capabilities' },
    { link: '/d', class: 'nav-link', text: 'Projects' },
    { link: '/contactUs', class: 'nav-link', text: 'Contat Us' },
  ]

  useEffect(() => {
    if (window.scrollY > 50) {
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
      <nav ref={headerRef} className={`navbar navbar-expand-md navbar-dark fixed-top bg-dark`}>
        <div className={`container-fluid ${style.header_container}`}>
          <div className={`${style.logo_box}`}>
            <span><img src="/pearl.png" /></span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBarsStaggered} />
            </button>
          </div>
          <div className={`collapse navbar-collapse ${style.header_links}`} id="navbarCollapse">
            <ul className="navbar-nav mb-2 mb-md-0">
              {navLinks.map(link => {
                return (
                  <li className={`nav-item`}>
                    <Link className={`${link.class} ${(path == link.link) ? style.active : ''}`} href={link.link}>{link.text}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
