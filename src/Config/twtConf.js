require('dotenv/config')
const twit = require('twit')

const Twitter = new twit ({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
    timeout_ms: 60*1000,
    strictSSL: false
    })

function trackError (err, data, response) {
    console.log(err)
}

module.exports = Twitter
