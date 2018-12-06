import React from 'react'
import PropTypes from 'prop-types'
import styler from 'components/base/styles/Footer'

const Footer = props => {
  const { className, styles } = styler(props)

  return (
    <footer className={className}>
      {styles}
      Footer
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
