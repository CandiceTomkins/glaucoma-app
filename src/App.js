import logo from "./white-eye.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>Glaucoma App</h1>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>coded by Candice Tomkins</small>
      </footer>
    </div>
  );
}

export default App;
