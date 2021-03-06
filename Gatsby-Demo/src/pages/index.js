import React from 'react'
import { Link } from 'gatsby'

import '../styles/index.scss'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h4>I'm Srujan, a Full-Stack developer living in Boulder, Colorado.</h4>
      {/* <p>Need a freelance developer? <a href="/contact">Contact me!</a></p>  */}
      <p>Want to learn more <Link to="/about">about me?</Link></p>
    </Layout>
  )
}

//2 ways to link to other pages, use Link from more customization and faster load times!

export default IndexPage
