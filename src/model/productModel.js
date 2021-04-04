'use strict';
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	price: Number
});

module.exports = mongoose.model('Products', ProductSchema);