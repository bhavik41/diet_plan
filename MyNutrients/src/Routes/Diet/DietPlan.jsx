import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Macronutrients from './Macronutrients';
import Meal from './Meal';
import { useLocation } from 'react-router-dom';

const DietPlan = () => {
    const [dietPlan, setDietPlan] = useState(null);

        const location = useLocation();
  const { dietData } = location.state || {};
    
console.log(dietPlan)
    

    // if (!dietPlan) {
    //     return <div className="flex justify-center items-center h-screen">Loading...</div>;
    // }

    const { sample_meal_plan, goals, calorie_goals, macronutrients, additional_tips, notes } = dietPlan;

    return (<>
  
        {/* <div className="p-4 pt-4 sm:p-6 lg:p-8  min-h-screen w-full font-poppins">
            <div className="max-w-full mx-auto bg-customGreen shadow-lg rounded-lg p-6 sm:p-8 w-full">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">{goals} Diet Plan</h1>
                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-semibold">Calorie Goals</h2>
                    <p>{calorie_goals.description}: {calorie_goals.estimated_calories}</p>
                </div>
                <Macronutrients macronutrients={macronutrients} />
                <div className="mt-6">
                    <h2 className="text-xl sm:text-2xl font-semibold pb-4">Sample Meal Plan</h2>
                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                        <Meal mealType="Breakfast" meal={sample_meal_plan.breakfast} />
                        <Meal mealType="Lunch" meal={sample_meal_plan.lunch} />
                        <Meal mealType="Snack" meal={sample_meal_plan.snack} />
                        <Meal mealType="Dinner" meal={sample_meal_plan.dinner} />
                    </div>
                </div>

            </div>
            <div className='max-w-full my-5 bg-customGreen shadow-lg rounded-lg p-6 sm:p-8 w-full'>
                <h2 className="text-xl sm:text-2xl font-semibold pb-2">Additional Tips</h2>
                <ul className="list-disc pl-5">
                    {additional_tips.map((tip, index) => (
                        <li className='pb-1' key={index}>{tip}</li>
                    ))}
                </ul>
            </div>
            <div className="max-w-full my-5 bg-red-100 shadow-lg rounded-lg p-6 sm:p-8 w-full">
                <h2 className="text-xl sm:text-2xl font-semibold pb-2">Notes</h2>
                <ul className="list-disc pl-5">
                    {notes.map((note, index) => (
                        <li className='pb-1' key={index}>{note}</li>
                    ))}
                </ul>
            </div>
        </div> */}
        <pre>{JSON.stringify(dietData, null, 2)}</pre>

        </>
    );
};

export default DietPlan;
