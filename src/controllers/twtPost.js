/* eslint-disable handle-callback-err */
const Twitter = require('../config/twtConf')

Twitter.post('statuses/update', { status: 'Hello World!' },
  function (err, data, response) {
    console.log(data)
  }
)
