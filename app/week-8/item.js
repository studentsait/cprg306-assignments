export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li 
      className="border border-blue-300 bg-transparent p-4 mb-2 rounded-lg shadow-sm cursor-pointer"
      onClick={() => onSelect(name)}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm">Buy {quantity} in {category}</p>
    </li>
  );
}