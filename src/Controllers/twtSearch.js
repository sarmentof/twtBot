const Twitter = require('../Config/twtConf')

 function trackError (err, data, response) {
    console.log(err)
}

let params = { q: '#Flamengo', result_type: 'recent' }

Twitter.get('search/tweets', params, function (err, data) {
    if (!err) {
        console.log(data)
    }else {
        console.log('Error during tweet search call', err);
    }
})
