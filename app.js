var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://localhost/login', function (err , result) {
    useNewUrlParser: true
    if(err) throw err;
    console.log("db connection success:::");
});


var db = mongoose.connection;
var app = express();
app.use(methodOverride());
app.use(bodyParser.json());     
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Allow', 'POST GET DELETE PUT HEAD');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    res.setHeader('Access-Control-Expose-Headers', 'X-Requested-With, Content-Type, Authorization');
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('BigNodeI5', true);
    res.setHeader('Cache-Control', 'no-cache');
    next();
});                   

var sample = require('./api/routes/routes');
sample.fun(app)

var server = app.listen(8082, function () {
    console.log("app is listening on %s:%s", server.address().address, server.address().port);
})