export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding the items in the list.</em>
      </footer>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed);
  const percentage = Math.round((packedItems.length / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you have already packed everything , ready to go ✈"
          : `👜 You have ${numItems} items in your list, and you already packed ${packedItems.length} (${percentage}%)`}
      </em>
    </footer>
  );
}