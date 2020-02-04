require('dotenv/config')
const twit = require('twit')


const Twitter = new twit ({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
    timeout_ms: process.env.timeout_ms,
    strictSSL: process.env.strictSSL
    })

function trackError (err, data, response) {
    console.log(err)
}

module.exports = Twitter