'use strict';
var mongoose = require('mongoose'),
	Product = mongoose.model('Products');

exports.list_all = function(req, res) {
  Product.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.save = function(req, res) {
  var product = new Product(req.body);
  product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.read = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.delete = function(req, res) {
  Product.remove({
    _id: req.params.id
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};