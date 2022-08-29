import React, { useState } from "react";

import "./Counter.css";

//https://dev.to/frontendengineer/10-reactjs-coding-exercises-with-codepen-exercise-and-solution--22k7
//https://contactmentor.com/react-js-practice-exercises-solution/
//https://careerkarma.com/blog/react-exercises/
//https://epic-react-exercises.vercel.app/

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newIncrement = count + 1;
    setCount(newIncrement);
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
