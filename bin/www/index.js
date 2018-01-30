const { createServer } = require('http')
const app = require('../../server/server.js')
const normalizePort = port => parseInt(port, 10)

const PORT = normalizePort(process.env.PORT || 5000)

const server = createServer(app)

server.listen(PORT, err => {
  if (err) throw err
  console.warn('Server started, and listening on' + PORT + 'port')
})
