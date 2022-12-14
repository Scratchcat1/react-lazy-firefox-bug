import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [enableSrc, setEnableSrc] = useState(false)
  useEffect(() => setEnableSrc(true), [])

  // false -> immediately set src, causes all to fetch straight away in Firefox
  // true -> Only set the src on the second render, lazy image loading works in Firefox
  const delaySettingSrc = false

  const x = []
  for (let i = 0; i < 1000; i++) {
    x.push(i)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {x.map(y => <img key={y} style={{width: "100px", height: "100px"}} src={(!delaySettingSrc || enableSrc) && `http://localhost:3000/${y}.jpg`} loading="lazy"/>)}
      </header>
    </div>
  );
}

export default App;
