var express = require('express');
var app = express();

var compression = require('compression');

app.use(compression({level: 9}));

app.use(express.static('public'));

app.listen(process.env.PORT || 80, function () {
  console.log('Example app listening on port 3000!');
});
