/* eslint-disable no-const-assign */
import { useState } from "react";

const CountComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button> {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default CountComponent;
