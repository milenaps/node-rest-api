'use strict';
module.exports = function(app) {
  var category = require('../service/categoryService');

  app.route('/api/categories')
    .get(category.list_all)
    .post(category.save)
    .put(category.save);

  app.route('/api/categories/:id')
    .get(category.read)
    .delete(category.delete);
};