import { useState } from "react";

const itemsInit = ["item 1", " item 2", "item 3"];

const ItemList = () => {
  const [items, setItems] = useState(itemsInit);
  const handleAddElement = () => {
    setItems((prev) => [...prev, "item 4"]);
  };
  return (
    <>
      <button onClick={handleAddElement}>them phan tu</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
