const Twitter = require('../config/twtConf')
const params = { q: '@metro_rio', result_type: 'recent' }

Twitter.get('search/tweets', params, function (err, data) {
  if (!err) {
    console.log(data)
  } else {
    console.log('Error during tweet search call', err)
  }
})
