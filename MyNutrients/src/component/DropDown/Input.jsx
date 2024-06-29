import React from 'react';

export const Input = ({ name, type, placeholder, value, onChange }) => {
  return (
    <div className="mb-4 w-full max-w-xs mx-auto">
      {/* <label className="block text-gray-700 text-sm font-bold mb-2">{name}</label> */}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};