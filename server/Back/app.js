/**
 * Created by Massil on 10/12/2016.
 */
var express = require('express');
var app = express();

global.comments = [];

app.use('/public', express.static(__dirname + '/public'));

app.use('/', require('./controller'));

app.listen(1337, function() {
    console.log('App running');
});


