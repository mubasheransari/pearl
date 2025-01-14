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
    { link: '/', class: 'nav-link', text: 'Home',type:'text', menu:[] },
    { link: '/about', class: 'nav-link', text: 'About Us',type:'select', menu:[{name:'About', link:'/about'}] },
    { link: '/#services', class: 'nav-link', text: 'Our Vision',type:'text', menu:[] },
    { link: '/#expertise', class: 'nav-link', text: 'Our Expertise',type:'text', menu:[] },
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
    { link: '/structural_enigneering_services', class: 'dropdown-item', text: 'Structural Engineering Services' },
    { link: '/planning_and_building_control_services', class: 'dropdown-item', text: 'Planning and Building Control Services' },
  ]

  return (
    <header className={style.header}>
      <nav ref={headerRef} className={`navbar navbar-expand-md navbar-dark fixed-top bg-dark ${style.scroll}`}>
        <div className={`container-fluid ${style.header_container}`}>
          <div className={`${style.logo_box}`}>
            <span><Link  href="/"><img src="/pearl.png" /></Link></span>
            <div className={style.logo_wrap}>
            <p className={style.quotation_btn}>
              <Link href="/form">Instant quote</Link></p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBarsStaggered} />
            </button>
            </div>
          </div>
          <div className={`collapse navbar-collapse ${style.header_links}`} id="navbarCollapse">
            <ul className="navbar-nav mb-2 mb-md-0">
              {navLinks.map((link, i) => {
                return (
                  <>
                    {link.type == 'select' ?
                     <div className={` nav-item dropdown ${style.dropdown_div}`}>
                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       {link.text}
                     </a>
                     <ul className={` dropdown-menu ${style.dropdown_menu}`} aria-labelledby="navbarDropdownMenuLink">
                       {link.menu.map((item, i) => {
                         return (
                           <>
                             <li>
                               <Link className={`${link.class}`} href={item.link} >{item.name}</Link>
                             </li>
                           </>
                         )
                       })}
                     </ul>
                   </div>
                    :
                    <li className={`nav-item`} key={'nav_' + i}>
                      <Link className={`${link.class}`} href={link.link}>{link.text}</Link>
                    </li>
                    }
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
                <Link className={`nav-link`} href="/career">Career</Link>
              </li>
              <li className={`nav-item ${style.contact}`}>
                <Link className={`nav-link`} href="/contact">Contact Us</Link>
              </li>
              <li className={`nav-item ${style.form}`}>
                <Link className={`nav-link`} href="/form">Instant qoute</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
