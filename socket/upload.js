const axios = require('axios')
const time = require('../utils/time')

module.exports = function (io, socket, data) {
  const { type, timestamp } = data
  console.log(type, timestamp)
  // axios.post(`https://${ process.env.LOG_ENDPOINT }.localtunnel.me/log/server/event`, {
  //   id: socket.id,
  //   event: {
  //     timestamp: {
  //       client: data.timestamp.client,
  //       server: Date.now()
  //     }
  //   }
  // }).then(function (res) {
  //   // console.log(res);
  // })
  // .catch(function (err) {
  //   // console.log(err);
  // })
}
