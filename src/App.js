import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  function handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case "=":
        try {
          const result = eval(input);
          setInput(result.toString());
        } catch (error) {
          setInput("Error");
        }
        break;
      case "C":
        setInput("");
        break;
      default:
        setInput(input + value);
        break;
    }
  }

  return (
    <div className="calculator-container">
      <input type="text" value={input} disabled />
      <br />
      <button className="button" value="7" onClick={handleClick}>
        7
      </button>
      <button className="button" value="8" onClick={handleClick}>
        8
      </button>
      <button className="button" value="9" onClick={handleClick}>
        9
      </button>
      <button className="button operator" value="+" onClick={handleClick}>
        +
      </button>
      <br />
      <button className="button" value="4" onClick={handleClick}>
        4
      </button>
      <button className="button" value="5" onClick={handleClick}>
        5
      </button>
      <button className="button" value="6" onClick={handleClick}>
        6
      </button>
      <button className="button operator" value="-" onClick={handleClick}>
        -
      </button>
      <br />
      <button className="button" value="1" onClick={handleClick}>
        1
      </button>
      <button className="button" value="2" onClick={handleClick}>
        2
      </button>
      <button className="button" value="3" onClick={handleClick}>
        3
      </button>
      <button className="button operator" value="*" onClick={handleClick}>
        *
      </button>
      <br />
      <button className="button" value="0" onClick={handleClick}>
        0
      </button>
      <button className="button" value="." onClick={handleClick}>
        .
      </button>
      <button className="button equals" value="=" onClick={handleClick}>
        =
      </button>
      <button className="button operator" value="/" onClick={handleClick}>
        /
      </button>
      <br />
      <button className="button clear" value="C" onClick={handleClick}>
        C
      </button>
    </div>
  );
}

export default Calculator;
