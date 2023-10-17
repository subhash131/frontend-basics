"use client";
import React, { useState } from "react";

const page = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((currentVal) => currentVal + 3);
  };
  const handleDecrement = () => {
    setCounter((currentVal) => currentVal - 3);
  };

  return (
    <div className="flex justify-center items-center">
      <button className="p-2 border" onClick={handleDecrement}>
        -
      </button>
      <div className="p-2">{counter}</div>
      <button className="p-2 border" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default page;
