/* eslint-disable react/prop-types */

export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Please, start by adding some items to your list 😁</em>
      </p>
    );

  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100
        ? "Nice! You got everything 😜"
        : `You have ${numItems} items on your list, and you already packed
        ${itemsPacked} (${percentage}%)`}
    </footer>
  );
}
