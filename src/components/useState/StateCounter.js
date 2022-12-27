import React, { useState } from "react";

const StateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count}
      </button>
    </div>
  );
};

export default StateCounter;
