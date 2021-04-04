'use strict';
var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
	name: String,
	products: { type : Array , "default" : [] }
});

module.exports = mongoose.model('Categories', CategorySchema);