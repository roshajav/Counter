import React, { useState } from "react";

const Counter = () => {
  const [totalCount, setTotalCount] = useState(0);
  const incrementCounter = () => {
    setTotalCount(totalCount + 1);
  };

  const decrementCounter = () => {
    setTotalCount(totalCount - 1);
  };
  return (
    <>
      <p>Count: {totalCount} </p>
      <button onClick={incrementCounter}> + </button> &ensp;
      <button onClick={decrementCounter}> - </button>
    </>
  );
};

export default Counter;
