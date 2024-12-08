"use client";

import { useState, useEffect } from 'react';
import { getItems, addItem } from './shopping-list-service'; // Importing the functions
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; // Import the new MealIdeas component

export default function Page({ user }) { // Assuming user is passed as a prop
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(''); // Additional state variable

  // Async function to load items
  const loadItems = async () => {
    try {
      const fetchedItems = await getItems(user.uid); // Use user.uid as userId
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  // useEffect to load items on component mount
  useEffect(() => {
    loadItems();
  }, [user.uid]); // Dependency array includes user.uid

  // Handle adding an item
  const handleAddItem = async (newItem) => {
    try {
      const itemId = await addItem(user.uid, newItem); // Use user.uid as userId
      setItems((prevItems) => [...prevItems, { ...newItem, id: itemId }]); // Use the returned ID
    } catch (error) {
      console.error("Error adding item:", error);
    }
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