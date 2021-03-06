var express = require('express');
var app = express();
path = require('path');
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname)));
app.use('/lib', express.static(__dirname + '/../lib'));
app.use('/src', express.static(__dirname + '/../src'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;