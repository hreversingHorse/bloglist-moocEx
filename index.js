const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const PORT = require('./utils/config')


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})