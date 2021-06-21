'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  item: { type: String, required: true },
  cost: { type: String, required: true },
  stock: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }
});

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;
