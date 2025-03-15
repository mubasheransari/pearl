'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname to track route changes
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServiceQueryPopup from './servicequerypopup/ServiceQueryPopup'; // Import the modal component
import HomePopup from './home-page-popup/home-popup';

import {
  // faCity,
  // faBalanceScale,
  // faFileContract,
  // faHandshake,
  // faCalculator,
  // faUsersCog,
  // faClipboardList,
  // faBuilding,
  // faSearchLocation,
  // faChartLine,
  // faProjectDiagram,
  // faPen,
  // faEye,
  // faBolt,
  // faGavel,
  // faBookOpen,
  // faLightbulb,
  // faEnvelope,
  faInfoCircle, // Added for "About Us"
  // faBookReader, // Added for "Research Blogs"


  faBookReader,
  faCity,
  faBalanceScale,
  faFileContract,
  faHandshake,
  faCalculator,
  faUsersCog,
  faClipboardList,
  faBuilding,
  faSearchLocation,
  faChartLine,
  faProjectDiagram,
  faPen,
  faEye,
  faGavel,
  faBolt,
  faBookOpen,
  faLightbulb,
  faEnvelope,

  
} from '@fortawesome/free-solid-svg-icons';

/* Submenu items do NOT repeat "Services" in their text */
const aboutLinks = [
  { link: '/about', text: 'About US', icon: faGavel },
  { link: '/#services', text: 'Our Vision', icon: faEye },
  { link: '/energy-retrofit', text: 'Energy Retrofit Blog', icon: faBolt },
  { link: '/research-blog', text: 'Research Blogs', icon: faGavel },
  { link: '/sustainable-structural', text: 'Sustainable structural', icon: faBalanceScale },

  { link: '/contact', text: 'Contact Us', icon: faEnvelope },
  { link: '/the-importance-hiring', text: 'The important of hiring', icon: faLightbulb },
  { link: '/common-mistake', text: 'Common mistake', icon: faFileContract },
  { link: '/future-structure', text: 'Future structure', icon: faBuilding },
  { link: '/inovative-structure', text: 'Innovative structure design', icon: faProjectDiagram },
  { link: '/key-chanlleges', text: 'Key challenges', icon: faChartLine },
  { link: '/right-structure', text: 'Choosing right structure design', icon: faSearchLocation },
  { link: '/Structural-Design', text: 'Structure design', icon: faClipboardList },
  { link: '/structure-engineers', text: 'Structure engineers', icon: faUsersCog },
  

];
// Split aboutLinks into two columns
const leftAboutLinks = aboutLinks.slice(0, Math.ceil(aboutLinks.length / 2));
const rightAboutLinks = aboutLinks.slice(Math.ceil(aboutLinks.length / 2));


const servicesLinks = [
  { link: '/architectural_services', text: 'Architectural', icon: faCity },
  { link: '/structural_enigneering_services', text: 'Structural Engineering', icon: faBalanceScale },
  { link: '/planning_and_building_control_services', text: 'Planning & Building Control', icon: faFileContract },
];

/* 8 categories, 2 columns on desktop */
const categoryLinks = [
  { link: '/quantity_surverying', text: 'Quantity Surveying', icon: faHandshake },
  { link: '/contracts_management', text: 'Contracts Management', icon: faCalculator },
  { link: '/snagging_services', text: 'Snagging Works', icon: faUsersCog },
  { link: '/cost_control_value', text: 'Cost Control & Value Engineering', icon: faClipboardList },
  { link: '/contractor_management', text: 'Contractor Management', icon: faBuilding },
  { link: '/quality_management', text: 'Quality Management', icon: faSearchLocation },
  { link: '/commercial_management', text: 'Commercial Management', icon: faChartLine },
  { link: '/project_management', text: 'Project Management', icon: faProjectDiagram },
];

/* Blog: single column */
const blogLinks = [
  { link: 'rear-extension-ideas-from-simplicity-to-architectural-ingenuity', text: 'Rear Extension Ideas' },
  { link: 'the-importance-of-structural-calculations-in-modern-construction-projects', text: 'Structural Calculations' },
  { link: 'structural-integrity-through-meticulous-structural-engineer-calculations-the-pepp-approach', text: 'Structural Engineer Calculations' },
  { link: 'how-planning-drawings-services-can-transform-your-architectural-vision-into-reality', text: 'Planning Drawings' },
  { link: 'project-manager-construction-service-by-pearl-engineers-planners-and-project-managers-(PEPP)', text: 'Project Manager Construction' },
  { link: 'commercial-construction-planning-services-by-pearl-engineers-planners-and-project-managers-(PEPP)', text: 'Commercial Construction Planning' },
  { link: 'commercial-construction-plans-by-pearl-engineers-planners-and-project-managers-(pepp)', text: 'Commercial Construction Plans' },
  { link: 'building-compliance-services-by-pearl-engineers-planners-and-project-managers-(pepp)', text: 'Building Compliance Services' },
  { link: 'independent-building-inspectors-by-pearl-engineers-planners-and-project-managers-(pepp)', text: 'Independent Building Inspectors' },
  { link: 'commercial-architecture-firm-pear-engineers-planners-and-project-managers-(PEPP)', text: 'Commercial Architecture Firm' },
  { link: 'Expert-Architectural-Design-Services-Across-the-UK', text: 'Expert Architectural Design Services Across the UK' },
  { link: 'Exploring-Cutting-Edge-Structural-Engineering-Solutions-for-Complex-Projects', text: 'Exploring Cutting-Edge Structural Engineering Solutions for Complex Projects' },
  { link: 'How-a-Residential-Construction-Project-Manager-Ensures-Successful-Home-Building-Projects?', text: 'How a Residential Construction Project Manager Ensures Successful Home Building Projects?' },
  { link: 'Mastering-Residential-Construction-Project-Management-Essential-Strategies-for-Success', text: 'Residential Construction Project Management' },
  { link: 'Party-Wall-Surveyor-Cost-by-Pearl-Engineers-Planners-and-Project-Manager-(PEPP)', text: 'Party Wall Surveyor Cost' },
  { link: 'Exploring-the-Importance-of-Architecture-Drawing-Plans-in-Modern-Design', text: 'Architecture Drawing Plan' },
  { link: 'Structural-Engineer-London-Services-Ensuring-Safety-and-Innovation-in-Your-Builds', text: 'Structural Engineer London Services' },
  { link: 'Planning-Agent-Services-Explained-What-You-Need-to-Know-for-Effective-Project-Management', text: 'Planning Agent Services' },
  { link: 'Rear-Extensions-Transform-Your-Space-with-Innovative-Design-Solutions', text: 'Rear Extension' },
];

/* For mobile: 2-column layout for Categories */
const leftCategoryLinks = categoryLinks.slice(0, 4);
const rightCategoryLinks = categoryLinks.slice(4);

// Helper function to return a blog icon based on text
const getBlogIcon = (text) => {
  const lowerText = text.toLowerCase();
  if (lowerText.includes('rear extension')) {
    return faBuilding;
  } else if (lowerText.includes('structural engineer') || lowerText.includes('structural')) {
    return faBalanceScale;
  } else if (lowerText.includes('planning')) {
    return faFileContract;
  } else if (lowerText.includes('project manager') || lowerText.includes('project management')) {
    return faProjectDiagram;
  } else if (lowerText.includes('commercial')) {
    return faChartLine;
  } else if (lowerText.includes('building compliance')) {
    return faClipboardList;
  } else if (lowerText.includes('independent building inspectors')) {
    return faSearchLocation;
  } else if (lowerText.includes('architectural')) {
    return faCity;
  } else if (lowerText.includes('residential')) {
    return faBuilding;
  } else {
    return faPen;
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false); // Modal state to control visibility
  const [homePopup, sethomePopup] = useState(false); // Modal state to control visibility


  const sidebarRef = useRef(null);
  const dropdownRef = useRef(null);

  // Use usePathname to track route changes
  const pathname = usePathname();

   // Open modal when the route is /home
   useEffect(() => {
    if (pathname === '/') {
      sethomePopup(true);
    } else {
      sethomePopup(false);
    }
  }, [pathname]);

  // Open modal when the route is /contact
  useEffect(() => {
    if (pathname === '/contact') {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [pathname]);

 

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
        setAboutOpen(false);
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
    setAboutOpen(false);
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

          {/* About Dropdown */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => {
              closeAllDropdowns();
              setAboutOpen(true);
            }}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <Link
              href="#"
              className={
                aboutOpen
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              About ▾
            </Link>
            <ul
              className={
                `${styles.dropdownMenu} 
                ${styles.aboutDropdownMenu} 
                ${aboutOpen ? styles.open : ""}`
              }
            >
              <div className={styles.twoColumnDropdown}>
                <ul>
                  {leftAboutLinks.map((s) => (
                    <li key={s.link} className={styles.dropdownItem}>
                      <Link href={s.link} className={styles.dropdownLink}>
                        <FontAwesomeIcon icon={s.icon} className={styles.icon} />
                        {s.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {rightAboutLinks.map((s) => (
                    <li key={s.link} className={styles.dropdownItem}>
                      <Link href={s.link} className={styles.dropdownLink}>
                        <FontAwesomeIcon icon={s.icon} className={styles.icon} />
                        {s.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ul>
          </li>
          <li><Link href="/#expertise" className={styles.navLink}>Our Expertise</Link></li>

          {/* Services Dropdown */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => {
              closeAllDropdowns();
              setServicesOpen(true);
            }}
            onMouseLeave={() => setServicesOpen(false)}
          >
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
                <p key={s.link} className={styles.dropdownItem}>
                  <Link href={s.link} className={styles.dropdownLink}>
                    <FontAwesomeIcon icon={s.icon} className={styles.icon} />
                    {s.text}
                  </Link>
                </p>
              ))}
            </ul>
          </li>

          {/* Categories Dropdown */}
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

          {/* Blog Dropdown */}
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
              style={{ maxHeight: '400px', overflowY: 'scroll' }}
            >
              {blogLinks.map((b) => (
                <li key={b.link} className={styles.dropdownItem}>
                  <Link href={b.link} className={styles.dropdownLink}>
                    <FontAwesomeIcon icon={getBlogIcon(b.text)} className={styles.icon} />
                    {b.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Other top-level items */}
          <li><Link href="/career" className={styles.navLink}>Career</Link></li>
          <li><Link href="/sustainability" className={styles.navLink}>Sustainability</Link></li>
          <li><Link href="/potfolio" className={styles.navLink}>Portfolio</Link></li>
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

          {/* About mobile dropdown */}
          <li>
            <Link
              href="#"
              onClick={() => setAboutOpen(!aboutOpen)}
              className={styles.navLink}
            >
              About ▾
            </Link>
            {aboutOpen && (
              <ul className={styles.aboutDropdownMenu}>
                {aboutLinks.map((s) => (
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
                      <FontAwesomeIcon icon={getBlogIcon(b.text)} className={styles.icon} />
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
            <Link href="/potfolio" onClick={() => setMenuOpen(false)} className={styles.navLink}>
              Portfolio
            </Link>
          </li>
          {/* // <li>
          //   <Link href="/planning-guidance" onClick={() => setMenuOpen(false)} className={styles.navLink}>
          //     Planning Guidance
          //   </Link>
          // </li> */}
          {/* <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className={styles.navLink}>
              Contact Us
            </Link>
          </li> */}
          <li>
            <Link href="/form" onClick={() => setMenuOpen(false)} className={styles.navLink}>
              Instant Quote
            </Link>
          </li>
        </ul>
      </div>

      {/* Render the modal conditionally */}
      {homePopup && <HomePopup open={homePopup} setOpen={sethomePopup} />}

      {openModal && <ServiceQueryPopup open={openModal} setOpen={setOpenModal} />}
    </div>
  );
};

export default Navbar;