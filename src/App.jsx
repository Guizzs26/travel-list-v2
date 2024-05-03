import { useState } from "react";

import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
    </div>
  );
}
