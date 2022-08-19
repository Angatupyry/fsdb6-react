import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div className="counterContainer">
      <span className="counterText">Counter is now in: {count}</span>
      <button onClick={increment} className="counterButton">
        Increment Counter
      </button>
    </div>
  );
};

export default Counter;
