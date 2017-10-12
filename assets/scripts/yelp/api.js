const config = require('../config')
const store = require('../store')

const getYelpResults = function () {
  return $.ajax({
    url: config.apiOrigin + '/yelpresults',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getYelpResults
}
