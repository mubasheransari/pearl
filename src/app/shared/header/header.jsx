'use client'
import React from 'react'
import style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className={style.header}>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
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
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Our Capabilities</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
