import logo from './logo.svg';
import './App.css';
import { Logo } from "./createLogo/logoOne";
import { Content } from './content/conttent';
import { Click } from './btn/button.js';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <Logo />
      <Content />
      <Click/>
    </div>
  );
}

export default App;
