'use strict';
var mongoose = require('mongoose'),
	Category = mongoose.model('Categories');

exports.list_all = function(req, res) {
  Category.find({}, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};

exports.save = function(req, res) {
  var category = new Category(req.body);
  category.save(function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};

exports.read = function(req, res) {
  Category.findById(req.params.id, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};

exports.delete = function(req, res) {
  Category.remove({
    _id: req.params.id
  }, function(err, category) {
    if (err)
      res.send(err);
    res.json({ message: 'Category successfully deleted' });
  });
};