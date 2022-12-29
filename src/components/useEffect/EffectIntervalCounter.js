import React, { useEffect, useState } from "react";

function EffectIntervalCounter() {
  // 1st Method
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  // 2st Method
  const [count2, setCount2] = useState(0);

  const tick2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval2 = setInterval(tick2, 1000);
    return () => {
      clearInterval(interval2);
    };
  }, []);

  return (
    <>
      <div> {count} </div>
      <div> {count2} </div>
    </>
  );
}

export default EffectIntervalCounter;
