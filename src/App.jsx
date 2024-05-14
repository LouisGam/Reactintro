import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [randnums, setRandNums] = useState([18, 3, 9]);
  return (
    <>
      <h1>Learning React</h1>
      <div>
        <p>Hey is this on?</p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <button
          onClick={() => {
            setRandNums([...randNums, Math.random() * 100]);
          }}
        >
          Generate another number
        </button>
        <ul>
          {randNums.map((element, index, arr) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
