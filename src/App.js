import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", "."];
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="display">
          {result ? <span>({result})</span> : ""}&nbsp;
          {calc || "0"}
        </div>
        <div className="operators">
          <button id="divide" onClick={() => updateCalc("/")}>
            /
          </button>
          <button id="multiply" onClick={() => updateCalc("*")}>
            *
          </button>
          <button id="add" onClick={() => updateCalc("+")}>
            +
          </button>
          <button id="subtract" onClick={() => updateCalc("-")}>
            -
          </button>

          <button id="clear" onClick={deleteLast}>
            DEL
          </button>
        </div>
        <div className="digits">
          <button id="one" onClick={() => updateCalc("1")}>
            1
          </button>
          <button id="two" onClick={() => updateCalc("2")}>
            2
          </button>
          <button id="three" onClick={() => updateCalc("3")}>
            3
          </button>
          <button id="four" onClick={() => updateCalc("4")}>
            4
          </button>
          <button id="five" onClick={() => updateCalc("5")}>
            5
          </button>
          <button id="six" onClick={() => updateCalc("6")}>
            6
          </button>
          <button id="seven" onClick={() => updateCalc("7")}>
            7
          </button>
          <button id="eight" onClick={() => updateCalc("8")}>
            8
          </button>
          <button id="nine" onClick={() => updateCalc("9")}>
            9
          </button>
          <button id="zero" onClick={() => updateCalc("0")}>
            0
          </button>
          <button id="decima" onClick={() => updateCalc(".")}>
            .
          </button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
