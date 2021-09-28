import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);

  function incrementValue() {
    setValue(value + 1);
  }
  function decrementValue() {
    setValue(value - 1);
  }
  return (
    <div>
      <h1 className="value">{value}</h1>
      <button className="button-1" onClick={incrementValue}>
        +
      </button>
      <button className="button-2" onClick={decrementValue}>
        -
      </button>
    </div>
  );
}
