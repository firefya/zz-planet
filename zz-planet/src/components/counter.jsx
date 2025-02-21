import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "white" }}>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
