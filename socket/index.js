const socket = require('socket.io')

const disconnect = require('./disconnect')
const event = require('./event')
const upload = require('./upload')
const register = require('./register')

let io

module.exports = {
  begin (http) {
    io = socket(http)

    io.on('connection', (socket) => {
      socket.emit('SET_ID', socket.id)

      socket.on('register', (data) => {
        register(io, socket, data)
      })

      socket.on('event', (data) => {
        event(io, socket, data)
      })

      socket.on('disconnect', (data) => {
        disconnect(io, socket, data)
      })

      socket.on('upload', (data) => {
        upload(io, socket, data)
      })
    })
  }
}
