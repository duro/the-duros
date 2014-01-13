var express = require('express')
  , swig    = require('swig');

module.exports = function() {
  swig.setDefaults({ cache: false });
  this.use(express.errorHandler());
  this.set('db_connection', 'mongodb://localhost/theduros');
};
