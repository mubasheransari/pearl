'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServiceQueryPopup from './servicequerypopup/ServiceQueryPopup'; // Import the modal component

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

/* Submenu items do NOT repeat "Services" in their text */
const servicesLinks = [
  { link: '/architectural_services', text: 'Architectural', icon: faArchway },
  { link: '/structural_engineering', text: 'Structural Engineering', icon: faDraftingCompass },
  { link: '/planning_building_control', text: 'Planning & Building Control', icon: faCalendarCheck },
];

/* 8 categories, 2 columns on desktop */
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

/* Blog: single column */
const blogLinks = [
  { link: '/blog/post1', text: 'Blog Post 1', icon: faPen },
  { link: '/blog/post2', text: 'Blog Post 2', icon: faPen },
  { link: '/blog/post3', text: 'Blog Post 3', icon: faPen },
];

/* For mobile: 2-column layout for Categories */
const leftCategoryLinks = categoryLinks.slice(0, 4);
const rightCategoryLinks = categoryLinks.slice(4);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [openModal, setOpenModal] = useState(true); // Modal state to control visibility
  const sidebarRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close everything if user clicks outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
        setServicesOpen(false);
        setCategoriesOpen(false);
        setBlogOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Let only one dropdown be open at a time on desktop
  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setCategoriesOpen(false);
    setBlogOpen(false);
  };

  return (
    <div className={styles.maindiv}>
      <nav className={styles.navbar} ref={dropdownRef}>
        <div className={styles.navbar__logo}>
          <Link href="/">
            <img src="/pearl.png" alt="Logo" />
          </Link>
        </div>

        {/* ========== Desktop Navigation ========== */}
        <ul className={styles.navbar__menu}>
          <li><Link href="/" className={styles.navLink}>Home</Link></li>
          <li><Link href="/about" className={styles.navLink}>About Us</Link></li>
          <li><Link href="/#services" className={styles.navLink}>Our Vision</Link></li>
          <li><Link href="/#expertise" className={styles.navLink}>Our Expertise</Link></li>

          {/* ---- Services Dropdown (hover) ---- */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => {
              closeAllDropdowns();
              setServicesOpen(true);
            }}
            onMouseLeave={() => setServicesOpen(false)}
          >
            {/* If open, add .activeLink for highlight */}
            <Link
              href="#"
              className={
                servicesOpen
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              Services ▾
            </Link>
            <ul
              className={
                `${styles.dropdownMenu} 
                ${styles.servicesDropdownMenu} 
                ${servicesOpen ? styles.open : ""}`
              }
            >
              {servicesLinks.map((s) => (
                <li key={s.link} className={styles.dropdownItem}>
                  <Link href={s.link} className={styles.dropdownLink}>
                    <FontAwesomeIcon icon={s.icon} className={styles.icon} />
                    {s.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* ---- Categories Dropdown (hover) ---- */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => {
              closeAllDropdowns();
              setCategoriesOpen(true);
            }}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <Link
              href="#"
              className={
                categoriesOpen
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              Categories ▾
            </Link>
            <ul
              className={
                `${styles.dropdownMenu} 
                ${styles.categoriesDropdownMenu} 
                ${categoriesOpen ? styles.open : ""}`
              }
            >
              <div className={styles.twoColumnDropdown}>
                <ul>
                  {leftCategoryLinks.map((cat) => (
                    <li key={cat.link} className={styles.dropdownItem}>
                      <Link href={cat.link} className={styles.dropdownLink}>
                        <FontAwesomeIcon icon={cat.icon} className={styles.icon} />
                        {cat.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {rightCategoryLinks.map((cat) => (
                    <li key={cat.link} className={styles.dropdownItem}>
                      <Link href={cat.link} className={styles.dropdownLink}>
                        <FontAwesomeIcon icon={cat.icon} className={styles.icon} />
                        {cat.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ul>
          </li>

          {/* ---- Blog Dropdown (hover) ---- */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => {
              closeAllDropdowns();
              setBlogOpen(true);
            }}
            onMouseLeave={() => setBlogOpen(false)}
          >
            <Link
              href="#"
              className={
                blogOpen
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              Blog ▾
            </Link>
            <ul
              className={
                `${styles.dropdownMenu} 
                ${styles.blogDropdownMenu} 
                ${blogOpen ? styles.open : ""}`
              }
            >
              {blogLinks.map((b) => (
                <li key={b.link} className={styles.dropdownItem}>
                  <Link href={b.link} className={styles.dropdownLink}>
                    <FontAwesomeIcon icon={b.icon} className={styles.icon} />
                    {b.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Other top-level items */}
          <li><Link href="/career" className={styles.navLink}>Career</Link></li>
          <li><Link href="/sustainability" className={styles.navLink}>Sustainability</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Contact Us</Link></li>
          <li><Link href="/form" className={styles.navLink}>Instant Quote</Link></li>
        </ul>

        {/* Hamburger Icon (mobile) */}
        <div
          className={styles.navbar__hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </nav>

      {/* ========== Mobile Sidebar ========== */}
      <div
        className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}
        ref={sidebarRef}
      >
        <button
          className={styles.sidebar__close}
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        <ul>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)} className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)} className={styles.navLink}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/#services" onClick={() => setMenuOpen(false)} className={styles.navLink}>
              Our Vision
            </Link>
          </li>
          <li>
            <Link href="/#expertise" onClick={() => setMenuOpen(false)} className={styles.navLink}>
              Our Expertise
            </Link>
          </li>

          {/* Services (mobile) */}
          <li>
            <Link
              href="#"
              onClick={() => setServicesOpen(!servicesOpen)}
              className={styles.navLink}
            >
              Services ▾
            </Link>
            {servicesOpen && (
              <ul className={styles.servicesDropdownMenu}>
                {servicesLinks.map((s) => (
                  <li key={s.link}>
                    <Link
                      href={s.link}
                      onClick={() => setMenuOpen(false)}
                      className={styles.dropdownLink}
                    >
                      <FontAwesomeIcon icon={s.icon} className={styles.icon} />
                      {s.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Categories (mobile) */}
          <li>
            <Link
              href="#"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className={styles.navLink}
            >
              Categories ▾
            </Link>
            {categoriesOpen && (
              <div className={styles.twoColumnDropdownMobile}>
                <ul>
                  {leftCategoryLinks.map((cat) => (
                    <li key={cat.link}>
                      <Link
                        href={cat.link}
                        onClick={() => setMenuOpen(false)}
                        className={styles.dropdownLink}
                      >
                        <FontAwesomeIcon icon={cat.icon} className={styles.icon} />
                        {cat.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {rightCategoryLinks.map((cat) => (
                    <li key={cat.link}>
                      <Link
                        href={cat.link}
                        onClick={() => setMenuOpen(false)}
                        className={styles.dropdownLink}
                      >
                        <FontAwesomeIcon icon={cat.icon} className={styles.icon} />
                        {cat.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* Blog (mobile) */}
          <li>
            <Link
              href="#"
              onClick={() => setBlogOpen(!blogOpen)}
              className={styles.navLink}
            >
              Blog ▾
            </Link>
            {blogOpen && (
              <ul className={styles.blogDropdownMenu}>
                {blogLinks.map((b) => (
                  <li key={b.link}>
                    <Link
                      href={b.link}
                      onClick={() => setMenuOpen(false)}
                      className={styles.dropdownLink}
                    >
                      <FontAwesomeIcon icon={b.icon} className={styles.icon} />
                      {b.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link href="/career" onClick={() => setMenuOpen(false)} className={styles.navLink}>
              Career
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className={styles.navLink}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/quote" onClick={() => setMenuOpen(false)} className={styles.navLink}>
              Instant Quote
            </Link>
          </li>
        </ul>
      </div>

      {/* Render the modal */}
      <ServiceQueryPopup open={openModal} setOpen={setOpenModal} />
    </div>
  );
};

export default Navbar;