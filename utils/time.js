const START_TIME = Date.now()

module.exports = {
  now () { return Date.now() - START_TIME },
  today () { return new Date().toDateString() }
}
