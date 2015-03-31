var express = require('express');

var app = express();

app.get('/', function(req,res) {
	res.send("To add two numbers, type <i>localhost:3000/add</i> into the browser, followed by <i>/[first number]/[second number].</i><br><br>To subtract a number from another number, type <i>localhost:3000/subtract</i> into the browser, followed by <i>/[first number]/[second number].</i><br><br>To multiply two numbers, type <i>localhost:3000/multiply</i> into the browser, followed by <i>/[first number]/[second number].</i><br><br>To add divide a number from another number, type <i>localhost:3000/divide</i> into the browser, followed by <i>/[first number]/[second number].</i><br><br>");
});

app.get('/add/:x/:y', function(req, res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x + y;
	res.send(x + " + " + y + " = " + sum);
});

app.get('/subtract/:x/:y', function(req, res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var diff = x - y;
	res.send(x + " - " + y + " = " + diff);
});

app.get('/multiply/:x/:y', function(req, res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var product = x * y;
	res.send(x + " * " + y + " = " + product);
});

app.get('/divide/:x/:y', function(req, res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var quotient = x / y;
	res.send(x + " / " + y + " = " +  quotient);
});

app.listen(3000);