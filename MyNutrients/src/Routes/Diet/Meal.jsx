import React from 'react';

const Meal = ({ mealType, meal }) => {
    if (!meal) {
        return null;
    }

    return (
        <div className="bg-gray-50 rounded-lg p-4 shadow-md hover:bg-gray-200">
            <h3 className="text-lg sm:text-xl font-bold">{mealType}</h3>
            <p>{meal}</p>
        </div>
    );
};

export default Meal;
