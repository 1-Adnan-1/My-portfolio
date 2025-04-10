import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faEnvelope,
  faHome,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="toggle-icon" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} color="#ffd700" />
      </div>

      <div className={`nav-bar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src={logoSubtitle} alt="logo" />
        </div>
        <nav>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="work-link"
            to="/work"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/adnansamialt%C4%B1nta%C5%9F/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/1-Adnan-1"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/adnan.altns/"
            >
              <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://x.com/1ADnanSAmi1"
            >
              <FontAwesomeIcon icon={faXTwitter} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
