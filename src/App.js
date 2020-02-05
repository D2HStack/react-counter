import React, { useState } from "react";

import "./style.css";

import Logo from "./Logo";
import Button from "./Button";
import Footer from "./Footer";

function App() {
  // set the useState variables
  const [counter, setCounter] = useState(0);

  // function declarations
  // increment
  const increment = () => {
    setCounter(counter + 1);
  };

  // decrement
  const decrement = () => {
    setCounter(counter - 1);
  };

  // reset
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <Logo></Logo>
      <Button
        name="-"
        onEvent={decrement}
        render={counter > 0 ? "minus" : "off"}
      ></Button>
      <span className="counter">{counter}</span>
      <Button
        name="+"
        onEvent={increment}
        render={counter > 10 ? "off" : "plus"}
      ></Button>
      <Button name="Reset" onEvent={reset} render="reset"></Button>
      <Footer>Made with React at le Reacteur by Hoang</Footer>
    </>
  );
}

export default App;
