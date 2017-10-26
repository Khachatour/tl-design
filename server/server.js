const { createServer } = require('http')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
const router = express.Router()

const normalizePort = port => parseInt(port, 10)

const PORT = normalizePort(process.env.PORT || 5000)

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

  router.route('/portoflios').get((req, res) => {
    res.send('hellow from api')
  })
  app.get('/', (req, res) => {
    res.send('Hello Worldination!')
  })

  app.get('/portoflios3000', (req, res) => {
    res.send('Hello World!')
  })
  app.use('/api', router)
}

const server = createServer(app)

server.listen(PORT, err => {
  if (err) throw err
  console.warn('Server started, and listening on' + PORT + 'port')
})
