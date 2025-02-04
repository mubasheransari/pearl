'use client'
import React, { useEffect, useRef, useState } from 'react'
import style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faBuilding, faTools, faRulerCombined, faClipboardCheck, faHardHat, faBriefcase, faProjectDiagram, faBalanceScale, faArchway, faDraftingCompass, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const headerRef = useRef()
  const pathname = usePathname()
  const [path, setPath] = useState(null)

  useEffect(() => {
    setPath(pathname)
  }, [pathname])

  const navLinks = [
    { link: '/', text: 'Home' },
    { link: '/about', text: 'About Us' },
    { link: '/#services', text: 'Our Vision' },
    { link: '/#expertise', text: 'Our Expertise' },
  ]

  const categoryLinks = [
    { link: '/quantity_surverying', text: 'Quantity Surverying', icon: faRulerCombined },
    { link: '/contracts_management', text: 'Contracts Management', icon: faClipboardCheck },
    { link: '/snagging_services', text: 'Snagging Works', icon: faTools },
    { link: '/cost_control_value', text: 'Cost Control & Value Engineering', icon: faBalanceScale },
    { link: '/contractor_management', text: 'Contractor Management', icon: faHardHat },
    { link: '/quality_management', text: 'Quality Management', icon: faBuilding },
    { link: '/commercial_management', text: 'Commercial Management', icon: faBriefcase },
    { link: '/project_management', text: 'Project Management', icon: faProjectDiagram },
  ]

  const servicesLinks = [
    { link: '/architectural_services', text: 'Architectural Services', icon: faArchway },
    { link: '/structural_enigneering_services', text: 'Structural Engineering Services', icon: faDraftingCompass },
    { link: '/planning_and_building_control_services', text: 'Planning & Building Control Services', icon: faCalendarCheck },
  ]

  return (
    <header className={style.header}>
      <nav ref={headerRef} className={`navbar navbar-expand-md navbar-dark fixed-top bg-dark ${style.scroll}`}>
        <div className={`container-fluid ${style.header_container}`}>
          <div className={style.logo_box}>
            <span><Link href="/"><img src="/pearl.png" alt="Logo" /></Link></span>
            <div className={style.logo_wrap}>
              <p className={style.quotation_btn}>
                <Link href="/form" className={style.instant_quote_btn}>Instant quote</Link>
              </p>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBarsStaggered} />
              </button>
            </div>
          </div>

          <div className={`collapse navbar-collapse ${style.header_links}`} id="navbarCollapse">
            <ul className="navbar-nav mb-2 mb-md-0">
              {navLinks.map((link, i) => (
                <li key={i} className="nav-item">
                  <Link className="nav-link" href={link.link}>{link.text}</Link>
                </li>
              ))}

              {/* Services Dropdown */}
              <div className={`nav-item dropdown ${style.dropdown_div}`}>
                <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className={`dropdown-menu ${style.dropdown_menu_service}`} aria-labelledby="servicesDropdown">
                  {servicesLinks.map((link, i) => (
                    <li key={i} className={style.category_item}>
                      <FontAwesomeIcon icon={link.icon} className={style.category_icon} />
                      <Link className="dropdown-item" href={link.link}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories Dropdown */}
              <div className={`nav-item dropdown ${style.dropdown_div}`}>
                <a className="nav-link dropdown-toggle" href="#" id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className={`dropdown-menu ${style.dropdown_menu}`} aria-labelledby="categoriesDropdown">
                  <div className={style.category_grid}>
                    {categoryLinks.map((link, i) => (
                      <li key={i} className={style.category_item}>
                        <FontAwesomeIcon icon={link.icon} className={style.category_icon} />
                        <Link className="dropdown-item" href={link.link}>{link.text}</Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>

              <li className={`nav-item ${style.contact}`}>
                <Link className="nav-link" href="/career">Career</Link>
              </li>
              <li className={`nav-item ${style.contact}`}>
                <Link className="nav-link" href="/contact">Contact Us</Link>
              </li>
              <li className={`nav-item ${style.form}`}>
                <Link className={`nav-link ${style.instant_quote_btn}`} href="/form">Instant quote</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header