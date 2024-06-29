// Route to fetch all food items
const express = require("express");

const Food = require('../models/Food');
const router = express.Router();

router.get('/foods', async (req, res) => {
  try {
    const foods = await Food.find();
    console.log(foods)

    if (foods.length === 0) {
      return res.status(404).json({ message: 'No food items found' });
    }

    res.json({success:true, data:foods});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router