import React from 'react';

const Macronutrients = ({ macronutrients }) => {
    return (
        <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Macronutrients</h2>
            <div className="grid gap-4 sm:gap-6 min-[1085px]:grid-cols-3 mt-4">
                {Object.entries(macronutrients).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 hover:bg-gray-200 rounded-lg p-4 shadow-md flex flex-col gap-2">
                        <h3 className="text-lg font-semibold capitalize">{key}</h3>
                        <p className='text-justify'>{value.description}</p>
                        <p>Daily Amount: {value.daily_amount}</p>
                        <p>Target Range: {value.target_range}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Macronutrients;
