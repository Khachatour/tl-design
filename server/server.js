const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const Todo = require('./models').Todo
const app = express()
const dev = app.get('env') !== 'production'

const rootFolder = path.join(__dirname, '/../build')

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

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

app.post('/api/todos', (req, res) => {
  return Todo.create({
    title: req.body.title
  })
    .then(todo => res.status(201).send(todo))
    .catch(error => res.status(400).send(error))
})

module.exports = app
