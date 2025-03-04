import * as  math from 'mathjs';
import { useEffect } from 'react';

import './App.css';

function App() {
  
  const addSymbolInField = (e) => {
    let symbol = '';
    if( typeof e === 'object'){
      symbol = e.target.innerText;
    }else{
      symbol = e;
    }
    
    const regex = /^[0-9]/;
    if(symbol.match(regex)){
      symbol = Number(symbol);
    }

    const calcField = document.getElementById('calc-field');
    const textCalcField = calcField.value;
    const previousSymbol = textCalcField[textCalcField.length - 1];

    let inputText = textCalcField + symbol;

    if(typeof(symbol) === 'number' && textCalcField[0] === '0' && textCalcField.length === 1){
      calcField.value = ''; // Clear 0
    }else if(typeof(symbol) === 'string'){
      switch (previousSymbol) {
        case '.':
          return;
        case '*':
        case '/':
        case '-':
        case '+':
          if(symbol != '.'){
              calcField.value = inputText.substr(0, inputText.length - 2);
            }else{
              return;
            }
            break;
      }
    }

    // Regex for double dots (example: 0.2 + 0.1.2)
    const regexForDot = /\d+\.\d*\./;
    if(inputText.match(regexForDot)){
      return;
    }

    return calcField.value += symbol;
  }

  const clearField = (e) => {
    document.getElementById('calc-field').value = '0';
  };

  const calculate = () => {
    const calcField = document.getElementById('calc-field');
    const textCalcField = calcField.value;

    const mathExpression = math.evaluate(textCalcField);
    const result = Math.round((mathExpression + Number.EPSILON) * 100) / 100; // example 0.1 + 0.2
    calcField.value = result;
  };

  // UseEffect for input with keyboard (only buttons: 0-9 . * - / + Backspace c)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if(/^[0-9.\/*\-\+]/.test(e.key)){
        addSymbolInField(e.key);
      }else if(e.key === 'Enter'){
        calculate();
      }else if(e.key === 'c' || e.key === 'Backspace'){
        clearField();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
    <>
    <div className="container">
      <form name="calc" className="calculator">
        <input type="text" className="value"  id="calc-field" value="0" readOnly />
        <span className="num clear" onClick={clearField}><i>C</i></span>
        <span className="num" onClick={addSymbolInField}><i>/</i></span>
        <span className="num" onClick={addSymbolInField}><i>*</i></span>
        <span className="num" onClick={addSymbolInField}><i>7</i></span>
        <span className="num" onClick={addSymbolInField}><i>8</i></span>
        <span className="num" onClick={addSymbolInField}><i>9</i></span>
        <span className="num" onClick={addSymbolInField}><i>-</i></span>
        <span className="num" onClick={addSymbolInField}><i>4</i></span>
        <span className="num" onClick={addSymbolInField}><i>5</i></span>
        <span className="num" onClick={addSymbolInField}><i>6</i></span>
        <span className="num plus" onClick={addSymbolInField}><i>+</i></span>
        <span className="num" onClick={addSymbolInField}><i>1</i></span>
        <span className="num" onClick={addSymbolInField}><i>2</i></span>
        <span className="num" onClick={addSymbolInField}><i>3</i></span>
        <span className="num" onClick={addSymbolInField}><i>%</i></span>
        <span className="num" onClick={addSymbolInField}><i>0</i></span>
        <span className="num" onClick={addSymbolInField}><i>.</i></span>

        <span className="num equal" onClick={calculate}><i>=</i></span>
      </form>
  </div>
    </>
  )
}

export default App;
