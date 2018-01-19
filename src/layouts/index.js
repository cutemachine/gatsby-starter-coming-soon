import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import config from '../../data/SiteConfig'
import theme from '../theme'
import './index.css'

// A layout with no header and footer; perfect for landing pages.
export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <title>{`${config.projectName} | ${config.siteTitle}`}</title>
        <meta name='description' content={config.siteDescription} />
      </Helmet>
      {children()}
    </div>
  </ThemeProvider>
)
