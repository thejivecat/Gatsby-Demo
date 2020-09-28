//Create an about page. include page title and bio.

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h2>About Me</h2>
      <p>Hello, my name is Srujan and I am a Full-Stack software engineer living in Boulder, Colorado. In my free time, I like to play and <br />
        listen to music, usually anything that grooves. I also like to climb on the number of boulders and rock walls we have in the area, <br />
        including Flagstaff, Flatirons, and Boulder Canyon. I also like to ride my mountain bike and road bike. In the winters, I take up <br />
        snowboarding as my main form of activity. It's a fun area to be in!
      </p>
      <p>Need a developer? <Link to="/contact">Contact me!</Link></p>
    </Layout>
  )
}

export default AboutPage