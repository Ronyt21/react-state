import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1> {count} </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
}
