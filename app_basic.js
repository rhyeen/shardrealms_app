var express = require('express');

var path = require('path');
var logger = require('morgan');

var app = express();
app.use(logger('dev'));
app.set('view engine', 'jade');

var ngAppRootDir = path.join(__dirname, '../shardrealms_ng2/');

// serve static files
app.use(express.static(ngAppRootDir));

app.get('*', function(req, res) {
  res.sendFile(path.join(ngAppRootDir, 'index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });



// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(express.static(path.join(__dirname, '../ng-sr/index.html')));

//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;
