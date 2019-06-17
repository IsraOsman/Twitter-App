var Twit = require('twit');
var config = require('./config.js');
var Twitter = new Twit(config);
const path = require('path');
const express = require('express')();
const app = express; 
var serve = require('express-static')


function  tweetSearch(input){
    var params = {
      q: input, 
      result_type: 'recent',
      lang: 'en',
      count: 5
    } 
    return Twitter.get('search/tweets', params);
}
app.get('/api/tweets', (req, res) => {
    tweetSearch(req.query.input).then(twitterResponse => {
        res.send(twitterResponse.data.statuses); 
    });
});


function randomTweetFinder(){
    var parameters = {
        screen_name: 'BillGates',
        count: 10
    };

    return Twitter.get('statuses/user_timeline', parameters, function(err, data, response) {
        console.log(data);
    });
};
randomTweetFinder();

app.get('/', (request, response) => {   
    response.sendFile(path.join(__dirname + '/dist/index.html'));
    
});

app.use(serve(__dirname + '/dist'));




app.listen(3000, () => console.log("Hellooooo"));

