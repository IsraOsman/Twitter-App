var Twit = require('twit');
var config = require('./config.js');
var Twitter = new Twit(config);
const path = require('path');
const express = require('express')();
const app = express; 
var serve = require('express-static')

function tweetSearch(input){
    var params = {
      q: input, 
      result_type: 'recent',
      lang: 'en',
      count: 12
    } 

    return Twitter.get('search/tweets', params);
}

function randomTweetFinder(){
    var favoriteUsers = ["BillGates","BarackObama","simonsinek","shugairi","CNN"];
    var randomUser = favoriteUsers[Math.floor(Math.random()*favoriteUsers.length)];
    var parameters = {
        screen_name: randomUser,
        count: 1
    };

    return Twitter.get('statuses/user_timeline', parameters);
};

app.get('/api/tweets', (req, res) => {
    tweetSearch(req.query.input).then(twitterResponse => {
        res.send(twitterResponse.data.statuses); 
    });
});

app.get('/api/random', (req, res) => {
    randomTweetFinder().then(function(result){
        res.send(result.data);
    });
});

app.get('/', (request, response) => {   
    response.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use(serve(__dirname + '/dist'));

app.listen(process.env.port || 8080);
