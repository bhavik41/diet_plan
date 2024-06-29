import React from 'react';
import Dropdown from './Dropdown';
import { useForm } from 'react-hook-form';
import { Button } from './Button';


const Preferences = () => {
  const preferences = {
    food_likes: ["None","野菜 (yasai - vegetables)", "魚 (sakana - fish)", "豆 (mame - beans)", "果物 (くだもの - kudamono - fruits)"],
    food_dislikes: ["Red meat", "Fried foods", "Spicy food"],
    cultural_preferences: {
      dietary_restrictions: ["Hindu Vegetarian ( Lacto-vegetarian )",
        "Jain Vegetarian ( Lacto-ovo vegetarian, avoids root vegetables )"],
"regional_preferences": [
    "North Indian (focus on dals, flatbreads, curries)",
    "South Indian (focus on rice, lentils, sambar, dosa)",
    "East Indian (focus on seafood, mustard, fermented foods)",
    "West Indian (focus on Gujarati cuisine - dals, sweets)",
    "No specific regional preference"
  ]    },
    budgetary_considerations: "Moderate",
    cooking_skills: "Intermediate",
    cooking_time: "30-45 minutes per meal"
  };
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(http://localhost:3000/api/v1/preferences, data);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-2xl font- mb-4">User Preferences</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Dropdown label="Food Likes" name="food_likes" options={preferences.food_likes} register={register} />
          <Dropdown label="Food Dislikes" name="food_dislikes" options={preferences.food_dislikes} register={register} />
          <Dropdown label="Dietary Restrictions" name="cultural_preferences.dietary_restrictions" options={preferences.cultural_preferences.dietary_restrictions} register={register} />
          <Dropdown label="Regional Preferences" name="cultural_preferences.regional_preferences" options={preferences.cultural_preferences.regional_preferences} register={register} />
          <Button type={'submit'} name={'Submit'}/>
        </form>
      </header>
    </div>
  );
};

export default Preferences;