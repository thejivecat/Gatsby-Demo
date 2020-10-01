//Create contact page. Include page title and contact details (fake obviously, can't have people bombing my number)

import React from 'react'
import Head from '../components/head'

import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact Details</h2>
      <p>Name: Srujan Bethi<br />
        Phone: 202-456-1111<br />
        Email: fakeemail@fakemail.com<br />
        Address: <br />The White House<br />
                1600 Pennsylvania Avenue NW<br />
                Washington, DC 20500
      </p>
      <p>Link to github: <a href="https://github.com/thejivecat" target="_blank" rel="noreferrer">https://github.com/thejivecat</a></p>
    </Layout>
  )
}

export default ContactPage