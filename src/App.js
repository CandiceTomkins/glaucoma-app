import React from "react";
import Dictionary from "./Dictionary";
import MyStory from "./MyStory";
import logo from "./eye-purple-blue.jpeg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
          <h1>Glaucoma App</h1>
        </div>

        <main>
          <Dictionary />
          <MyStory />
        </main>
        <footer className="App-footer">
          <small>coded by Candice Tomkins</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
