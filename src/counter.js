import { useState } from "react";
import './index.css';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleSubtractOne = () => {
    setCount(count - 1);
  };

  const handleAddOne = () => {
    setCount(count + 1);
  };

  const handleOnChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubtractQuantity = () => {
    if (quantity) setCount(count - parseInt(quantity, 10));
    setQuantity(0);
  };

  const handleAddQuantity = () => {
    if (quantity) setCount(count + parseInt(quantity, 10));
    setQuantity(0);
  };

  const handleResetCounter = () => {
    setCount(0);
    setQuantity(0);
  };

  return (
    <div className={"wrapper"}>
      <div className="left">
        <div className="counter">
          {count}
        </div>
        <div className={"buttons"}>
          <button className={"buttonMinusOne"} onClick={handleSubtractOne}>
            -1
          </button>
          <button className={"buttonPlusOne"} onClick={handleAddOne}>
            +1
          </button>
        </div>
      </div>
      <div className="right">
        <h3>Add:</h3>
        <div className={"add"}>
          <input
            type="text"
            value={quantity}
            onChange={handleOnChange}
            className={"inputNumber"}
          />

          <button
            className={"buttonMinus"}
            onClick={handleSubtractQuantity}
          >
            -
          </button>
          <button className={"buttonPlus"} onClick={handleAddQuantity}>
            +
          </button>
        </div>
      </div>
      <button className={"buttonReset"} onClick={handleResetCounter}>
        Reset
      </button>
    </div>
  );
}
