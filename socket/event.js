const http = require('http')

module.exports = function (io, socket, data) {
  const bodyString = JSON.stringify(data)

  const headers = {
      'Content-Type': 'application/json',
      'Content-Length': bodyString.length
  }

  const options = {
      host: 'https://pictollab.localtunnel.me',
      path: '/log/user',
      port: 8080,
      method: 'PUT',
      headers: headers
  }

  http.request(options, () => {}).write(bodyString)
}
