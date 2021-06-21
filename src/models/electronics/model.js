'use strict';

const mongoose = require('mongoose');

const electronicsSchema = mongoose.Schema({
  item: { type: String, required: true },
  cost: { type: String, required: true },
  stock: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }
});

const electronicsModel = mongoose.model('electronics', electronicsSchema);

module.exports = electronicsModel;
