const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const router = express.Router();
require('dotenv').config();
const cors = require("cors");

const genAI = new GoogleGenerativeAI("AIzaSyAfC1FuXFh-Vyw9bLV9gIDcvfSzBJWlBHo");

async function generateDietPlan(userInformation) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
You are an AI bot designed to suggest the best diet plan. Here is my information:

${JSON.stringify(userInformation, null, 2)}

I'd prefer a diet plan that aligns with these preferences while considering my restrictions and is suitable for weight loss. 

Please follow the provided JSON structure for the response (example included below):

{
  "suggested_diet_plan": {
    "goals": "Lose weight",
    "calorie_goals": {
      "description": "...",
      "estimated_calories": "..."
    },
    "macronutrients": {
      "protein": {
        "description": "...",
        "target_range": "...",
        "daily_amount": "..."
      },
      "carbs": {
        "description": "...",
        "target_range": "...",
        "daily_amount": "..."
      },
      "fats": {
        "description": "...",
        "target_range": "...",
        "daily_amount": "..."
      }
    },
    "sample_meal_plan": {
      "breakfast": "...",
      "lunch": "...",
      "snack": "...",
      "dinner": "..."
    },
    "additional_tips": ["...", "...", "..."],
    "notes": ["...", "...", "..."]
  }
}

diet should be indian specific
`;

    const result = await model.generateContent(prompt);
    const response = result.response.candidates[0].content.parts[0].text;

    const cleanResponse = response.replace(/^ JSON\n/, '').trim();
    const jsonString = cleanResponse.replace(/json/gi, '');
    const dietPlan = JSON.parse(jsonString);
    return dietPlan;
  } catch (error) {
    console.error("Error generating diet plan:", error);
    throw error;
  }
}

router.use(cors());

router.post('/generate-diet-plan', async (req, res) => {
  userInformation = req.body;
console.log(userInformation)
  try{
userInformation = req.body;
console.log(userInformation)
    const dietPlan = await generateDietPlan(userInformation);
    res.json({ success: true, gemini: dietPlan });
  } catch (error) {
    res.status(500).json({ error: "Error generating diet plan" });
  }
});

module.exports = router;
