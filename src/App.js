import React from "react";
import Dictionary from "./Dictionary";
import MyStory from "./MyStory";
import Medication from "./Medication";
import Resources from "./Resources";

import logo from "./glaucoma-app-logos_transparent.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
        </div>

        <main>
          <Dictionary />
          <br />
          <MyStory />
          <br />
          <Medication />
          <br />
          <Resources />
        </main>
        <footer className="App-footer">
          <small>coded by Candice Tomkins</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
