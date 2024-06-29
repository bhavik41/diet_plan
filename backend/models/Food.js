const mongoose = require('mongoose');

// Define schema
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein_g: { type: Number, required: true },
  fat_g: { type: Number, required: true },
  carbohydrates_g: { type: Number, required: true },
  fiber_g: { type: Number, required: true }
});

// Create model based on schema
const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
