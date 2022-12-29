import React, { useState } from "react";
import EffectMouse from "./EffectMouse";

function EffectMouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Mouse Event</button>
      {display && <EffectMouse />}
    </div>
  );
}

export default EffectMouseContainer;
