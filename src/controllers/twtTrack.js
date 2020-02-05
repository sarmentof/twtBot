const Twitter = require('../config/twtConf')

function trackError (err, data, response) {
  console.log(err)
}

const stream = Twitter.stream(
  'statuses/filter',
  { track: '@metro_rio' },
  trackError
)

stream.on('tweet', tweet => {
  // console.log(tweet)
  // console.log('Localization: ', tweet.user)
  console.log('===============================')
  console.log('>> Real Name: ', tweet.user.name)
  console.log('>> User Name: ', tweet.user.screen_name)
  console.log(">> Location: ", tweet.user.location)
  console.log('>> ')
  console.log('>> Followers: ', tweet.user.followers_count)
  console.log('>> Following: ', tweet.user.friends_count)
  console.log('>> ')
  console.log('>> Profile Pic: ', tweet.user.profile_image_url_https)
  console.log('>> ')
  console.log('>> Tweet: ', tweet.text)
})
