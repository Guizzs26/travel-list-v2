/* eslint-disable react/prop-types */

import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <Item
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
          key={item.id}
        />
      ))}
    </ul>
  );
}
