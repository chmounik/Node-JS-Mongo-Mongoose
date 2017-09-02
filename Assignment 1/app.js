var express = require('express');
//var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

//app.use(express.static(path.join(__dirname, 'public')));

app.use('/dishes', dishRouter);
app.use('/promotions',promoRouter);
app.use('/leader',leaderRouter);
app.listen(port, hostname, function(){
  console.log('Server running at http://'+hostname+':'+port);
});