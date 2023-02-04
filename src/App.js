import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import Nasa from "./components/nasa";

function App() {
  const [nasaveriler, setNasaVeriler] = useState(null);
  return (
    <div className="App">
      <Header />
      <Search />
      <Nasa />
    </div>
  );
}

export default App;
