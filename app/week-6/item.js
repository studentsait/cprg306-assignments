export default function Item({ name, quantity, category }) {
    return (
      <li className="border p-2 mb-2 bg-slate-100">
        <div className="font-semibold">{name}</div>
        <div>Quantity: {quantity}</div>
        <div>Category: {category}</div>
      </li>
    );
  }