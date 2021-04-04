var express = require('express'),
	bodyParser = require('body-parser'),
	Product = require('./src/model/productModel'),
	Category = require('./src/model/categoryModel');

var app = express();
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cms');

var productRoutes = require('./src/routes/productRoutes');
productRoutes(app);

var categoryRoutes = require('./src/routes/categoryRoutes');
categoryRoutes(app);

app.listen(3000);
console.log('Server running at port 3000');