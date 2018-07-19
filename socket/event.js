const axios = require('axios')

module.exports = function (io, socket, data) {
  console.log(data)

  axios.post(`https://${ process.env.LOG_ENDPOINT }.localtunnel.me/log/user/event`, data)
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });
}
