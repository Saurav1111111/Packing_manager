import React from "react";
import { useState } from "react";
import Logo from "./Logo.js";
import Items from "./Items.js";
import PackagingList from "./PackagingList.js";
import Form from "./Form.js";
import Stats from "./Stats.js";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);
  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure want to clear all the Items in the list",
    );
    if (confirmed) setItems([]);
  }
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onToggleItems={handleToggleItems}
        onDeleteItems={handleDeleteItems}
        onClearList={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
