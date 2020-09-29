import React from 'react'
import { Link } from 'gatsby'
// import './header.module.scss' AFFECTS ALL COMPONENTS- these styles are not scoped to this component
import headerStyles from './header.module.scss' //scopes styles to be applied directly to component

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Gatsby Demo
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home Page</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About Me</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact Me</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
          </li>
        </ul>
        
      </nav>
    </header>
  )
}

export default Header