require('dotenv/config')
let twit = require('twit')


 Twitter.post('statuses/update', { status: 'Hello World!' }, function(err, data, response) {
    console.log(data)
 })