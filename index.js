const app = require('express')()
const http = require('http').Server(app)
const socket = require('./socket')

const host = '0.0.0.0'
const port = process.env.PORT || 5000

app.set('port', port)
socket.begin(http)
http.listen(port, host)

console.log('Server listening on ' + host + ':' + port)
