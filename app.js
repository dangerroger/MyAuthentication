const express = require ('express');
const app = express();

app.set ('port', process.env.PORT|| 3000);

//custom 404 page

app.use (function (req, res){
  res.type('text/plain');
res.status (404);
res.send ('404 - not found');
});

//custom 500 page

app.use (function (err,req, res,next){
  console.error(err.stack);
  res.type('text/plain');
res.status (500);
res.send ('500 - server error');
});

app.listen (app.get('port'), function(){
console.log ('MyAuthentication app started on http://localhost:' + app.get('port')
+    '; Press Ctrl-C to terminate.');
});
