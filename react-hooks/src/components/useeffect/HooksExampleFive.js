import React, { useEffect, useState } from "react";

function HooksExampleFive() {
  const [count, setCount] = useState(0);
  // const tick = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  useEffect(() => {
    const interval = setInterval(
      setCount((count1) => count1 + 1),
      2000
    );
  }, [count]);

  return (
    <div>
      Hooks Interval Code
      {count}
    </div>
  );
}

export default HooksExampleFive;
