const axios = require('axios')

module.exports = function (io, socket, data) {
  console.log(data)

  axios.post('https://cowardly-quail-63.localtunnel.me/log/user', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
