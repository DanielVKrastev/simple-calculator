import * as  math from 'mathjs';
import './App.css';

function App() {
  
  const addSymbolInField = (e) => {
    let symbol = e.target.innerText;
    const regex = /^[0-9]/;
    if(symbol.match(regex)){
      symbol = Number(symbol);
    }

    const calcField = document.getElementById('calc-field');
    const textCalcField = calcField.value;
    const previousSymbol = textCalcField[textCalcField.length - 1];

    if(typeof(symbol) === 'number' && textCalcField[0] === '0' && textCalcField.length === 1){
      calcField.value = '';
    }

    if(typeof(symbol) === 'string'){
      switch (previousSymbol) {
        case '.':
        case '*':
        case '/':
        case '-':
        case '+':
          return;
      }
    }
    
    let inputText = textCalcField + symbol;
    
    const regexForDot = /\d+\.\d*\./;
    if(inputText.match(regexForDot)){
      return;
    }

    calcField.value += symbol;
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

export default App
