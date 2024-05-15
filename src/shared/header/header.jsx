'use client'
import React, { useEffect, useRef, useState } from 'react'
import style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {

  const headerRef = useRef()
  const pathname = usePathname();

  const [path, setPath] = useState(null)

  useEffect(() => {
    setPath(pathname)
  }, [pathname])

  const navLinks = [
    { link: '/#home', class: 'nav-link', text: 'Home' },
    { link: '/#about-us', class: 'nav-link', text: 'About Us' },
    { link: '/#services', class: 'nav-link', text: 'Our Vision' },
    { link: '/#expertise', class: 'nav-link', text: 'Our Expertise' },
  ]

  const categoryLinks = [
    { link: '/quantity_surverying', class: 'dropdown-item', text: 'Quantity Surverying' },
    { link: '/contracts_management', class: 'dropdown-item', text: 'Contracts Management' },
    { link: '/snagging_services', class: 'dropdown-item', text: 'Snagging Works' },
    { link: '/cost_control_value', class: 'dropdown-item', text: 'Cost Control and Value Engineering' },
    { link: '/contractor_management', class: 'dropdown-item', text: 'Contractor Management' },
    { link: '/quality_management', class: 'dropdown-item', text: 'Quality Management' },
    { link: '/commercial_management', class: 'dropdown-item', text: 'Commercial Management' },
    { link: '/project_management', class: 'dropdown-item', text: 'Project Management' },
  ]

  const servicesLinks = [
    { link: '/architectural_services', class: 'dropdown-item', text: 'Architectural Services' },
    { link: '/structural_enigneering_services', class: 'dropdown-item', text: 'Structural Enigneering Services' },
    { link: '/planning_and_building_control_services', class: 'dropdown-item', text: 'Planning and Building Control Services' },
  ]

  // useEffect(() => {
  //   if (window.scrollY > 50) {
  //     headerRef?.current?.classList.add(`${style.scroll}`)
  //   }
  //   document.addEventListener('scroll', scrollFunction)
  //   return () => {
  //     document.removeEventListener('scroll', scrollFunction)
  //   }
  // }, [])

  // const scrollFunction = () => {
  //   if (window.scrollY > 50) {
  //     headerRef?.current?.classList.add(`${style.scroll}`)
  //   } else {
  //     headerRef?.current?.classList.remove(`${style.scroll}`)
  //   }
  // }

  return (
    <header className={style.header}>
      <nav ref={headerRef} className={`navbar navbar-expand-md navbar-dark fixed-top bg-dark ${style.scroll}`}>
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
              {navLinks.map((link, i) => {
                // ${(location?.hash == link.link?.replace('/', '')) ? style.active : ''}
                return (
                  <>
                    <li className={`nav-item`} key={'nav_' + i}>
                      <Link className={`${link.class}`} href={link.link}>{link.text}</Link>
                    </li>
                  </>
                )
              })}
              <div className={` nav-item dropdown ${style.dropdown_div}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className={` dropdown-menu ${style.dropdown_menu}`} aria-labelledby="navbarDropdownMenuLink">
                  {servicesLinks.map((link, i) => {
                    return (
                      <>
                        <li>
                          <Link className={`${link.class}`} href={link.link} >{link.text}</Link>
                        </li>
                      </>
                    )
                  })}
                </ul>
              </div>
              <div className={` nav-item dropdown ${style.dropdown_div}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className={` dropdown-menu ${style.dropdown_menu}`} aria-labelledby="navbarDropdownMenuLink">
                  {categoryLinks.map((link, i) => {
                    return (
                      <>
                        <li>
                          <Link className={`${link.class}`} href={link.link} >{link.text}</Link>
                        </li>
                      </>
                    )
                  })}
                </ul>
              </div>
              <li className={`nav-item ${style.contact}`}>
                <Link className={`nav-link`} href="/#contact-us">Contact Us</Link>
              </li>
              <li className={`nav-item ${style.form}`}>
                <Link className={`nav-link`} href="/form">Form</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
