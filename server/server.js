const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
const router = express.Router()

const app = express()
const dev = app.get('env') !== 'production'

const rootFolder = path.join(__dirname, '/../build')

if (!dev) {
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))
  app.use(express.static(path.resolve(rootFolder)))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(rootFolder, 'index.html'))
  })
}

if (dev) {
  app.use(morgan('dev'))
}

app.get('/', (req, res) => {
  res.send('Hello Worldination!')
})

app.get('/portoflios3000', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', router)

module.exports = app
