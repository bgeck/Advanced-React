import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
  const { children } = props
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Layout
