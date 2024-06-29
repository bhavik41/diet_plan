import React, { useState } from "react";
import { Button } from "../../component/DropDown/Button";
import { Input } from "../../component/DropDown/Input";
import { Label } from "../../component/DropDown/Label";
import { Dropdown } from "../../component/DropDown/DropDown";
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from "axios";

export const UserInfo = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    weight: '',
    height: '',
    health_conditions: '',
    goals: '',
    diet_type: ''
  });

  const health_conditions = [
    "normal", "Diabetes (Type 1, Type 2)",
    "Heart Disease (Coronary Artery Disease, Congestive Heart Failure)",
    "High Blood Pressure (Hypertension)", "Kidney Disease (Chronic Kidney Disease)",
    "High Cholesterol", "Celiac Disease",
    "Food Allergies (e.g., Peanuts, Shellfish)",
    "Food Intolerances (e.g., Lactose Intolerance, Gluten Intolerance)",
    "Digestive Issues (e.g., Irritable Bowel Syndrome (IBS), Crohn's Disease, Ulcerative Colitis)",
    "Hormonal Imbalances (e.g., Thyroid Issues, Polycystic Ovary Syndrome (PCOS))",
    "Autoimmune Diseases (e.g., Lupus, Rheumatoid Arthritis)", "Cancer", "Anemia",
    "Osteoporosis", "Liver Disease", "Metabolic Syndrome", "Sleep Apnea"
  ];

  const goals = [
    "Lose weight", "Gain muscle", "Maintain weight", "Improve overall health",
    "Reduce blood sugar levels", "Lower cholesterol", "Manage blood pressure",
    "Increase energy levels", "Improve gut health", "Reduce inflammation", "Support athletic performance"
  ];

  const gender = ['male', 'female'];
 const navigate = useNavigate(); // Hook for navigation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post("http://localhost:3001/gemini/generate-diet-plan", formData);
      // console.log(response.data.gemini);
      // navigate('/DietPlan', { state: { dietData: response.data.gemini } });
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="w-full position-relative top-[12rem] max-w-xs mx-auto mb-4 font-normal mt-4">
      <form onSubmit={handleSubmit}>
        <Label name="age" />
        <Input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} />

        <Dropdown label="Sex" name="sex" options={gender} value={formData.sex} onChange={handleDropdownChange} />

        <Label name="Weight (kg)" />
        <Input name="weight" type="number" placeholder="Weight" value={formData.weight} onChange={handleChange} />

        <Label name="Height (cm)" />
        <Input name="height" type="number" placeholder="Height" value={formData.height} onChange={handleChange} />

        <Dropdown label="Health Conditions" name="health_conditions" value={formData.health_conditions} options={health_conditions} onChange={handleDropdownChange} />

        <Dropdown label="Goals" name="goals" options={goals} value={formData.goals} onChange={handleDropdownChange} />

        <Dropdown label="Diet Type" name="diet_type" options={goals} value={formData.diet_type} onChange={handleDropdownChange} />

        <Button type="submit" name="Next" />
      </form>
    </div>
  );
};
