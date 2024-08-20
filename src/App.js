import { useState } from "react";
import "./App.css";
import add from "./utility/sum";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState(-1);

  const handleCalculation = () => {
    setResult(add(inputVal));
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        placeholder="Enter values here"
      />
      <button type="button" onClick={handleCalculation}>
        Calculate
      </button>
      {result >= 0 ? <p>Sum is:: {result}</p> : ""}
    </div>
  );
}

export default App;
