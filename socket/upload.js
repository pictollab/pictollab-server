const axios = require('axios')
const time = require('../utils/time')

module.exports = function (io, socket, data) {
  data.timestamp.server = time.now()

  axios.post(`https://${ process.env.LOG_ENDPOINT }.localtunnel.me/log/server/event`, {
    id: socket.id,
    event: data
  }).then(function (res) {
    // console.log(res);
  })
  .catch(function (err) {
    // console.log(err);
  })
}
