import React, { useState } from "react";

function StateCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(0);

  return (
    <div>
      Count: {count}
      <button
        onClick={() => {
          setCount(initialCount);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default StateCounter2;
