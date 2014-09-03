var express = require('express');
var api = require('./api');
var app = express();


console.log('starting');
app.set('port', 3000);
app.disable('etag');//prevent the http 304 (not modified) responses, less efficient but better for seeing what it going on.;
app.use('/', api);
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port)
});

