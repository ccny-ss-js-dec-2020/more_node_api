// document that shows you how to incorporate the twitter api into your application: https://www.npmjs.com/package/twitter
// go to the twitter api developer console and retrieve the appropriate keys: https://developer.twitter.com/

// importing my keys file which contains my credentials to access the twitter api
var keys = require('./keys.js');
// importing the twitter module that i installed from npm
var Twitter = require('twitter');
// as per the docs, this is the client that is created to have your application interact with Twitter
var client = new Twitter(keys);
// setting an object with a key of 'screen_name' and a value of my twitter screen name
var params = {screen_name: 'jcjt929'};

// calling the twitter api based on the docs
client.get('statuses/user_timeline', params, function(error, tweets, response) {
	// if no error, then there should be a successful response
	if (!error) {
		console.log("my tweets from Twitter")
		// 'tweets' is the whole object that comes back from the twitter api
		console.log(tweets)
		for(var i = 0; i < tweets.length; i++){
			//viewing the contents in every object from the twitter api response
			console.log("twitter response object from index " + i)
			console.log(tweets[i]);
			// logging the tweet number
			console.log("tweet number " + (i + 1))
			// logging the text of the tweet
			// when looping through the tweets array, we are able to retrieve the text of each tweet
			console.log(tweets[i].text)
		}
	} else {
		// seeing what the error looks like via console.log
		console.log(error)
		// now that i saw the error object, going to display the error correctly
		// using the values from that object
		throw new Error(error[0].message)
	}
});
