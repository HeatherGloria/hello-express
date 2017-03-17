var express = require('express')
var app = express()

app.set('view engine', 'ejs');

var desserts = require('./routes/desserts')
app.use(desserts)

var index = require('./routes/index')
app.use('/', index)

// 404 handlin' the errors
app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(3000)
