// src/App.js

import React from "react";
import "./style/style.css"; // custom styles
import "./App.css"; // optional if you're still using CRA styles
import HomePage from "./pages/HomePage"; // import your main layout
import './index.css';         // Tailwind CSS entry (from CRA)

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

