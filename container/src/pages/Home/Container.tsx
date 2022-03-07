import React, { useState } from "react";
import { Home } from "./Home";

export const Container = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleRemove = () => {
    setCount((prev) => prev - 1);
  };

  const handleClearCounter = () => {
    setCount(0);
  };

  return (
    <>
      <Home
        count={count}
        handleIncrement={handleIncrement}
        handleRemove={handleRemove}
        handleClearCounter={handleClearCounter}
      />
    </>
  );
};
