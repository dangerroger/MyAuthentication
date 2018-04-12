const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const passport = require ('passport');
const mongoose = require ('mongoose');
const model = require('./model/database.js');

mongoose.connect(model.database);




// require express app

const app = express();

const users = require('./routes/users');


// set port or env
app.set ('port', process.env.PORT|| 3000);

// use cors middleware

app.use (cors ());

// set static

app.use (express.static (path.join (__dirname, 'public')));


// use body bodyParser

app.use (bodyParser.json());

app.use ('/users', users);





/*

  app.get('/', function (req, res) {
  res.send('MyAuthentication App Home Page');
});

  app.get ('/about', function (req, res){
  res.send ('About MyAuthentication App');

});

*/


//custom 404 page

app.use (function (req, res, next){
  res.type('text/plain');
res.status (404);
res.send ('404 - not found');
});

//custom 500 page

app.use (function (err,req, res, next){
  console.error(err.stack);
  res.type('text/plain');
res.status (500);
res.send ('500 - server error');
});

app.listen (app.get('port'), function(){
console.log ('MyAuthentication app started on http://localhost:' + app.get('port')
+    '; Press Ctrl-C to terminate.');
});
