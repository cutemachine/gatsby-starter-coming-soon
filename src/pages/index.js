import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Feature = styled.section`
  background: white;
`

const IndexPage = () => (
  <div>
    <small>Project Name</small>
    <h1>The Perfect Landing Page For Your Project</h1>
    <p>The easiest way to build and host a website for your upcoming project launch.</p>
    <hr />
    <h2>Coming very soon</h2>
    <Feature>
      <ul>
        <li>Works perfectly on any screen size</li>
        <li>Deploy your site with one command</li>
        <li>Use your own domain</li>
        <li>No recurring costs</li>
        <li>Free hosting on Netlify</li>
        <li>Free certificate from Let's Encrypt</li>
      </ul>
    </Feature>
    <hr />
    <p>Email sign-up form to follow</p>
  </div>
)

export default IndexPage
