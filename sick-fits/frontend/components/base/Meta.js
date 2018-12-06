import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Meta = props => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.png" />
      <title>Portals 2</title>
    </Head>
  )
}

Meta.propTypes = {}

export default Meta
