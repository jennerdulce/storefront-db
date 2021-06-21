'use strict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  item: { type: String, required: true },
  cost: { type: String, required: true },
  stock: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }
});

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;
