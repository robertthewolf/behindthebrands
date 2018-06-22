import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ location, children }) => (
  <div>
    <Helmet defaultTitle={`Behind The Brands`} titleTemplate={`%s | Behind The Brands`}>
      <html lang="en" />
      <meta name="description" content="" />
    </Helmet>
    <Navbar zh={location.pathname.includes('/zh')} location={location}/>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
