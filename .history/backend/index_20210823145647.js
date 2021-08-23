const app = require('./server') 
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)
console.log("hello");
server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})