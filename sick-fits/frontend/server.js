const express = require('express')
const next = require('next')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

/**
 * Handle Routes
 */
const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query)
})

/**
 * Initialization
 */
app.prepare().then(() => {
  const server = express()
  server.use(handler)
  server.get('*', (req, res) => handle(req, res))
  server.listen(7777, err => {
    if (err) throw err
  })
})
