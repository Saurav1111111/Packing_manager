import React from "react";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true }
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}

function Form() {
  const [description, setDescription] = useState("no item");
  function submitForm(e) {
    e.preventDefault;
    console.log(e);
  }
  return (
    <form className="add-form" onSubmit={submitForm}>
      <h3>What do you need for your 😍 trip? </h3>
      <select>
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

function PackagingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Items item={item} />
        ))}
      </ul>
    </div>
  );
}

function Items({ item }) {
  return (
    <li>
      {" "}
      <span style={item.packed ? {} : { textDecoration: "line-through" }}>
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
