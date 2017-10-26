function routes (app) {
  app.use('/api/portfolios', require('./api/portfolio'))
}

module.exports = routes
