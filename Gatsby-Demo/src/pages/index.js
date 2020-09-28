import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <div>
      <Header/>
      <h2>I'm Srujan, a Full-Stack developer living in Boulder, Colorado.</h2>
      {/* <p>Need a freelance developer? <a href="/contact">Contact me!</a></p>  */}
      <p>Want to learn more <Link to="/about">about me?</Link></p>
      <Footer/>
    </div>
  )
}

//2 ways to link to other pages, use Link from more customization and faster load times!

export default IndexPage
