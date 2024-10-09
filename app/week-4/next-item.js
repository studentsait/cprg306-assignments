"use client";

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
          Quantity
        </label>
        <div className="flex items-center">
          <button 
            onClick={decrement} 
            disabled={quantity === 1}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l disabled:opacity-50"
          >
            -
          </button>
          <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
            {quantity}
          </span>
          <button 
            onClick={increment} 
            disabled={quantity === 20}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r disabled:opacity-50"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}