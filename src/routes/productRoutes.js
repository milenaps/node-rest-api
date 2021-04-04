'use strict';
module.exports = function(app) {
  var product = require('../service/productService');

  app.route('/api/products')
    .get(product.list_all)
    .post(product.save)
    .put(product.save);

  app.route('/api/products/:id')
    .get(product.read)
    .delete(product.delete);
};