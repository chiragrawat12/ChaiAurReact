import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter > 19) return;
    counter += 1;
    setCounter(counter);
    console.log("Counter value:", counter);
  };

  const removeValue = () => {
    if (counter < 1) return;
    counter -= 1;
    setCounter(counter);
    console.log("Counter value:", counter);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
