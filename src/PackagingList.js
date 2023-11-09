import Items from "./Items.js";
import React from "react";
import { useState } from "react";

export default function PackagingList({ items, onDeleteItems, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = items;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items.slice().sort((a, b) => {
      return a.description.localeCompare(b.description);
    });

  if (sortBy === "packedItems")
    sortedItems = items.slice().sort((a, b) => {
      return Number(a.packed) - Number(b.packed);
    });

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            item={item}
            onToggleItems={onToggleItems}
            onDeleteItems={onDeleteItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packedItems">sort by packed Items</option>
        </select>

        <button onClick={onClearList}> clear list</button>
      </div>
    </div>
  );
}