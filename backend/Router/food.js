// Route to fetch all food items
const express = require("express");

const router = express.Router();

router.get('/food/:name', async (req, res) => {
const name = req.params.name;

  try {
    const food = await Food.findOne({ name });

    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    res.json(food);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router