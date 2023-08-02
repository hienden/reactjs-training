import { useState } from "react";
import MemoComponent from "./MemoComponent";

function App() {
  console.log("app init");
  console.log("app re-render");
  const [first, setFirst] = useState("");
  return (
    <>
      <button onClick={() => setFirst("abcbshs")}>click</button>
      <span>app - {first}</span>
      <MemoComponent name="thobui"></MemoComponent>
    </>
  );
}

export default App;
