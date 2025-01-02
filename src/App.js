import logo from './logo.svg';
import './App.css';

function App() {
  // Access runtime environment variables
  const apiUrl = window._env_.REACT_APP_API_URL;
  const environment = window._env_.REACT_APP_ENV;

  console.log({apiUrl, environment});

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
      </header>
    </div>
  );
}

export default App;
