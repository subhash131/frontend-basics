"use client";
import React, { useReducer } from "react";

const page = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.payload;
      case "decrement":
        return state - action.payload;
    }
  };
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex justify-center items-center">
      <button
        className="p-2 border"
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        -
      </button>
      <div className="p-2">{counter}</div>
      <button
        className="p-2 border"
        onClick={() => dispatch({ type: "increment", payload: 2 })}
      >
        +
      </button>
    </div>
  );
};

export default page;
