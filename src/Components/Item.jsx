/* eslint-disable react/prop-types */

export default function Item({ item }) {
  return (
    <li className={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity} {item.description}
      <button>❌</button>
    </li>
  );
}
