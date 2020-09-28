import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <div>
      <h1>Gatsby Demo</h1>
      <nav>
      <Link to="/">Home Page</Link> <Link to="/about">About Me</Link> <Link to="/contact">Contact Me</Link> <Link to="/blog">Blog</Link>
      </nav>
    </div>
  )
}

export default Header