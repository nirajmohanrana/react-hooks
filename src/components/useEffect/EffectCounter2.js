import React, { useEffect, useState } from "react";

function EffectCounter2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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

export default EffectCounter2;
