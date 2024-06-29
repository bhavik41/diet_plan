import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const NutritionCard = () => {
  const [data, setData] = useState([]);

    const location = useLocation();
  const { dietData } = location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/food/foods');

        if (response.data.success) {
          setData(response.data.data);
        } else {
          console.error('Items not loaded:', response.data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('Data state updated:', data);
  }, [data]);

  return (
    <div className="container bg-customGreen mx-auto px-[4rem] 	position: relative top-[7rem]">
      <div className="input width-full flex justify-center rounded-4">
 <input type="text" className="search px-5 py-1 m-3 rounded-5" placeholder="Search Food" />
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{item.name} Nutrition Facts</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex justify-between">
                <span>Calories:</span>
                <span>{item.calories}</span>
              </div>
              <div className="flex justify-between">
                <span>Protein:</span>
                <span>{item.protein_g}g</span>
              </div>
              <div className="flex justify-between">
                <span>Fat:</span>
                <span>{item.fat_g}g</span>
              </div>
              <div className="flex justify-between">
                <span>Carbohydrates:</span>
                <span>{item.carbohydrates_g}g</span>
              </div>
              <div className="flex justify-between">
                <span>Fiber:</span>
                <span>{item.fiber_g}g</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionCard;
