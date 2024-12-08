"use client";

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) { // Accept onItemSelect prop
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <li key={item.id} onClick={() => onItemSelect(item.name)}> {/* Make Item clickable */}
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </li>
        ))}
      </ul>
    </div>
  );
}