require('dotenv').config();

var express = require('express');
var app = express();
var api = require('./controllers/apicontroller');
var log = require('./controllers/apilogcontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/api', api);

app.use(require('./middleware/validate-session'));

app.use('/api/log', log);

app.listen(3000, function(){
    console.log('workoutlog-server is listening on 3000');
})