"use strict";
const express = require('express'), 
path = require('path'),
request = require('request'),
ParseServer = require('parse-server');

/* var api = new ParseServer({

}); */
//var ParseDashboard = require('parse-dashboard');
//var dashboard = new ParseDashboard(config.PARSE_DASBOARD); 

/* var routes = require('./routes/index');
var users = require('./routes/users');
var bot = require('./routes/bot'); */

let app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../build')));

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

/* // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(require('less-middleware')(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, './react-ui/build')));

app.use(config.PARSE_MOUNT, api);
//app.use(config.PARSE_DASHBOARD_MOUNT, dashboard);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
} */

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = {app,ParseServer};
