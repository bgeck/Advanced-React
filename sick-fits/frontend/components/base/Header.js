import React from 'react'
import PropTypes from 'prop-types'
import styler from 'components/base/styles/Header'

const Header = props => {
  const { className, styles } = styler(props)

  return (
    <header className={className}>
      {styles}
      Header
    </header>
  )
}

Header.propTypes = {}

export default Header
