'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServiceQueryPopup from './servicequerypopup/ServiceQueryPopup';

import {
  faBalanceScale,
  faClipboardList,
  faHardHat,
  faExclamationTriangle,
  faExchangeAlt,
  faTools,
  faHandshake,
  faCity,
  faListOl,
  faUserTie,
  faDraftingCompass,
  faPoundSign,
  faCalculator,
  faBuilding,
  faGavel,
  faRulerCombined,
  faHome,
  faPenRuler,
  faUsersCog,
  faBuildingCircleCheck,
  faSearchPlus,
  faIndustry,
  faFileAlt,
  faUserCheck,
  faDrawPolygon,
  faRulerHorizontal,
  faTrowel,
  faHouseChimney,
  faArrowsAltH,
  faClipboard,
  faImage,
  faBriefcase,
  faChartBar,
  faShieldAlt,
  faCheckDouble,
  faPencilRuler,
  faCogs,
  faWrench,
  faExpandAlt,
  faSearchLocation,
  faChartLine,
  faProjectDiagram,
  faPen,
  faEye,
  faBolt,
  faLightbulb,
  faEnvelope,
  faUsers,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';

/* Submenu items do NOT repeat "Services" in their text */
const aboutLinks = [
  { link: '/about', text: 'About Us', icon: faGavel },
  { link: '/#services', text: 'Our Vision', icon: faEye },
  { link: '/energy-retrofit', text: 'Energy Retrofit Blog', icon: faBolt },
  { link: '/research-blog', text: 'Research Blog', icon: faGavel },
  { link: '/sustainable-structural', text: 'Sustainable Structure', icon: faBalanceScale },
  { link: '/contact', text: 'Contact Us', icon: faEnvelope },
  { link: '/the-importance-hiring', text: 'Importance Of Hiring', icon: faLightbulb },
  { link: '/common-mistake', text: 'Common Mistakes', icon: faFileContract },
  { link: '/future-structure', text: 'Future Structure', icon: faBuilding },
  { link: '/inovative-structure', text: 'Innovative Structural Design', icon: faProjectDiagram },
  { link: '/key-chanlleges', text: 'Key Challenges', icon: faChartLine },
  { link: '/right-structure', text: 'Choosing Right Structural Design', icon: faSearchLocation },
  { link: '/Structural-Design', text: 'Structural Design', icon: faClipboardList },
  { link: '/structure-engineers', text: 'Structural Engineers', icon: faUsersCog },
];

const servicesLinks = [
  { link: '/architectural_services', text: 'Architectural', icon: faCity },
  { link: '/structural_enigneering_services', text: 'Structural Engineering', icon: faBalanceScale },
  { link: '/planning_and_building_control_services', text: 'Planning & Building Control', icon: faFileContract },
  { link: '/bim_coordination_and_asset_ready_as_built_models', text: 'BIM Coordination & Asset-Ready As-Built Models', icon: faProjectDiagram },
];

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

const blogLinks = [
  { link: 'Top-Reasons-to-Hire-an-Engineering-Consultant-for-Your-Project', text: 'Top Reasons to Hire an Engineering Consultant for Your Project', icon: faClipboardList },
  { link: 'Top-Architectural-Trends-Shaping-Bromleys-Skyline', text: 'Top Architectural Trends Shaping Bromley’s Skyline', icon: faCity },
  { link: 'The-Role-of-an-Engineering-Consultant-in-Construction-and-Design', text: 'The Role of an Engineering Consultant in Construction and Design', icon: faProjectDiagram },
  { link: 'Key-Skills-Every-Engineering-Consultant-Should-Have', text: 'Key Skills Every Engineering Consultant Should Have', icon: faLightbulb },
  { link: 'How-to-Choose-the-Right-Engineering-Consultant-for-Your-Business', text: 'How to Choose the Right Engineering Consultant for Your Business', icon: faUserTie },
  { link: 'How-Engineering-Consultants-Improve-Project-Efficiency-and-Cost-Savings', text: 'How Engineering Consultants Improve Project Efficiency and Cost Savings', icon: faChartLine },
  { link: 'The-Future-of-Architectural-Engineering-in-Bromley', text: 'The Future of Architectural Engineering in Bromley', icon: faBuilding },
  { link: 'Finding-the-Best-Architect-Engineer-in-Bromley-A-Complete-Guide', text: 'Finding the Best Architect Engineer in Bromley A Complete Guide', icon: faSearchLocation },
  { link: 'Engineering-Consultant-vs-Full-Time-Engineer-Which-One-Do-You-Need', text: 'Engineering Consultant vs Full Time Engineer Which One Do You Need', icon: faBalanceScale },
  { link: 'Why-You-Need-a-Structural-Engineer-in-London-for-Your-Construction-Project', text: 'Why You Need a Structural Engineer in London for Your Construction Project', icon: faHardHat },
  { link: 'Why-Hiring-a-Local-Structural-Engineer-Near-Me-Matters', text: 'Why Hiring a Local Structural Engineer Near Me Matters', icon: faExclamationTriangle },
  { link: 'What-Is-Planning-and-Building-Control-A-Complete-Guide-for-Homeowners', text: 'What Is Planning and Building Control A Complete Guide for Homeowners', icon: faExchangeAlt },
  { link: 'What-Is-Contractor-Management-A-Complete-Guide-for-Businesses', text: 'What Is Contractor Management? A Complete Guide for Businesses', icon: faTools },
  { link: 'What-Does-an-Engineering-Consultant-Do-A-Comprehensive-Guide', text: 'What Does an Engineering Consultant Do? A Comprehensive Guide', icon: faHandshake },
  { link: 'Top-Reasons-You-Need-a-Structural-Engineer-Near-Me-for-Your-Project', text: 'Top Reasons You Need a Structural Engineer Near Me for Your Project', icon: faCity },
  { link: 'The-Role-of-Quantity-Surveying-in-Bromley-Growing-Construction-Industry', text: 'The Role of Quantity Surveying in Bromley Growing Construction Industry', icon: faListOl },
  { link: 'The-Role-of-a-Structural-Engineer-in-London-Urban-Development', text: 'The Role of a Structural Engineer in London Urban Development', icon: faUserTie },
  { link: 'The-Future-of-Structural-Engineering-in-London-Trends-and-Innovations', text: 'How Much Does an Architect Engineer in Bromley Cost?', icon: faDraftingCompass },
  { link: 'The-Benefits-of-Working-with-a-Structural-Engineer-Near-Me', text: 'The Benefits of Working with a Structural Engineer Near Me', icon: faPoundSign },
  { link: 'Structural-Engineering-Challenges-and-Solutions-in-London', text: 'Structural Engineering Challenges and Solutions in London', icon: faCalculator },
  { link: 'Structural-Engineer-vs-Architect-in-London-Who-Do-You-Need', text: 'Structural Engineer vs. Architect in London: Who Do You Need', icon: faBuilding },
  { link: 'Signs-That-You-Need-a-Structural-Engineer-Near-Me', text: 'Signs That You Need a Structural Engineer Near Me', icon: faGavel },
  { link: 'Key-Factors-to-Consider-When-Hiring-a-Structural-Engineer-in-London', text: 'Key Factors to Consider When Hiring a Structural Engineer in London | PEPP', icon: faRulerCombined },
  { link: 'How-Structural-Engineers-in-London-Ensure-Safe-and-Sustainable-Buildings', text: 'How Structural Engineers in London Ensure Safe and Sustainable Buildings | PEPP', icon: faHome },
  { link: 'How-Much-Does-an-Architect-Engineer-in-Bromley-Cost', text: 'How Much Does an Architect Engineer in Bromley Cost? | PEPP', icon: faRulerCombined },
  { link: 'How-Much-Does-a-Structural-Engineer-in-London-Cost', text: 'How Much Does a Structural Engineer in London Cost | PEPP', icon: faPenRuler },
  { link: 'How-Cost-Control-and-Value-Engineering-Benefit-Construction-Projects-in-Bromley', text: 'How Cost Control and Value Engineering Benefit Construction Projects in Bromley', icon: faUsersCog },
  { link: 'How-a-Structural-Engineer-Near-Me-Can-Save-You-Time-and-Money', text: 'How a Structural Engineer Near Me Can Save You Time and Money? | PEPP', icon: faBuildingCircleCheck },
  { link: 'Front-and-Rear-Extension', text: 'Front and Rear Extension: Maximizing Your Buildings Space and Value', icon: faSearchPlus },
  { link: 'Finding-the-Best-Structural-Engineer-in-London-A-Complete-Guide', text: 'What Is Architect Surveying a Comprehensive Guide', icon: faIndustry },
  { link: 'Finding-a-Reliable-Structural-Engineer-Near-Me-What-to-Look-For', text: 'Finding a Reliable Structural Engineer Near Me: What to Look For', icon: faFileAlt },
  { link: 'structuralengineerlondonservices', text: 'Cost of Hiring a Consultant Engineer in Bromley: What to Expect', icon: faUserCheck },
  { link: 'Cost-Control-vs-Value-Engineering-Understanding-the-Key-Differences', text: 'Cost Control vs. Value Engineering: Understanding the Key Differences', icon: faDrawPolygon },
  { link: 'Choosing-the-Right-Structural-Design-Engineer-in-Bromley-London-A-Guide', text: 'Choosing the Right Structural Design Engineer in Bromley, London: A Guide', icon: faRulerHorizontal },
  { link: 'How-to-Find-the-Best-Structural-Engineer-Near-Me-A-Complete-Guide', text: 'How to Find the Best Structural Engineer Near Me: A Complete Guide?', icon: faTrowel },
  { link: 'A-Guide-to-Planning-and-Building-Control-in-Bromley-What-You-Need-to-Know', text: 'A Guide to Planning and Building Control in Bromley: What You Need to Know', icon: faHouseChimney },
  { link: 'rear-extension-ideas-from-simplicity-to-architectural-ingenuity', text: 'Rear Extension Ideas', icon: faArrowsAltH },
  { link: 'the-importance-of-structural-calculations-in-modern-construction-projects', text: 'Structural Calculations', icon: faClipboard },
  { link: 'structural-integrity-through-meticulous-structural-engineer-calculations-the-pepp-approach', text: 'Structural Engineer Calculations', icon: faCalculator },
  { link: 'how-planning-drawings-services-can-transform-your-architectural-vision-into-reality', text: 'Planning Drawings', icon: faImage },
  { link: 'project-manager-construction-service-by-pearl-engineers-planners-and-project-managers-(PEPP)', text: 'Project Manager Construction', icon: faBriefcase },
  { link: 'commercial-construction-planning-services-by-pearl-engineers-planners-and-project-managers-(PEPP)', text: 'Commercial Construction Planning', icon: faChartBar },
  { link: 'commercial-construction-plans-by-pearl-engineers-planners-and-project-managers-(pepp)', text: 'Commercial Construction Plans', icon: faClipboardList },
  { link: 'building-compliance-services-by-pearl-engineers-planners-and-project-managers-(pepp)', text: 'Building Compliance Services', icon: faShieldAlt },
  { link: 'independent-building-inspectors-by-pearl-engineers-planners-and-project-managers-(pepp)', text: 'Independent Building Inspectors', icon: faCheckDouble },
  { link: 'commercial-architecture-firm-pear-engineers-planners-and-project-managers-(PEPP)', text: 'Commercial Architecture Firm', icon: faBuilding },
  { link: 'Expert-Architectural-Design-Services-Across-the-UK', text: 'Expert Architectural Design Services Across the UK', icon: faPencilRuler },
  { link: 'Exploring-Cutting-Edge-Structural-Engineering-Solutions-for-Complex-Projects', text: 'Exploring Cutting-Edge Structural Engineering Solutions for Complex Projects', icon: faCogs },
  { link: 'How-a-Residential-Construction-Project-Manager-Ensures-Successful-Home-Building-Projects?', text: 'How a Residential Construction Project Manager Ensures Successful Home Building Projects?', icon: faHome },
  { link: 'Mastering-Residential-Construction-Project-Management-Essential-Strategies-for-Success', text: 'Residential Construction Project Management', icon: faClipboard },
  { link: 'Party-Wall-Surveyor-Cost-by-Pearl-Engineers-Planners-and-project-manager-(PEPP)', text: 'Party Wall Surveyor Cost', icon: faUsers },
  { link: 'Exploring-the-Importance-of-Architecture-Drawing-Plans-in-Modern-Design', text: 'Architecture Drawing Plan', icon: faDraftingCompass },
  { link: 'Structural-Engineer-London-Services-Ensuring-Safety-and-Innovation-in-Your-Builds', text: 'Structural Engineer London Services', icon: faWrench },
  { link: 'Planning-Agent-Services-Explained-What-You-Need-to-Know-for-Effective-Project-Management', text: 'Planning Agent Services', icon: faUserTie },
  { link: 'Rear-Extensions-Transform-Your-Space-with-Innovative-Design-Solutions', text: 'Rear Extension', icon: faExpandAlt },
];

const getBlogIcon = (text) => {
  const lowerText = text.toLowerCase();
  const found = blogLinks.find((item) => item.text.toLowerCase() === lowerText);
  return found ? found.icon : faPen;
};

const Navbar = () => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const sidebarRef = useRef(null);
  const dropdownRef = useRef(null);

  // ✅ store videos to resume (fixes iOS "Muted" overlay by pausing video when menu opens)
  const videosToResumeRef = useRef([]);

  // ticker
  const names = [
    'Download the PEPP Mobile App — streamline your construction projects, manage your teams, and access site updates on the go.',
  ];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % names.length);
        setAnimate(true);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, [names.length]);

  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setAboutOpen(false);
    setCategoriesOpen(false);
    setBlogOpen(false);
  };

  // Keep UI sane on route change
  useEffect(() => {
    setMenuOpen(false);
    closeAllDropdowns();
  }, [pathname]);

  // Contact modal route
  useEffect(() => {
    setOpenModal(pathname === '/contact');
  }, [pathname]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    document.body.classList.toggle('nav-open', menuOpen);

    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('nav-open');
    };
  }, [menuOpen]);

// ✅ iOS/Safari: pause videos when menu opens so the "Muted" overlay disappears
  useEffect(() => {
    if (!menuOpen) {
      // resume only those that were playing (optional)
      try {
        videosToResumeRef.current.forEach((v) => {
          if (v && typeof v.play === 'function') v.play().catch(() => {});
        });
      } catch (_) {}
      videosToResumeRef.current = [];
      return;
    }

    // menuOpen === true
    try {
      const vids = Array.from(document.querySelectorAll('video'));
      const resumeList = [];

      vids.forEach((v) => {
        const wasPlaying = v && !v.paused && !v.ended && v.readyState > 2;
        if (wasPlaying) resumeList.push(v);
        try {
          v.pause();
        } catch (_) {}
      });

      videosToResumeRef.current = resumeList;
    } catch (_) {
      videosToResumeRef.current = [];
    }
  }, [menuOpen]);

  // Close on outside click (desktop + mobile)
  useEffect(() => {
    const handleClickOutside = (e) => {
      const sidebar = sidebarRef.current;
      const nav = dropdownRef.current;

      if ((sidebar && sidebar.contains(e.target)) || (nav && nav.contains(e.target))) return;

      setMenuOpen(false);
      closeAllDropdowns();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTickerClick = () => {
    window.location.href = 'https://apps.apple.com/us/app/pepp/id6503652490';
  };

  // ✅ Mobile: open one accordion at a time (clean UX)
  const toggleMobileGroup = (key) => {
    if (key === 'about') {
      setAboutOpen((v) => !v);
      setServicesOpen(false);
      setCategoriesOpen(false);
      setBlogOpen(false);
      return;
    }
    if (key === 'services') {
      setServicesOpen((v) => !v);
      setAboutOpen(false);
      setCategoriesOpen(false);
      setBlogOpen(false);
      return;
    }
    if (key === 'categories') {
      setCategoriesOpen((v) => !v);
      setAboutOpen(false);
      setServicesOpen(false);
      setBlogOpen(false);
      return;
    }
    if (key === 'blog') {
      setBlogOpen((v) => !v);
      setAboutOpen(false);
      setServicesOpen(false);
      setCategoriesOpen(false);
    }
  };

  return (
    <header className={styles.headerWrap}>
      {/* Top announcement bar */}
      <div className={styles.topbar} role="banner">
        <div className={styles.topbarInner}>
          <div
            className={`${styles.ticker} ${animate ? styles.slideIn : styles.slideOut}`}
            onClick={handleTickerClick}
            role="button"
            tabIndex={0}
          >
            <span className={styles.tickerDot} />
            <span className={styles.tickerText}>{names[index]}</span>
            <span className={styles.tickerCta}>Open App Store →</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={styles.navbar} ref={dropdownRef}>
        <div className={styles.navLeft}>
          <Link href="/" className={styles.logo} onClick={() => closeAllDropdowns()}>
            <img src="/pearl.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className={styles.menu}>
          <li><Link href="/" className={styles.navLink}>Home</Link></li>

          {/* About */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => { closeAllDropdowns(); setAboutOpen(true); }}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              type="button"
              className={`${styles.navBtn} ${aboutOpen ? styles.activeLink : ''}`}
              onClick={() => { closeAllDropdowns(); setAboutOpen((v) => !v); }}
            >
              About <span className={styles.caret}>▾</span>
            </button>

            <div className={`${styles.dropdownPanel} ${aboutOpen ? styles.open : ''}`}>
              <div className={styles.panelHeader}>
                <div>
                  <div className={styles.panelTitle}>About</div>
                  <div className={styles.panelSub}>Company, vision & resources</div>
                </div>
              </div>

              <div className={styles.twoCol}>
                <ul>
                  {aboutLinks.slice(0, Math.ceil(aboutLinks.length / 2)).map((s) => (
                    <li key={s.link}>
                      <Link href={s.link} className={styles.ddLink} onClick={() => setAboutOpen(false)}>
                        <span className={styles.ddIcon}><FontAwesomeIcon icon={s.icon} /></span>
                        <span className={styles.ddText}>{s.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {aboutLinks.slice(Math.ceil(aboutLinks.length / 2)).map((s) => (
                    <li key={s.link}>
                      <Link href={s.link} className={styles.ddLink} onClick={() => setAboutOpen(false)}>
                        <span className={styles.ddIcon}><FontAwesomeIcon icon={s.icon} /></span>
                        <span className={styles.ddText}>{s.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          <li><Link href="/#expertise" className={styles.navLink}>Our Expertise</Link></li>

          {/* Services */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => { closeAllDropdowns(); setServicesOpen(true); }}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`${styles.navBtn} ${servicesOpen ? styles.activeLink : ''}`}
              onClick={() => { closeAllDropdowns(); setServicesOpen((v) => !v); }}
            >
              Services <span className={styles.caret}>▾</span>
            </button>

            <div className={`${styles.dropdownPanel} ${servicesOpen ? styles.open : ''}`}>
              <div className={styles.panelHeader}>
                <div>
                  <div className={styles.panelTitle}>Services</div>
                  <div className={styles.panelSub}>Architecture, structure & compliance</div>
                </div>
              </div>

              <ul className={styles.oneCol}>
                {servicesLinks.map((s) => (
                  <li key={s.link}>
                    <Link href={s.link} className={styles.ddLink} onClick={() => setServicesOpen(false)}>
                      <span className={styles.ddIcon}><FontAwesomeIcon icon={s.icon} /></span>
                      <span className={styles.ddText}>{s.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Categories */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => { closeAllDropdowns(); setCategoriesOpen(true); }}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button
              type="button"
              className={`${styles.navBtn} ${categoriesOpen ? styles.activeLink : ''}`}
              onClick={() => { closeAllDropdowns(); setCategoriesOpen((v) => !v); }}
            >
              Categories <span className={styles.caret}>▾</span>
            </button>

            <div className={`${styles.dropdownPanel} ${categoriesOpen ? styles.open : ''}`}>
              <div className={styles.panelHeader}>
                <div>
                  <div className={styles.panelTitle}>Categories</div>
                  <div className={styles.panelSub}>Management & surveying</div>
                </div>
              </div>

              <div className={styles.twoCol}>
                <ul>
                  {categoryLinks.slice(0, 4).map((cat) => (
                    <li key={cat.link}>
                      <Link href={cat.link} className={styles.ddLink} onClick={() => setCategoriesOpen(false)}>
                        <span className={styles.ddIcon}><FontAwesomeIcon icon={cat.icon} /></span>
                        <span className={styles.ddText}>{cat.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {categoryLinks.slice(4).map((cat) => (
                    <li key={cat.link}>
                      <Link href={cat.link} className={styles.ddLink} onClick={() => setCategoriesOpen(false)}>
                        <span className={styles.ddIcon}><FontAwesomeIcon icon={cat.icon} /></span>
                        <span className={styles.ddText}>{cat.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          {/* Blog */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => { closeAllDropdowns(); setBlogOpen(true); }}
            onMouseLeave={() => setBlogOpen(false)}
          >
            <button
              type="button"
              className={`${styles.navBtn} ${blogOpen ? styles.activeLink : ''}`}
              onClick={() => { closeAllDropdowns(); setBlogOpen((v) => !v); }}
            >
              Blog <span className={styles.caret}>▾</span>
            </button>

            <div className={`${styles.dropdownPanel} ${blogOpen ? styles.open : ''}`}>
              <div className={styles.panelHeader}>
                <div>
                  <div className={styles.panelTitle}>Blog</div>
                  <div className={styles.panelSub}>Latest guides & insights</div>
                </div>
              </div>

              <ul className={styles.blogList}>
                {blogLinks.map((b) => (
                  <li key={b.link}>
                    <Link href={`/${b.link}`} className={styles.ddLink} onClick={() => setBlogOpen(false)}>
                      <span className={styles.ddIcon}><FontAwesomeIcon icon={getBlogIcon(b.text)} /></span>
                      <span className={styles.ddText}>{b.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li><Link href="/career" className={styles.navLink}>Career</Link></li>
          <li><Link href="/sustainability" className={styles.navLink}>Sustainability</Link></li>
          <li><Link href="/potfolio" className={styles.navLink}>Portfolio</Link></li>

          <li className={styles.ctaWrap}>
            <Link href="/form" className={styles.ctaBtn}>Instant Quote</Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={styles.hamburger}
          aria-label="Open menu"
          onClick={() => { closeAllDropdowns(); setMenuOpen((v) => !v); }}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Backdrop */}
      <div className={`${styles.backdrop} ${menuOpen ? styles.show : ''}`} onClick={() => setMenuOpen(false)} />

      {/* Mobile Sidebar */}
      <aside className={`${styles.sidebar} ${menuOpen ? styles.open : ''}`} ref={sidebarRef}>
        <div className={styles.sidebarTop}>
          <div className={styles.sidebarTitle}>Menu</div>
          <button className={styles.closeBtn} onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        </div>

        <div className={styles.sidebarContent}>
          <Link href="/" className={styles.sideLink} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/#expertise" className={styles.sideLink} onClick={() => setMenuOpen(false)}>Our Expertise</Link>
          <Link href="/career" className={styles.sideLink} onClick={() => setMenuOpen(false)}>Career</Link>
          <Link href="/sustainability" className={styles.sideLink} onClick={() => setMenuOpen(false)}>Sustainability</Link>
          <Link href="/potfolio" className={styles.sideLink} onClick={() => setMenuOpen(false)}>Portfolio</Link>

          <div className={styles.sideGroup}>
            <button className={styles.sideGroupBtn} onClick={() => toggleMobileGroup('about')}>
              <span>About</span>
              <span className={styles.sideCaret}>{aboutOpen ? '▴' : '▾'}</span>
            </button>
            {aboutOpen && (
              <div className={styles.sideGroupPanel}>
                {aboutLinks.map((s) => (
                  <Link key={s.link} href={s.link} className={styles.sideDD} onClick={() => setMenuOpen(false)}>
                    <span className={styles.ddIcon}><FontAwesomeIcon icon={s.icon} /></span>
                    {s.text}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className={styles.sideGroup}>
            <button className={styles.sideGroupBtn} onClick={() => toggleMobileGroup('services')}>
              <span>Services</span>
              <span className={styles.sideCaret}>{servicesOpen ? '▴' : '▾'}</span>
            </button>
            {servicesOpen && (
              <div className={styles.sideGroupPanel}>
                {servicesLinks.map((s) => (
                  <Link key={s.link} href={s.link} className={styles.sideDD} onClick={() => setMenuOpen(false)}>
                    <span className={styles.ddIcon}><FontAwesomeIcon icon={s.icon} /></span>
                    {s.text}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className={styles.sideGroup}>
            <button className={styles.sideGroupBtn} onClick={() => toggleMobileGroup('categories')}>
              <span>Categories</span>
              <span className={styles.sideCaret}>{categoriesOpen ? '▴' : '▾'}</span>
            </button>
            {categoriesOpen && (
              <div className={styles.sideGroupPanelTwoCol}>
                <div>
                  {categoryLinks.slice(0, 4).map((cat) => (
                    <Link key={cat.link} href={cat.link} className={styles.sideDD} onClick={() => setMenuOpen(false)}>
                      <span className={styles.ddIcon}><FontAwesomeIcon icon={cat.icon} /></span>
                      {cat.text}
                    </Link>
                  ))}
                </div>
                <div>
                  {categoryLinks.slice(4).map((cat) => (
                    <Link key={cat.link} href={cat.link} className={styles.sideDD} onClick={() => setMenuOpen(false)}>
                      <span className={styles.ddIcon}><FontAwesomeIcon icon={cat.icon} /></span>
                      {cat.text}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={styles.sideGroup}>
            <button className={styles.sideGroupBtn} onClick={() => toggleMobileGroup('blog')}>
              <span>Blog</span>
              <span className={styles.sideCaret}>{blogOpen ? '▴' : '▾'}</span>
            </button>
            {blogOpen && (
              <div className={styles.sideGroupPanel}>
                {blogLinks.map((b) => (
                  <Link key={b.link} href={`/${b.link}`} className={styles.sideDD} onClick={() => setMenuOpen(false)}>
                    <span className={styles.ddIcon}><FontAwesomeIcon icon={getBlogIcon(b.text)} /></span>
                    {b.text}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/form" className={styles.sideCta} onClick={() => setMenuOpen(false)}>
            Instant Quote
          </Link>
        </div>
      </aside>

      {openModal && <ServiceQueryPopup open={openModal} setOpen={setOpenModal} />}
    </header>
  );
};

export default Navbar;
