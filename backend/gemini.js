require('dotenv').config();
const cors = require("cors")
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const app = express();
const port = 4000;
app.use(cors())
const genAI = new GoogleGenerativeAI("AIzaSyAfC1FuXFh-Vyw9bLV9gIDcvfSzBJWlBHo");

async function generateDietPlan(userInformation) {
  console.log("hello")
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
    console.log(dietPlan);
    return dietPlan;
  } catch (error) {
    console.error("Error generating diet plan:", error);
    throw error;
  }
}

const userInformation = {
  "user_info": {
    "age": 28,
    "sex": "male",
    "weight": 100,
    "height": 160,
    "activity_level": "Lightly Active",
    "health_conditions": ["none"],
    "dietary_restrictions": ["Dairy-free"],
    "goals": "lose weight",
    "diet_type": "daily"
  },
  "preferences": {
    "food_likes": ["avocado", "chicken"],
    "food_dislikes": ["broccoli", "banana"],
    "cultural_preferences": {
      "dietary_restrictions": "Mediterranean",
      "regional_preferences": "Greek"
    }
  },
  "budgetary_considerations": "Low",
  "cooking_skills": "intermediate",
  "cooking_time": "15-30 minutes per meal"
};


app.get('/generate-diet-plan', async (req, res) => {
  try {
    const dietPlan = await generateDietPlan();
    res.json({ success: true, gemini: dietPlan });
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});