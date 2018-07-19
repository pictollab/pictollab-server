const axios = require('axios')

module.exports = function (io, socket) {
  axios.post(`https://${ process.env.LOG_ENDPOINT }.localtunnel.me/log/server/connect`, {
    id: socket.id,
    event: {
      type: 'user/connect',
      data: null,
      timestamp: time.now()
    }
  }).then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  })
}
