const request = require('request')

module.exports = function (io, socket, data) {
  request({
    url: 'pictollab.localtunnel.me/log/user',
    method: 'POST',
    json: data
  })
}
