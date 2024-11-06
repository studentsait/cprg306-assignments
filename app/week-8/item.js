export default function Item({ name, quantity, category, onSelect }) {
    return (
      <li className="border p-2 mb-2 bg-slate-100 cursor-pointer" onClick={() => onSelect(name)}>
        <div className="font-semibold">{name}</div>
        <div>Quantity: {quantity}</div>
        <div>Category: {category}</div>
      </li>
    );
  }