module.exports = function (io, socket, data) {
  console.log(data)

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
