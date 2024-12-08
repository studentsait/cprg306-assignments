"use client";

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; // Import the new MealIdeas component
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(''); // Additional state variable

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Date.now().toString() }]);
  };

  const handleItemSelect = (itemName) => {
    // Clean up the item name
    const cleanedName = itemName
      .split(',')[0] // Get the part before the comma
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '') // Remove emojis
      .trim(); // Trim whitespace
    setSelectedItemName(cleanedName); // Update the selected item name
  };

  return (
    <main className="container mx-auto p-4 flex">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass the new prop */}
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} /> {/* Pass selectedItemName as ingredient */}
      </div>
    </main>
  );
}