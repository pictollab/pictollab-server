const app = require('express')()
const http = require('http').Server(app)

const host = '0.0.0.0'
const port = process.env.PORT || 3000

app.set('port', port)
http.listen(port, host)

console.log('Server listening on ' + host + ':' + port)
