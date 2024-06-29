import React, { useState } from 'react';
import { Dropdown } from '../../component/DropDown/DropDown';
import { Button } from '../../component/DropDown/Button';
import axios from 'axios';

export const Preferences = () => {
  const preferences = {
    food_likes: ["None","野菜 (yasai - vegetables)", "魚 (sakana - fish)", "豆 (mame - beans)", "果物 (くだもの - kudamono - fruits)"],
    food_dislikes: ["Red meat", "Fried foods", "Spicy food"],
    cultural_preferences: {
      dietary_restrictions: ["Hindu Vegetarian ( Lacto-vegetarian )",
        "Jain Vegetarian ( Lacto-ovo vegetarian, avoids root vegetables )"],
      regional_preferences: [
        "North Indian (focus on dals, flatbreads, curries)",
        "South Indian (focus on rice, lentils, sambar, dosa)",
        "East Indian (focus on seafood, mustard, fermented foods)",
        "West Indian (focus on Gujarati cuisine - dals, sweets)",
        "No specific regional preference"
      ]
    },
    budgetary_considerations: "Moderate",
    cooking_skills: "Intermediate",
    cooking_time: "30-45 minutes per meal"
  };

  const [formData, setFormData] = useState({
    food_likes: [],
    food_dislikes: [],
    dietary_restrictions: [],
    regional_preferences: []
  });

  const handleCheckboxChange = (name, value, checked) => {
    setFormData((prevFormData) => {
      const newValues = checked
        ? [...prevFormData[name], value]
        : prevFormData[name].filter((item) => item !== value);
      return {
        ...prevFormData,
        [name]: newValues
      };
    });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const culturalPreferences = {
      dietary_restrictions: formData.dietary_restrictions,
      regional_preferences: formData.regional_preferences
    };

    const data = {
      food_likes: formData.food_likes,
      food_dislikes: formData.food_dislikes,
      cultural_preferences: culturalPreferences,
    };
    console.log(data);
    try {
      const response = await axios.post("http://localhost:3000/api/v1/preferences", data);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="App mb-4 w-full max-w-xs mx-auto">
      <header className="App-header">
        <h1 className="text-2xl font- mb-4">User Preferences</h1>
        <form onSubmit={handleSubmit}>
          <CheckboxGroup label="Food Likes" name="food_likes" options={preferences.food_likes} onChange={handleCheckboxChange} />
          <CheckboxGroup label="Food Dislikes" name="food_dislikes" options={preferences.food_dislikes} onChange={handleCheckboxChange} />
          <Dropdown label="Dietary Restrictions" name="dietary_restrictions" options={preferences.cultural_preferences.dietary_restrictions} value={formData.dietary_restrictions} onChange={handleDropdownChange} />
          <Dropdown label="Regional Preferences" name="regional_preferences" options={preferences.cultural_preferences.regional_preferences} value={formData.regional_preferences} onChange={handleDropdownChange} />
          <Button type={'submit'} name={'Submit'} />
        </form>
      </header>
    </div>
  );
};

const CheckboxGroup = ({ label, name, options, onChange }) => {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    onChange(name, value, checked);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      {options.map((option, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            name={name}
            value={option}
            onChange={handleChange}
            className="mr-2"
          />
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

  Preferences;
