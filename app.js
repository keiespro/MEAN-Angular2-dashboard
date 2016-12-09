var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var regions = require('./routes/regions');
var customers = require('./routes/customers');
var networks = require('./routes/networks');
var profiles = require('./routes/profiles');
var contracts = require('./routes/contracts');
var servicetemplates = require('./routes/servicetemplates');
var devices = require('./routes/devices');
var connectionprofiles = require('./routes/connectionprofiles');
var messages = require('./routes/messages');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', index);
app.use('/api/regions/', regions);
app.use('/api/customers/', customers);
app.use('/api/networks/', networks);
app.use('/api/profiles/', profiles);
app.use('/api/contracts/', contracts);
app.use('/api/servicetemplates/', servicetemplates);
app.use('/api/devices/', devices);
app.use('/api/connectionprofiles/', connectionprofiles);
app.use('/api/messages/', messages);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
