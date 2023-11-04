import logo from './logo.svg';
import './App.css';
import LinkInputForm from './input';

function App() {
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
        <p>
        <LinkInputForm />
        </p>
        {knob()}
      </header>
    </div>
  );
}

function knob() {
  return (
    <div className="App-knob">
      <div id="burst-12"></div>
    </div>
  );
}

export default App;
