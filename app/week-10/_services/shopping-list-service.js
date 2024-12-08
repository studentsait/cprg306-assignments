import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


import { collection, getDocs, addDoc, doc } from "firebase/firestore";

// Function to retrieve all items for a specific user
export const getItems = async (userId) => {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    const snapshot = await getDocs(itemsRef);
    const items = [];

    snapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });

    return items;
  } catch (error) {
    console.error("Error getting items: ", error);
    throw new Error("Could not retrieve items");
  }
};

// Function to add a new item for a specific user
export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsRef, item);
    return docRef.id; // Return the ID of the newly created document
  } catch (error) {
    console.error("Error adding item: ", error);
    throw new Error("Could not add item");
  }
};