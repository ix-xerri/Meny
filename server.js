//This will be a node server
var express = require('express');
var app = express();


//app.use(express.static('public'));he


app.listen(process.env.PORT || 3000);
console.log("You can open http://localhost:3000/ in your browser");