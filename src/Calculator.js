import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div>
      <input type="text" value={num1} onChange={handleNum1Change} />
      <input type="text" value={num2} onChange={handleNum2Change} />
      <br />
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button>
      <br />
      <p>Result: {result}</p>
      <div className="calculator-buttons">
        <button onClick={() => setNum1(num1 + "1")}>1</button>
        <button onClick={() => setNum1(num1 + "2")}>2</button>
        <button onClick={() => setNum1(num1 + "3")}>3</button>
        <button onClick={() => setNum2(num2 + "4")}>4</button>
        <button onClick={() => setNum2(num2 + "5")}>5</button>
        <button onClick={() => setNum2(num2 + "6")}>6</button>
        <button onClick={() => setNum1(num1 + "7")}>7</button>
        <button onClick={() => setNum1(num1 + "8")}>8</button>
        <button onClick={() => setNum1(num1 + "9")}>9</button>
        <button onClick={() => setNum1(num1 + "0")}>0</button>
      </div>
    </div>
  );
};

export default Calculator;