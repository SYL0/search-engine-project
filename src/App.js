import React from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <h1>This is a search engine app</h1>

      {/* Home {the one with the search on} */}
      <Home />

      {/* Search Page {Results page} */}
    </div>
  );
}

export default App;
