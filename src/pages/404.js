import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'

class NotFoundPage extends Component {
  render () {
    return (
      <div className='about-container'>
        <Helmet>
          <title>{`404 | ${config.siteTitle}`}</title>
          <meta name='description' content='404 page' />
        </Helmet>
        <p>Sorry, I could not find the resource you are looking for.</p>
      </div>
    )
  }
}

export default NotFoundPage
