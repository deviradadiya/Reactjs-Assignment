import React, { useState } from "react";

function Counter() {
 
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div style={counterStyle}>
      <h1>Counter</h1>
      <p style={countStyle}>Current Count: {count}</p>
      <button style={buttonStyle} onClick={incrementCount}>
        Increment
      </button>
      <button style={buttonStyle} onClick={decrementCount}>
        Decrement
      </button>
    </div>
  );
}

// Inline styles
const counterStyle = {
  textAlign: "center",
  marginTop: "50px",
  marginBottom: "100px"
};

const countStyle = {
  fontSize: "18px",
  margin: "10px 0",
};

const buttonStyle = {
  padding: "10px 20px",
  margin:"10px",
  fontSize: "18px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Counter;
