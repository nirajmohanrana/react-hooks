import React, { useEffect, useState } from "react";

function EffectCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count} times
      </button>
    </div>
  );
}

export default EffectCounter;
