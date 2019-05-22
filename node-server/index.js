var Twit = require('twit');
var config = require('./config.js');
var Twitter = new Twit(config);

const express = require('express')();
const app = express; 

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

app.listen(3000);

