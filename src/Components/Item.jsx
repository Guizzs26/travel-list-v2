/* eslint-disable react/prop-types */

export default function Item({ item, onDeleteItem }) {
  return (
    <li className={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity} {item.description}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
