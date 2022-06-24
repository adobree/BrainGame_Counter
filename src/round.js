import { useState } from "react";
import './index.css';

export default function Round() {
  const [count, setCount] = useState(0);
  const [setQuantity] = useState(0);

  const handleSubtractOne = () => {
    setCount(count - 1);
  };

  const handleAddOne = () => {
    setCount(count + 1);
  };

  const handleResetCounter = () => {
    setCount(0);
    setQuantity(0);
  };

  return (
    <div className={"wrapper2"}>
      <div className="left">
        <div className="rounder">
          {count}
        </div>
      </div>
      <div className="right">
        <div className={"buttons"}>
          <button className={"buttonMinusOne"} onClick={handleSubtractOne}>
            -1
          </button>
          <button className={"buttonPlusOne"} onClick={handleAddOne}>
            +1
          </button>
        </div>
      </div>
      <button className={"buttonReset"} onClick={handleResetCounter}>
          Reset
        </button>
    </div>
  );
}
