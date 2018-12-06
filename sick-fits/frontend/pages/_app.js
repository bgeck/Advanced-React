import React from 'react'
import PropTypes from 'prop-types'
import App, { Container } from 'next/app'
import Layout from '../components/Layout'

export default class Portal extends App {
  render() {
    const { Component } = this.props
    return (
      <Container>
        <Layout>
          <Component />
        </Layout>
      </Container>
    )
  }
}

Portal.propTypes = {
  Component: PropTypes.func.isRequired,
}
