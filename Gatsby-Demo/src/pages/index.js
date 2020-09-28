import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <h1>Gatsby Demo</h1>
      <h2>I'm Srujan, a Full-Stack developer living in Boulder, Colorado.</h2>
      {/* <p>Need a freelance developer? <a href="/contact">Contact me!</a></p>  */}
      <p>Want to learn more <Link to="/about">about me?</Link></p>
    </div>
  )
}
//2 ways to link to other pages, use Link from more customization and faster load times!
export default IndexPage
