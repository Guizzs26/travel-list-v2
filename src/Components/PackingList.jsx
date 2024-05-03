/* eslint-disable react/prop-types */

import Item from "./Item";

export default function PackingList({ items, onDeleteItem }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
      ))}
    </ul>
  );
}
