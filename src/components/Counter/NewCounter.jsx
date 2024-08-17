import React from "react";
import { useState } from "react";

const NewCounter = ({name}) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  return (
    <>
        <h1 className="mt-6">{name}</h1>
      <div className="counter-container flex gap-4 items-center mt-6">
        <button
          className="bg-blue-300 px-4 py-1 rounded"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <h2>{count}</h2>
        <button
          className="bg-blue-300 px-4 py-1 rounded"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
      <div className="counter-container1 flex gap-4 items-center mt-6">
        <button
          className="bg-blue-300 px-4 py-1 rounded"
          onClick={() => setCount1(count1 - 1)}
        >
          -
        </button>
        <h2>{count1}</h2>
        <button
          className="bg-blue-300 px-4 py-1 rounded"
          onClick={() => setCount1(count1 + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default NewCounter;
