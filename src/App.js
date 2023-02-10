import logo from "./logo.svg";
import "./App.css";

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
          href="https://buy.ramp.network?hostApiKey=your_host_apiKey&hostAppName=TixHive&hostLogoUrl=https://www.tixhive.com/_next/static/media/tixhive.d052a56e.svg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ramp crypto
        </a>
      </header>
    </div>
  );
}

export default App;
