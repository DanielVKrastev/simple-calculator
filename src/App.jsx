import './App.css'

function App() {

  const addSymbolInField = (e) => {
    console.log(e.target.innerText);
    
  }


  return (
    <>
    <div className="container">
      <form name="calc" className="calculator">
        <input type="text" className="value" readOnly />
        <span className="num clear"><i>C</i></span>
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
        <span className="num" onClick={addSymbolInField}><i>0</i></span>
        <span className="num" onClick={addSymbolInField}><i>00</i></span>
        <span className="num" onClick={addSymbolInField}><i>.</i></span>

        <span className="num equal"><i>=</i></span>
      </form>
  </div>
    </>
  )
}

export default App
