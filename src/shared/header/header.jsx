<<<<<<< HEAD
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArchway,
  faDraftingCompass,
  faCalendarCheck,
  faRulerCombined,
  faClipboardCheck,
  faTools,
  faBalanceScale,
  faHardHat,
  faBuilding,
  faBriefcase,
  faProjectDiagram,
  faPen
} from '@fortawesome/free-solid-svg-icons';

const servicesLinks = [
  { link: '/architectural_services', text: 'Architectural Services', icon: faArchway },
  { link: '/structural_engineering_services', text: 'Structural Engineering Services', icon: faDraftingCompass },
  { link: '/planning_and_building_control_services', text: 'Planning & Building Control', icon: faCalendarCheck },
];

const categoryLinks = [
  { link: '/quantity_surveying', text: 'Quantity Surveying', icon: faRulerCombined },
  { link: '/contracts_management', text: 'Contracts Management', icon: faClipboardCheck },
  { link: '/snagging_services', text: 'Snagging Works', icon: faTools },
  { link: '/cost_control_value', text: 'Cost Control & Value Engineering', icon: faBalanceScale },
  { link: '/contractor_management', text: 'Contractor Management', icon: faHardHat },
  { link: '/quality_management', text: 'Quality Management', icon: faBuilding },
  { link: '/commercial_management', text: 'Commercial Management', icon: faBriefcase },
  { link: '/project_management', text: 'Project Management', icon: faProjectDiagram },
];

const blogLinks = [
  { link: '/blog/post1', text: 'Blog Post 1', icon: faPen },
  { link: '/blog/post2', text: 'Blog Post 2', icon: faPen },
  { link: '/blog/post3', text: 'Blog Post 3', icon: faPen },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const sidebarRef = useRef(null);
  const dropdownRef = useRef(null);
=======
'use client'
import React, { useEffect, useRef, useState } from 'react'
import style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faBuilding, faTools, faRulerCombined, faClipboardCheck, faHardHat, faBriefcase, faProjectDiagram, faBalanceScale, faArchway, faDraftingCompass, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ServiceQueryPopup from './servicequerypopup/ServiceQueryPopup'

const Header = () => {
  const headerRef = useRef()
  const pathname = usePathname()
  const [path, setPath] = useState(null)
  const [openModal, setOpenModal]  = useState(true)
>>>>>>> 6a291b0ece0fceb58eef80181730a00d17468a84

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current && !sidebarRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setServicesOpen(false);
        setCategoriesOpen(false);
        setBlogOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.maindiv}>
      <nav className={styles.navbar} ref={dropdownRef}>
        <div className={styles.navbar__logo}>
          <Link href="/">
            <img src="/pearl.png" alt="Logo" />
          </Link>
        </div>

        <ul className={styles.navbar__menu}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/#services">Our Vision</Link></li>
          <li><Link href="/#expertise">Our Expertise</Link></li>

          <li className={`${styles.dropdown} ${styles.desktopDropdown}`} onClick={() => setServicesOpen(!servicesOpen)}>
            <Link href="#">Services ▾</Link>
            <ul className={`${styles.dropdownMenu} ${servicesOpen ? styles.open : ''}`}>
              {servicesLinks.map((service) => (
                <li key={service.link}>
                  <Link href={service.link}>
                    <FontAwesomeIcon icon={service.icon} className={styles.icon} /> {service.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className={`${styles.dropdown} ${styles.desktopDropdown}`} onClick={() => setCategoriesOpen(!categoriesOpen)}>
            <Link href="#">Categories ▾</Link>
            <ul className={`${styles.dropdownMenu} ${categoriesOpen ? styles.open : ''}`}>
              {categoryLinks.map((category) => (
                <li key={category.link}>
                  <Link href={category.link}>
                    <FontAwesomeIcon icon={category.icon} className={styles.icon} /> {category.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* <li className={`${styles.dropdown} ${styles.desktopDropdown}`} onClick={() => setBlogOpen(!blogOpen)}>
            <Link href="#">Blog ▾</Link>
            <ul className={`${styles.dropdownMenu} ${blogOpen ? styles.open : ''}`}>
              {blogLinks.map((blog) => (
                <li key={blog.link}>
                  <Link href={blog.link}>
                    <FontAwesomeIcon icon={blog.icon} className={styles.icon} /> {blog.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}

          <li><Link href="/career">Career</Link></li>
          <li><Link href="/sustainability">Sustainability</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/quote">Instant Quote</Link></li>
        </ul>

        <div className={styles.navbar__hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
<<<<<<< HEAD
    </div>
  );
};
=======
      <ServiceQueryPopup open={openModal} setOpen={setOpenModal} />
    </header>
  )
}
>>>>>>> 6a291b0ece0fceb58eef80181730a00d17468a84

export default Navbar;