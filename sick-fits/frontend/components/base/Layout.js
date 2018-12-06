import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Meta from 'components/base/Meta'
import Header from 'components/base/Header'
import Footer from 'components/base/Footer'
import styler from 'components/styles/Global'

const Layout = props => {
  const { styles } = styler(props)
  const { children } = props

  return (
    <Fragment>
      {styles}
      <Meta />
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
