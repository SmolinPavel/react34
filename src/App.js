import logo from './logo.svg';
import './App.css';

import { Title } from './Title';

function App({ test }) {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title test>34</Title>
          {[1, 1, 1, 1, 1].map((number, idx) => (
            <span key={idx}>{number}</span>
          ))}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>test</div>
    </>
  );
}

export default App;
