import React, { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const buttonArray = ["C", "⌫", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "0", "."];

  const display = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "⌫") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString()); 
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <input type="text" value={input} readOnly />

        <div className={styles["btn-container"]}>
          {buttonArray.map((item, index) => (
            <button onClick={() => display(item)} key={index}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
