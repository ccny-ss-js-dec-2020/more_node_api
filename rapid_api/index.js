//https://rapidapi.com/blog/most-popular-api/
//https://rapidapi.com/LemmoTresto/api/joke3?endpoint=apiendpoint_c198a2fb-fc88-4a86-9e34-e2978fc1a7c2

// run npm install in order to install all of the packages that are listed in the package.json

// importing the unirest module, which is another module that makes request for apis
var unirest = require("unirest");
// storing the joke rapid api request in a variable as per the document for the joke rapid api
var req = unirest("GET", "https://joke3.p.rapidapi.com/v1/joke");
// setting the headers of my request to the joke rapid api
// This is in the joke rapid api document as well
req.headers({
	"x-rapidapi-key": "",
	"x-rapidapi-host": "joke3.p.rapidapi.com",
	"useQueryString": true
});

// sending the request to the joke rapid api
req.end(function (res) {
	// logging the response from calling the rapid api, which will be an object
	console.log("response object from the rapid api")
	// the initial response object is a giant and ugly object a lot of the time,
	// and that is why you parse through it
	console.log(res)

	// if there is an error in the res object
	// then throw an error and stop the application from running the logic
	if (res.error){
		// we are able to get the error information from the response object
		console.log("the whole error response information from the response object")
		// console.log(res.error)
		// logging the error message that we get from parsing through the response error object
		console.log(res.body.message)
		// throwing an error, basically meaning that the application will stop and that error will be
		// what appears for the user to see
		throw new Error(res.body.message);
	}
	// if a successful response from the joke rapid api
	// here is the unparsed joke response from the joke rapid api
	// it seems that it is already parsed for you,
	// as we can access the object fields right from the response
	console.log("accessing the response body")
	console.log(res.body);
});
