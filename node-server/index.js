//import { TweetsComponent } from './scr/app/tweets';
var Twit = require('twit');
var config = require('./config.js');
var Twitter = new Twit(config);
const path = require('path');
const express = require('express')();
const app = express; 
var serve = require('express-static')


function  tweetSearch(){
    var params = {
      q: 'Trump', 
      result_type: 'recent',
      lang: 'en'    
    } 
    return Twitter.get('search/tweets', params);
}

app.get('/api/tweets', (req, res) => {
    tweetSearch().then(twitterResponse => {
        res.send(twitterResponse.data.statuses); 
    });
});

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.use(serve(__dirname + '/dist'));




app.listen(3000, () => console.log("Hellooooo"));

