/* eslint-disable react/prop-types */

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className={item.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      {item.quantity} {item.description}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
