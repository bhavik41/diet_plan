import React from 'react';

export const Dropdown = ({ label, name, options, value, onChange }) => {
  return (
    <div className="mb-4 w-full max-w-xs mx-auto">
      <label className="block text-gray-700 text-sm font-normal mb-2">{label}</label>
      <select name={name} value={value} onChange={onChange} className="border p-2 rounded w-full">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
