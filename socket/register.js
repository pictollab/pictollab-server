const axios = require('axios')
const time = require('../utils/time')

module.exports = function (io, socket, data) {
  axios.post(`https://${ process.env.LOG_ENDPOINT }.localtunnel.me/log/user/register`, {
    id: socket.id,
    event: {
      type: 'user/register',
      data: null,
      timestamp: time.now()
    }
  }).then(function (res) {
    // console.log(res);
  })
  .catch(function (err) {
    // console.log(err);
  })
}
