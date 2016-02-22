var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var port  	 = process.env.PORT || 8080;
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


mongoose.connect('mongodb://jamie:sadman201@apollo.modulusmongo.net:27017/Ybyhys9i');
app.use(express.static(__dirname));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));



app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
});


app.listen(port);
console.log("App listening on port " + port);
