// Calculator.js

import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <input className="display" type="text" value={display} readOnly />
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '=', '/'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => handleClick('C')}>C</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default Calculator;
