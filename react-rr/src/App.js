import logo from './logo.svg';
import './App.css';
import LinkInputForm from './input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
