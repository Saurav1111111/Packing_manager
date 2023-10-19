import React from "react";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("no item");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select
        onChange={(e) => {
          console.log(Number(e.target.value));
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {" "}
            {num}{" "}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />

      <button> add </button>
    </form>
  );
}

function PackagingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Items({ item }) {
  return (
    <li>
      {" "}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>👜 You have X items in your list, and you already packed (x%) </em>
    </footer>
  );
}
