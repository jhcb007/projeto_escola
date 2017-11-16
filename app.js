var express = require('express');
var xlsx = require('node-xlsx');
var app = express();

app.get('/', function (req, res) {
    var obj =  xlsx.parse(__dirname + '/teste.xlsx');
    res.send(obj);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});